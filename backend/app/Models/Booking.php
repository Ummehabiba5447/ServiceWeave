<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'buyer_id',
        'seller_id',
        'status',
        'scheduled_date',
        'notes',
        'total_price',
        'service_fee',
        'amount_paid',
        'payment_status',
        'completed_at',
    ];

    protected $casts = [
        'scheduled_date' => 'datetime',
        'completed_at' => 'datetime',
        'total_price' => 'float',
        'service_fee' => 'float',
        'amount_paid' => 'float',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function buyer()
    {
        return $this->belongsTo(User::class, 'buyer_id');
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function review()
    {
        return $this->hasOne(Review::class, 'booking_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class, 'booking_id');
    }

    public function earning()
    {
        return $this->hasOne(Earning::class, 'booking_id');
    }

    public function isPending()
    {
        return $this->status === 'pending';
    }

    public function isAccepted()
    {
        return $this->status === 'accepted';
    }

    public function isCompleted()
    {
        return $this->status === 'completed';
    }
}
