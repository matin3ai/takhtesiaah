#!/bin/bash
# entrypoint.sh
set -e
# This script is executed when the Docker container starts.
# It performs database migrations, collects static files, and starts the Gunicorn server.
echo "Entrypoint script started..."

echo "Creating migrations..."
python /app/manage.py makemigrations blog
python /app/manage.py makemigrations playlist
python /app/manage.py makemigrations core

echo "Applying migrations..."
python /app/manage.py migrate

echo "Collecting static files..."
python /app/manage.py collectstatic  --noinput

exec gunicorn --workers=2 --timeout=120 --max-requests=500 --max-requests-jitter=50 --bind 0.0.0.0:8000 config.wsgi:application
