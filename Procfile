release: python manage.py migrate 
web: python manage.py runserver 0.0.0.0:$PORT --preload
web: gunicorn hotel_app.wsgi --log-file -
web: gunicorn accounts.wsgi --log-file -


