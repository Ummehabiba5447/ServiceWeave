<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BuyerController extends Controller
{
    public function browseServices(Request $request)
    {
        $query = Service::where('status', 'active')
            ->where('approval_status', 'approved')
            ->with('seller', 'category', 'reviews');

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                    ->orWhere('description', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->filled('location')) {
            $query->whereHas('seller', function ($q) use ($request) {
                $q->where('city', 'like', '%' . $request->location . '%');
            });
        }

        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        if ($request->filled('min_rating')) {
            $query->where('rating', '>=', $request->min_rating);
        }

        $sort = $request->get('sort', 'latest');
        match ($sort) {
            'price_low' => $query->orderBy('price', 'asc'),
            'price_high' => $query->orderBy('price', 'desc'),
            'rating' => $query->orderBy('rating', 'desc'),
            default => $query->orderBy('created_at', 'desc'),
        };

        $services = $query->paginate(12);

        return response()->json($services);
    }

    public function getService($serviceId)
    {
        $service = Service::with('seller', 'category', 'reviews.reviewer')->findOrFail($serviceId);

        return response()->json($service);
    }

    public function getMyBookings()
    {
        $buyer = auth()->user();

        $bookings = $buyer->bookingsAsBuyer()
            ->with('service', 'seller', 'review')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($bookings);
    }

    public function createBooking(Request $request)
    {
        $buyer = auth()->user();

        if (!$buyer->isBuyer()) {
            return response()->json(['message' => 'Only buyers can create bookings'], 403);
        }

        $validator = Validator::make($request->all(), [
            'service_id' => 'required|exists:services,id',
            'scheduled_date' => 'nullable|date',
            'notes' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $service = Service::findOrFail($request->service_id);

        $booking = $buyer->bookingsAsBuyer()->create([
            'service_id' => $service->id,
            'seller_id' => $service->seller_id,
            'scheduled_date' => $request->scheduled_date,
            'notes' => $request->notes,
            'total_price' => $service->price,
            'status' => 'pending',
        ]);

        \App\Models\AppNotification::notify(
            $service->seller_id,
            'booking_request',
            'New booking request',
            "{$buyer->name} requested to book \"{$service->title}\"",
            ['booking_id' => $booking->id]
        );

        return response()->json([
            'message' => 'Booking created successfully',
            'booking' => $booking->load('service', 'seller'),
        ], 201);
    }

    public function cancelBooking($bookingId)
    {
        $buyer = auth()->user();
        $booking = Booking::findOrFail($bookingId);

        if ($booking->buyer_id !== $buyer->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if (!in_array($booking->status, ['pending', 'accepted'])) {
            return response()->json(['message' => 'Cannot cancel this booking'], 422);
        }

        $booking->update(['status' => 'cancelled']);

        return response()->json(['message' => 'Booking cancelled successfully']);
    }

    public function leaveReview(Request $request, $bookingId)
    {
        $buyer = auth()->user();
        $booking = Booking::findOrFail($bookingId);

        if ($booking->buyer_id !== $buyer->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($booking->status !== 'completed') {
            return response()->json(['message' => 'Can only review completed bookings'], 422);
        }

        $validator = Validator::make($request->all(), [
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $existingReview = Review::where('booking_id', $bookingId)->first();
        if ($existingReview) {
            return response()->json(['message' => 'You have already reviewed this booking'], 422);
        }

        $review = Review::create([
            'service_id' => $booking->service_id,
            'booking_id' => $bookingId,
            'reviewer_id' => $buyer->id,
            'seller_id' => $booking->seller_id,
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);

        // Update service rating
        $service = $booking->service;
        $avgRating = $service->reviews()->avg('rating');
        $service->update([
            'rating' => $avgRating,
            'total_reviews' => $service->reviews()->count(),
        ]);

        // Update seller rating
        $seller = $booking->seller;
        $sellerAvgRating = $seller->receivedReviews()->avg('rating');
        $seller->update([
            'rating' => $sellerAvgRating,
            'total_reviews' => $seller->receivedReviews()->count(),
        ]);

        \App\Models\AppNotification::notify(
            $booking->seller_id,
            'new_review',
            'New review received',
            "{$buyer->name} left a {$request->rating}-star review",
            ['review_id' => $review->id]
        );

        return response()->json([
            'message' => 'Review created successfully',
            'review' => $review,
        ], 201);
    }

    public function getProfile()
    {
        $user = auth()->user();

        $stats = [
            'total_bookings' => $user->bookingsAsBuyer()->count(),
            'completed_bookings' => $user->bookingsAsBuyer()->where('status', 'completed')->count(),
            'reviews_given' => $user->reviews()->count(),
        ];

        return response()->json([
            'user' => $user,
            'stats' => $stats,
        ]);
    }

    public function updateProfile(Request $request)
    {
        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'phone' => 'nullable|string|max:20',
            'bio' => 'nullable|string|max:500',
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'avatar_url' => 'nullable|string|url',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user->update($request->only('name', 'phone', 'bio', 'address', 'city', 'country', 'avatar_url'));

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
        ]);
    }
}
