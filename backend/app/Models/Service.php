<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'seller_id',
        'category_id',
        'title',
        'description',
        'detailed_description',
        'price',
        'duration',
        'images',
        'status',
        'approval_status',
        'rating',
        'total_reviews',
        'total_bookings',
        'tags',
        'faq',
    ];

    protected $casts = [
        'images' => 'array',
        'tags' => 'array',
        'faq' => 'array',
        'price' => 'float',
        'rating' => 'float',
        'total_reviews' => 'integer',
        'total_bookings' => 'integer',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'category_id');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'service_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'service_id');
    }

    public function completedBookings()
    {
        return $this->bookings()->where('status', 'completed');
    }

    public function getAverageRating()
    {
        return $this->reviews()->avg('rating') ?? 0;
    }
}
