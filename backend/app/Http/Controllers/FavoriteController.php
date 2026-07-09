<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $favorites = $user->favorites()
            ->with(['service.seller', 'product.seller'])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json(['data' => $favorites]);
    }

    public function toggleService($serviceId)
    {
        $user = auth()->user();
        $existing = Favorite::where('user_id', $user->id)->where('service_id', $serviceId)->first();

        if ($existing) {
            $existing->delete();
            return response()->json(['message' => 'Removed from favorites', 'favorited' => false]);
        }

        Favorite::create(['user_id' => $user->id, 'service_id' => $serviceId]);
        return response()->json(['message' => 'Added to favorites', 'favorited' => true]);
    }

    public function toggleProduct($productId)
    {
        $user = auth()->user();
        $existing = Favorite::where('user_id', $user->id)->where('product_id', $productId)->first();

        if ($existing) {
            $existing->delete();
            return response()->json(['message' => 'Removed from favorites', 'favorited' => false]);
        }

        Favorite::create(['user_id' => $user->id, 'product_id' => $productId]);
        return response()->json(['message' => 'Added to favorites', 'favorited' => true]);
    }
}
