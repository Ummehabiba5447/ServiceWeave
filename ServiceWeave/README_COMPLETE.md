# ServiceWeave - Complete Full-Stack Marketplace Platform

A comprehensive marketplace platform combining features from Fiverr, OLX, Airbnb, and Amazon into a single community service and local marketplace.

## 🚀 Project Overview

ServiceWeave is a modern full-stack web application built with:

### Frontend
- **React 19** with Vite
- **TailwindCSS** for styling
- **Redux Toolkit** for state management
- **Lucide React** for icons
- **React Router** for navigation
- **Axios** for API calls

### Backend
- **Laravel 11** REST API
- **PostgreSQL** database
- **JWT Authentication** with Tymon/JWT-Auth
- **CORS** support for frontend

## 📋 Features

### Authentication
- ✅ User Registration (Buyer/Seller roles)
- ✅ Email/Password Login
- ✅ JWT Token Management
- ✅ Token Refresh
- ✅ Logout
- ✅ Protected Routes
- ✅ Role-Based Access Control

### Seller Features
- ✅ Dashboard with Statistics
- ✅ Service Management (Create, Read, Update, Delete)
- ✅ Service Categories
- ✅ Booking Management
- ✅ Review Management with Replies
- ✅ Earnings Tracking
- ✅ Real-Time Messages
- ✅ Profile Management

### Buyer Features
- ✅ Browse Services
- ✅ Search & Filter Services
- ✅ Create Service Bookings
- ✅ Manage Bookings
- ✅ Leave Reviews & Ratings
- ✅ Real-Time Messages with Sellers
- ✅ Profile Management

## 🛠️ Installation & Setup

### Prerequisites
- PHP 8.2+
- Node.js 18+ with npm
- PostgreSQL 14+
- Composer
- Git

### Step 1: Database Setup

```bash
# Create PostgreSQL database
createdb serviceweave

# Or using psql
psql
CREATE DATABASE serviceweave;
\q
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Copy environment file
cp .env.example .env

# Update .env with your PostgreSQL credentials
# DB_HOST=localhost
# DB_PORT=5432
# DB_DATABASE=serviceweave
# DB_USERNAME=postgres
# DB_PASSWORD=your_password

# Install dependencies
composer install

# Generate JWT secret
php artisan jwt:secret

# Run migrations
php artisan migrate

# Seed sample data (optional)
php artisan db:seed

# Start the server
php artisan serve
# Server runs on http://localhost:8000
```

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Copy environment file
cp .env.example .env

# .env contents:
# VITE_API_URL=http://localhost:8000/api

# Install dependencies
npm install

# Start development server
npm run dev
# Frontend runs on http://localhost:5173
```

## 📂 Project Structure

```
ServiceWeave/
├── backend/                      # Laravel API
│   ├── app/
│   │   ├── Models/              # Database models
│   │   ├── Http/Controllers/    # API controllers
│   │   └── Http/Middleware/     # Custom middleware
│   ├── database/
│   │   └── migrations/          # Database migrations
│   ├── routes/
│   │   └── api.php              # API routes
│   ├── config/
│   │   ├── database.php         # Database config
│   │   └── jwt.php              # JWT config
│   └── .env                     # Environment variables
│
└── frontend/                     # React App
    ├── src/
    │   ├── auth/                # Authentication pages
    │   ├── components/          # React components
    │   ├── pages/               # Page components
    │   ├── services/            # API service layer
    │   ├── store/               # Redux store
    │   │   ├── slices/          # Redux slices
    │   │   └── store.js         # Store configuration
    │   ├── App.jsx              # Main app component
    │   ├── main.jsx             # Entry point
    │   └── index.css            # Global styles
    ├── package.json             # Dependencies
    ├── vite.config.js           # Vite configuration
    └── .env                     # Environment variables
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/change-password` - Change password

### Seller
- `GET /api/seller/dashboard` - Dashboard stats
- `GET /api/seller/services` - List seller services
- `POST /api/seller/services` - Create service
- `PUT /api/seller/services/{id}` - Update service
- `DELETE /api/seller/services/{id}` - Delete service
- `GET /api/seller/bookings` - List bookings
- `PUT /api/seller/bookings/{id}/status` - Update booking status
- `GET /api/seller/reviews` - List reviews
- `POST /api/seller/reviews/{id}/reply` - Reply to review
- `GET /api/seller/earnings` - Earnings data

### Buyer
- `GET /api/buyer/bookings` - List buyer bookings
- `POST /api/buyer/bookings` - Create booking
- `DELETE /api/buyer/bookings/{id}` - Cancel booking
- `POST /api/buyer/bookings/{id}/review` - Leave review
- `GET /api/buyer/profile` - Get profile
- `PUT /api/buyer/profile` - Update profile

### Categories & Services
- `GET /api/categories` - List all categories
- `GET /api/categories/with-services` - Categories with services
- `GET /api/services/browse` - Browse services
- `GET /api/services/{id}` - Get service details

### Messages
- `GET /api/messages` - List conversations
- `GET /api/messages/{userId}` - Get conversation messages
- `POST /api/messages` - Send message
- `PUT /api/messages/{id}/read` - Mark as read
- `GET /api/messages/unread` - Get unread count

## 🔐 Authentication Flow

1. **Registration**: User creates account with email, password, and role (buyer/seller)
2. **Login**: User credentials validated, JWT token generated
3. **Token Storage**: Token stored in localStorage
4. **Authenticated Requests**: Token included in Authorization header
5. **Token Refresh**: Auto-refresh on token expiry
6. **Logout**: Token removed from localStorage

## 🎨 Frontend Routes

### Public Routes
- `/` - Home page
- `/login` - Login page
- `/register` - Registration page

### Protected Seller Routes
- `/seller/dashboard` - Seller dashboard
- `/seller/services` - Manage services
- `/seller/bookings` - View bookings
- `/seller/earnings` - Earnings page
- `/seller/messages` - Messages
- `/seller/reviews` - Customer reviews

### Protected Buyer Routes
- `/buyer/dashboard` - Buyer dashboard
- `/buyer/bookings` - My bookings
- `/buyer/messages` - Messages

## 📊 Database Schema

### Users
- id, name, email, password, phone, role, avatar_url, bio, address, city, country, rating, total_reviews, is_active

### Services
- id, seller_id, category_id, title, description, detailed_description, price, duration, images, status, rating, total_reviews, tags, faq

### ServiceCategories
- id, name, slug, description, icon_url, order, is_active

### Bookings
- id, service_id, buyer_id, seller_id, status, scheduled_date, notes, total_price, service_fee, amount_paid, payment_status, completed_at

### Reviews
- id, service_id, booking_id, reviewer_id, seller_id, rating, comment, seller_reply, replied_at

### Messages
- id, sender_id, receiver_id, booking_id, message, attachments, is_read, read_at

### Earnings
- id, seller_id, booking_id, amount, platform_fee, net_amount, status, notes

## 🚨 Important Notes

1. **Environment Variables**: Update `.env` files in both backend and frontend with your configuration
2. **Database**: PostgreSQL must be running before starting the backend
3. **API URL**: Frontend API URL must match backend URL (default: `http://localhost:8000`)
4. **CORS**: Already configured for development (localhost:5173)
5. **JWT Secret**: Generate with `php artisan jwt:secret` command

## 🧪 Testing

### Test User Accounts
You can create test accounts during registration or through the seeder:

```bash
php artisan db:seed
```

## 🚀 Production Deployment

### Backend (Laravel)
1. Set `APP_ENV=production` in `.env`
2. Set `APP_DEBUG=false`
3. Generate app key: `php artisan key:generate`
4. Run migrations: `php artisan migrate --force`
5. Configure web server (Apache/Nginx)
6. Set proper file permissions

### Frontend (React)
1. Build for production: `npm run build`
2. Output in `dist` folder
3. Deploy `dist` to web server
4. Configure environment variables for production API

## 📚 API Documentation

Full API documentation with request/response examples available in the backend folder.

## 🤝 Support

For issues or questions:
1. Check the error messages in browser console
2. Check Laravel logs in `backend/storage/logs`
3. Verify all environment variables are correct
4. Ensure database is accessible
5. Check CORS configuration

## 📄 License

This project is provided as-is for educational and commercial use.

## ✨ Features Implemented

- [x] User Authentication with JWT
- [x] Role-Based Access Control
- [x] Seller Dashboard
- [x] Service Management
- [x] Booking System
- [x] Review System
- [x] Messaging System
- [x] Earnings Tracking
- [x] PostgreSQL Database
- [x] Redux State Management
- [x] Protected Routes
- [x] Error Handling
- [x] Loading States
- [x] Responsive Design

## 🎯 Next Steps

1. Configure your database credentials
2. Run backend migrations
3. Start both frontend and backend servers
4. Visit http://localhost:5173
5. Register a test account
6. Explore the application

---

**Happy coding! 🚀**
