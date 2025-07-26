FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    DJANGO_SETTINGS_MODULE=config.settings.production

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
        netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN useradd --create-home --shell /bin/bash appuser

WORKDIR /app

COPY --chown=appuser:appuser src/ /app/
COPY --chown=appuser:appuser requirements/prod.txt /app/requirements.txt
COPY --chown=appuser:appuser scripts/entrypoint.sh /app/entrypoint.sh

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.txt && \
    pip install --no-cache-dir gunicorn==23.0.0

RUN mkdir -p /app/staticfiles /app/database /app/media && \
    chmod -R 777 /app/staticfiles /app/database /app/media && \
    chown -R appuser:appuser /app

RUN chmod +x /app/entrypoint.sh

USER appuser

EXPOSE 8000
ENTRYPOINT ["/app/entrypoint.sh"]