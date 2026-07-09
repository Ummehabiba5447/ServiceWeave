<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'seller_id',
        'category_id',
        'title',
        'description',
        'price',
        'stock',
        'condition',
        'location',
        'images',
        'approval_status',
        'status',
        'rating',
        'total_reviews',
        'views',
    ];

    protected $casts = [
        'images' => 'array',
        'price' => 'float',
        'rating' => 'float',
        'stock' => 'integer',
        'total_reviews' => 'integer',
        'views' => 'integer',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'category_id');
    }

    public function favoritedBy()
    {
        return $this->hasMany(Favorite::class);
    }
}
