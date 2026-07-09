<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Earning extends Model
{
    use HasFactory;

    protected $fillable = [
        'seller_id',
        'booking_id',
        'amount',
        'platform_fee',
        'net_amount',
        'status',
        'notes',
    ];

    protected $casts = [
        'amount' => 'float',
        'platform_fee' => 'float',
        'net_amount' => 'float',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }

    public function isPending()
    {
        return $this->status === 'pending';
    }

    public function isCompleted()
    {
        return $this->status === 'completed';
    }

    public function isWithdrawn()
    {
        return $this->status === 'withdrawn';
    }
}
