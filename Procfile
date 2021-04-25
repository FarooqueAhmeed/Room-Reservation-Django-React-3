release: python manage.py migrate 
web: python manage.py runserver 0.0.0.0:$PORT --preload

web: gunicorn hotel_reservation_site.wsgi --timeout 180 --keep-alive 5 --log-level debug





