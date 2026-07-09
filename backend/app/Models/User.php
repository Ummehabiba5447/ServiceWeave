<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * NOTE: this previously only listed name/email/password, which silently
     * dropped `role`, `phone`, etc. on registration -- every new user ended up
     * as a 'buyer' regardless of what was selected on the signup form.
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'role',
        'avatar_url',
        'bio',
        'address',
        'city',
        'country',
        'rating',
        'total_reviews',
        'is_active',
        'is_suspended',
        'suspension_reason',
        'last_login_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_active' => 'boolean',
            'is_suspended' => 'boolean',
            'rating' => 'float',
            'total_reviews' => 'integer',
            'last_login_at' => 'datetime',
        ];
    }

    public function tokens()
    {
        return $this->hasMany(PersonalAccessToken::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class, 'seller_id');
    }

    public function bookingsAsBuyer()
    {
        return $this->hasMany(Booking::class, 'buyer_id');
    }

    public function bookingsAsSeller()
    {
        return $this->hasMany(Booking::class, 'seller_id');
    }

    /** Reviews this user WROTE (as a buyer) */
    public function reviews()
    {
        return $this->hasMany(Review::class, 'reviewer_id');
    }

    /** Reviews this user RECEIVED (as a seller) */
    public function receivedReviews()
    {
        return $this->hasMany(Review::class, 'seller_id');
    }

    public function earnings()
    {
        return $this->hasMany(Earning::class, 'seller_id');
    }

    public function getTotalEarnings(): float
    {
        return (float) $this->earnings()->whereIn('status', ['completed', 'withdrawn'])->sum('net_amount');
    }

    /** Earned but not yet withdrawn */
    public function getAvailableBalance(): float
    {
        return (float) $this->earnings()->where('status', 'completed')->sum('net_amount');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'seller_id');
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    public function notifications()
    {
        return $this->hasMany(AppNotification::class)->orderBy('created_at', 'desc');
    }

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function isSeller(): bool
    {
        return $this->role === 'seller';
    }

    public function isBuyer(): bool
    {
        return $this->role === 'buyer';
    }

    /**
     * Create a new plain-text access token for this user and store its hash.
     * Returns the plain-text token (only ever shown once).
     */
    public function createToken(): string
    {
        $plainToken = Str::random(80);

        $this->tokens()->create([
            'token' => hash('sha256', $plainToken),
            'expires_at' => now()->addDays(30),
        ]);

        return $plainToken;
    }
}
