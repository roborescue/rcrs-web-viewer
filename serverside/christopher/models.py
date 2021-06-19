from django.db import models
from django.conf import settings

# Create your models here.
class Competition(models.Model):
    name = models.CharField(null=False, max_length=64)
    start_date = models.DateTimeField(null=True)
    end_date = models.DateTimeField(null=True)
    url = models.URLField(null=True)
    icon_path = models.FilePathField(null=True)
    log_file_dir = models.FilePathField(allow_folders=True, allow_files=False, null=False)


class Round(models.Model):
    name = models.CharField(null=False, max_length=64, unique=True)

    @property
    def order(self):
        return self.id


class Match(models.Model):
    competition = models.ForeignKey(Competition, on_delete=models.DO_NOTHING)
    round = models.ForeignKey(Round, on_delete=models.DO_NOTHING, default=None, null=True)
    team_name = models.CharField(max_length=64)
    map_name = models.CharField(max_length=64, null=True)
    score = models.FloatField(null=True)
    log_name = models.CharField(max_length=128, unique=True)

    @property
    def log_file(self):
        logs_dir = settings.STATIC_URL_LOGS
        comp_dir = self.competition.log_file_dir
        file_name = self.log_name
        return f"{logs_dir}/{comp_dir}/{file_name}"

