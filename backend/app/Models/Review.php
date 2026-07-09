<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'booking_id',
        'reviewer_id',
        'seller_id',
        'rating',
        'comment',
        'seller_reply',
        'replied_at',
    ];

    protected $casts = [
        'rating' => 'integer',
        'replied_at' => 'datetime',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id');
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function hasReply()
    {
        return !is_null($this->seller_reply);
    }
}
