import glob
import json
import logging
import os
from shutil import copy2

from django.core.management.base import BaseCommand, CommandError

from christopher.models import Competition, Match, Round
from settings import LOG_DIR, RAW_LOG_FILE_FORMAT, PREPARED_LOG_DIR

logging.basicConfig(level=logging.DEBUG)


class Command(BaseCommand):
    help = 'Prepare raw jlog file'

    def add_arguments(self, parser):
        parser.add_argument('competition_id', nargs='+', type=int)

    def handle(self, *args, **options):
        for competition_id in options['competition_id']:
            try:
                competition = Competition.objects.get(pk=competition_id)
                prepare_competition(competition)
            except Competition.DoesNotExist:
                raise CommandError('Competition "%s" does not exist' % competition_id)

            self.stdout.write(self.style.SUCCESS('Successfully prepared competition "%s"' % competition_id))


def prepare_competition(competition):
    competition_log_dir = os.path.join(LOG_DIR, competition.log_file_dir)
    competition_prepared_log_dir = os.path.join(PREPARED_LOG_DIR, competition.log_file_dir)

    if not os.path.exists(competition_prepared_log_dir):
        os.mkdir(competition_prepared_log_dir)
    os.chdir(competition_log_dir)
    
    for round_dir in os.listdir():
        try:
            round_object = Round.objects.get(name=round_dir)
        except Round.DoesNotExist:
            round_object = Round.objects.create(name=round_dir)
        print(f"prepare {competition.name}, {round_object.name}")
        for log_file_name in glob.glob(f"**/*.{RAW_LOG_FILE_FORMAT}", recursive=True):
            try:
                logging.info(log_file_name)
                summary = read_log_summary(log_file_name)
                score = read_last_score(log_file_name)
                create_match(competition, round_object, summary, log_file_name.split("/")[-1], score)
                copy2(log_file_name, competition_prepared_log_dir)
            except CommandError as err:
                logging.error(err)


def create_match(competition, round, summary, log_file_name, score=None):
    try:
        match = Match.objects.get(log_name=log_file_name)
        match.competition = competition
        match.round = round
        match.team_name = summary['TeamName']
        match.map_name = summary['MapName']
        match.score = score
        match.log_name = log_file_name
        match.save()

    except Match.DoesNotExist:
        Match.objects.create(
            competition=competition, 
            round=round,
            team_name=summary['TeamName'],
            map_name=summary['MapName'],
            score=score,
            log_name=log_file_name
        )


def read_log_summary(file_name):
    try:
        with open(file_name, 'rb') as log_file:
            summary_string = log_file.readline()
            log_file.close()
        summary_dict = json.loads(summary_string)
        return summary_dict

    except IOError:
        raise CommandError(f"Could not read summary: {file_name}")
    except ValueError:
        raise CommandError(f"Could not load summary: {file_name} / {summary_string}")

def read_last_score(file_name):
    try:
        with open(file_name, 'rb') as log_file:
            lines = log_file.readlines()
            log_file.close()
            last_line = lines[-1]
        last_line_dict = json.loads(last_line)
        last_line_info = last_line_dict.get("Info", {})
        last_line_score = last_line_info.get("Score", -1)
        return float(last_line_score)
    except IOError:
        raise CommandError(f"Could not read last score: {file_name}")
    except ValueError:
        raise CommandError(f"Could not load last score: {file_name} / {last_line}")
