# ServiceWeave 

## Setup

```bash
# Backend
cd backend
composer install
cp .env.example .env   # already has pgsql config in the committed .env
php artisan key:generate
# create a Postgres database named `serviceweave` (or update .env)
php artisan migrate
php artisan db:seed

# Frontend
cd ../ServiceWeave/frontend
npm install
npm run dev
```

Demo accounts (created by the seeder):
- Admin: `admin@serviceweave.test` / `Admin@12345`

