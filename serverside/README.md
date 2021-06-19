# Christopher  

Christopher is a  rcrs-webviwer backend.

### Before Deploy:

```sh
    python manage.py migrate
    python manage.py collectstatic
```

### Add competition:

```sh
    python manage.py shell
    # ADD COMPETITION 
        from christopher.models import competition
        competition.objects.create(<ARGS>);
    # COPY LOG file into web_viewer_logs
    python manage.py prepare <COMPEITION_ID>
```

### Deploy:
```sh
    docker-compose up
```
