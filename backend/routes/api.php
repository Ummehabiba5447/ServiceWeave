<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\JwtMiddleware;
use App\Http\Middleware\AdminMiddleware;

// Public routes
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::get('/categories', [CategoryController::class, 'getAll']);
Route::get('/categories/with-services', [CategoryController::class, 'getWithServices']);
Route::get('/services/browse', [BuyerController::class, 'browseServices']);
Route::get('/services/{id}', [BuyerController::class, 'getService']);
Route::get('/products/browse', [ProductController::class, 'browse']);
Route::get('/products/{id}', [ProductController::class, 'show']);

// Protected routes
Route::middleware([JwtMiddleware::class])->group(function () {
        // Auth routes
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        Route::post('/auth/refresh', [AuthController::class, 'refresh']);
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::put('/auth/profile', [AuthController::class, 'updateProfile']);
        Route::post('/auth/change-password', [AuthController::class, 'changePassword']);

        // Seller routes
        Route::prefix('seller')->group(function () {
            Route::get('/dashboard', [SellerController::class, 'dashboard']);
            Route::get('/services', [SellerController::class, 'getServices']);
            Route::post('/services', [SellerController::class, 'createService']);
            Route::put('/services/{id}', [SellerController::class, 'updateService']);
            Route::delete('/services/{id}', [SellerController::class, 'deleteService']);
            Route::get('/bookings', [SellerController::class, 'getBookings']);
            Route::get('/bookings/{status}', [SellerController::class, 'getBookings']);
            Route::put('/bookings/{id}/status', [SellerController::class, 'updateBookingStatus']);
            Route::get('/reviews', [SellerController::class, 'getReviews']);
            Route::post('/reviews/{id}/reply', [SellerController::class, 'replyReview']);
            Route::get('/earnings', [SellerController::class, 'getEarnings']);
        });

        // Buyer routes
        Route::prefix('buyer')->group(function () {
            Route::get('/bookings', [BuyerController::class, 'getMyBookings']);
            Route::post('/bookings', [BuyerController::class, 'createBooking']);
            Route::delete('/bookings/{id}', [BuyerController::class, 'cancelBooking']);
            Route::post('/bookings/{id}/review', [BuyerController::class, 'leaveReview']);
            Route::get('/profile', [BuyerController::class, 'getProfile']);
            Route::put('/profile', [BuyerController::class, 'updateProfile']);
        });

        // Products (any authenticated user can list/manage their own products)
        Route::prefix('products')->group(function () {
            Route::get('/mine', [ProductController::class, 'myProducts']);
            Route::post('/', [ProductController::class, 'store']);
            Route::put('/{id}', [ProductController::class, 'update']);
            Route::delete('/{id}', [ProductController::class, 'destroy']);
        });

        // Favorites
        Route::prefix('favorites')->group(function () {
            Route::get('/', [FavoriteController::class, 'index']);
            Route::post('/services/{id}/toggle', [FavoriteController::class, 'toggleService']);
            Route::post('/products/{id}/toggle', [FavoriteController::class, 'toggleProduct']);
        });

        // Notifications
        Route::prefix('notifications')->group(function () {
            Route::get('/', [NotificationController::class, 'index']);
            Route::get('/unread-count', [NotificationController::class, 'unreadCount']);
            Route::put('/{id}/read', [NotificationController::class, 'markAsRead']);
            Route::put('/read-all', [NotificationController::class, 'markAllAsRead']);
        });

        // Reports (any authenticated user can report content)
        Route::post('/reports', [ReportController::class, 'store']);

        // Message routes
        Route::prefix('messages')->group(function () {
            Route::get('/', [MessageController::class, 'getConversations']);
            Route::get('/unread', [MessageController::class, 'getUnreadCount']);
            Route::get('/{userId}', [MessageController::class, 'getMessages']);
            Route::post('/', [MessageController::class, 'sendMessage']);
            Route::put('/{id}/read', [MessageController::class, 'markAsRead']);
        });

        // Admin routes — require JWT auth AND admin role
        Route::prefix('admin')->middleware([AdminMiddleware::class])->group(function () {
            Route::get('/stats', [AdminController::class, 'stats']);
            Route::get('/users', [AdminController::class, 'users']);
            Route::put('/users/{id}/suspend', [AdminController::class, 'suspendUser']);
            Route::put('/users/{id}/reinstate', [AdminController::class, 'reinstateUser']);
            Route::delete('/users/{id}', [AdminController::class, 'deleteUser']);
            Route::get('/listings', [AdminController::class, 'listings']);
            Route::put('/listings/{type}/{id}/approve', [AdminController::class, 'approveListing']);
            Route::put('/listings/{type}/{id}/reject', [AdminController::class, 'rejectListing']);
            Route::delete('/listings/{type}/{id}', [AdminController::class, 'removeListing']);
            Route::get('/reports', [AdminController::class, 'reports']);
            Route::put('/reports/{id}', [AdminController::class, 'updateReportStatus']);
        });
});
