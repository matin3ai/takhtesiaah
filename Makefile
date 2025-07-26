.PHONY: help build up down restart shell migrate collectstatic createsuperuser logs

help:
	@echo "🛠️  Useful Makefile Commands:"
	@echo "  make build          → Build docker images"
	@echo "  make up             → Start services"
	@echo "  make down           → Stop services"
	@echo "  make restart        → Restart services"
	@echo "  make shell          → Open Django shell"
	@echo "  make migrate        → Run migrations"
	@echo "  make createsuperuser→ Create a superuser"
	@echo "  make collectstatic  → Collect static files"
	@echo "  make logs           → Show logs"

build:
	docker compose -f docker-compose.prod.yml build

up:
	docker compose -f docker-compose.prod.yml up -d

down:
	docker compose -f docker-compose.prod.yml down

restart:
	docker compose -f docker-compose.prod.yml down && docker compose -f docker-compose.prod.yml up -d

shell:
	docker exec -it takhtesiaah_web python manage.py shell

migrate:
	docker exec -it takhtesiaah_web python manage.py migrate

createsuperuser:
	docker exec -it takhtesiaah_web python manage.py createsuperuser

collectstatic:
	docker exec -it takhtesiaah_web python manage.py collectstatic --noinput

logs:
	docker compose -f docker-compose.prod.yml logs -f
