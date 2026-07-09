# Quick Setup Guide - ServiceWeave

## 🚀 Get Started in 5 Minutes

### Prerequisites Check
- [ ] PHP 8.2+ installed
- [ ] Node.js 18+ installed
- [ ] PostgreSQL running
- [ ] Composer installed

### Step 1: Backend Setup (5 minutes)

```bash
cd backend

# Copy environment template
cp .env.example .env

# Edit .env with your database credentials:
# DB_DATABASE=serviceweave
# DB_USERNAME=postgres
# DB_PASSWORD=your_password

# Install dependencies
composer install

# Generate JWT secret
php artisan jwt:secret

# Run migrations
php artisan migrate

# Start backend server
php artisan serve
```

**Backend will be available at:** http://localhost:8000

### Step 2: Frontend Setup (3 minutes)

**In a new terminal:**

```bash
cd frontend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start frontend development server
npm run dev
```

**Frontend will be available at:** http://localhost:5173

### Step 3: Test the Application

1. Open http://localhost:5173 in your browser
2. Click "Create Account"
3. Register as a Seller or Buyer
4. Explore the dashboard!

---

## 🔑 API Key Configuration

The JWT secret is automatically generated. If you need to regenerate:

```bash
php artisan jwt:secret
```

## 📦 Database Setup

Create PostgreSQL database:

```bash
# Using command line
createdb serviceweave

# Or using psql
psql
CREATE DATABASE serviceweave;
\q
```

## ✅ Verification Checklist

- [ ] Backend running on port 8000
- [ ] Frontend running on port 5173
- [ ] Can access http://localhost:5173
- [ ] Can register a new account
- [ ] Can login with registered account
- [ ] Can see dashboard (Seller or Buyer)

## 🛠️ Environment Variables Reference

### Backend (.env)
```
APP_NAME=ServiceWeave
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=serviceweave
DB_USERNAME=postgres
DB_PASSWORD=postgres

JWT_SECRET=generated_by_php_artisan
JWT_TTL=60
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=ServiceWeave
```

## 🆘 Troubleshooting

### Backend won't start
- [ ] Check if port 8000 is already in use
- [ ] Verify PostgreSQL is running
- [ ] Check if .env file exists
- [ ] Run `php artisan migrate`

### Frontend won't start
- [ ] Check if port 5173 is already in use
- [ ] Verify Node.js is installed: `node --version`
- [ ] Clear node_modules: `rm -rf node_modules && npm install`

### Can't login
- [ ] Check backend is running (http://localhost:8000)
- [ ] Verify database migrations ran: `php artisan migrate:status`
- [ ] Check browser console for errors
- [ ] Check network tab to see API responses

### Database errors
- [ ] Verify PostgreSQL is running
- [ ] Check credentials in .env match your database
- [ ] Run `php artisan migrate --refresh` to reset database

---

## 📚 Full Documentation

See `README_COMPLETE.md` for comprehensive documentation including:
- API endpoints
- Database schema
- Project structure
- Feature list
- Deployment guide

---

**Need help?** Check the error messages in:
- Browser console (Ctrl+Shift+K)
- Laravel logs: `backend/storage/logs/laravel.log`
- Network tab (F12 > Network)

**Happy coding! 🎉**
