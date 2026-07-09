<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Booking;
use App\Models\Review;
use App\Models\Earning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SellerController extends Controller
{
    public function dashboard()
    {
        $seller = auth()->user();

        if (!$seller->isSeller()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $totalServices = $seller->services()->count();
        $totalBookings = $seller->bookingsAsSeller()->count();
        $completedBookings = $seller->bookingsAsSeller()->where('status', 'completed')->count();
        $pendingBookings = $seller->bookingsAsSeller()->where('status', 'pending')->count();
        $totalEarnings = $seller->getTotalEarnings();
        $availableBalance = $seller->getAvailableBalance();
        $averageRating = $seller->receivedReviews()->avg('rating') ?? 0;
        $totalReviews = $seller->receivedReviews()->count();

        $recentBookings = $seller->bookingsAsSeller()
            ->with('service', 'buyer')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        $recentReviews = $seller->receivedReviews()
            ->with('reviewer', 'service')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return response()->json([
            'totalServices' => $totalServices,
            'totalBookings' => $totalBookings,
            'completedBookings' => $completedBookings,
            'pendingBookings' => $pendingBookings,
            'totalEarnings' => $totalEarnings,
            'availableBalance' => $availableBalance,
            'averageRating' => round($averageRating, 2),
            'totalReviews' => $totalReviews,
            'recentBookings' => $recentBookings,
            'recentReviews' => $recentReviews,
        ]);
    }

    public function getServices()
    {
        $seller = auth()->user();

        if (!$seller->isSeller()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $services = $seller->services()
            ->with('category')
            ->orderBy('created_at', 'desc')
            ->paginate(12);

        return response()->json($services);
    }

    public function createService(Request $request)
    {
        $seller = auth()->user();

        if (!$seller->isSeller()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'detailed_description' => 'nullable|string',
            'category_id' => 'required|exists:service_categories,id',
            'price' => 'required|numeric|min:0.01',
            'duration' => 'nullable|string',
            'images' => 'nullable|array',
            'tags' => 'nullable|array',
            'faq' => 'nullable|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $service = $seller->services()->create([
            'title' => $request->title,
            'description' => $request->description,
            'detailed_description' => $request->detailed_description,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'duration' => $request->duration,
            'images' => $request->images,
            'tags' => $request->tags,
            'faq' => $request->faq,
            'approval_status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Service submitted for admin approval',
            'service' => $service,
        ], 201);
    }

    public function updateService(Request $request, $serviceId)
    {
        $seller = auth()->user();
        $service = Service::findOrFail($serviceId);

        if ($service->seller_id !== $seller->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'string|max:255',
            'description' => 'string|max:1000',
            'detailed_description' => 'nullable|string',
            'category_id' => 'exists:service_categories,id',
            'price' => 'numeric|min:0.01',
            'duration' => 'nullable|string',
            'status' => 'in:active,inactive,archived',
            'images' => 'nullable|array',
            'tags' => 'nullable|array',
            'faq' => 'nullable|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $request->all();
        if ($request->hasAny(['title', 'description', 'price'])) {
            $data['approval_status'] = 'pending';
        }

        $service->update($data);

        return response()->json([
            'message' => 'Service updated successfully',
            'service' => $service,
        ]);
    }

    public function deleteService($serviceId)
    {
        $seller = auth()->user();
        $service = Service::findOrFail($serviceId);

        if ($service->seller_id !== $seller->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $service->delete();

        return response()->json(['message' => 'Service deleted successfully']);
    }

    public function getBookings($status = null)
    {
        $seller = auth()->user();

        if (!$seller->isSeller()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $query = $seller->bookingsAsSeller()
            ->with('service', 'buyer');

        if ($status) {
            $query->where('status', $status);
        }

        $bookings = $query->orderBy('created_at', 'desc')->paginate(10);

        return response()->json($bookings);
    }

    public function updateBookingStatus(Request $request, $bookingId)
    {
        $seller = auth()->user();
        $booking = Booking::findOrFail($bookingId);

        if ($booking->seller_id !== $seller->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|in:pending,accepted,rejected,in_progress,completed,cancelled',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $oldStatus = $booking->status;
        $booking->update(['status' => $request->status]);

        // Create earning when booking is completed
        if ($request->status === 'completed' && $oldStatus !== 'completed') {
            $platformFee = $booking->total_price * 0.10; // 10% platform fee
            $netAmount = $booking->total_price - $platformFee;

            Earning::create([
                'seller_id' => $seller->id,
                'booking_id' => $booking->id,
                'amount' => $booking->total_price,
                'platform_fee' => $platformFee,
                'net_amount' => $netAmount,
                'status' => 'completed',
            ]);

            $booking->update(['completed_at' => now()]);
        }

        \App\Models\AppNotification::notify(
            $booking->buyer_id,
            'booking_status',
            'Booking status updated',
            "Your booking for \"{$booking->service->title}\" is now {$request->status}",
            ['booking_id' => $booking->id]
        );

        return response()->json([
            'message' => 'Booking status updated successfully',
            'booking' => $booking->load('service', 'buyer'),
        ]);
    }

    public function getReviews()
    {
        $seller = auth()->user();

        if (!$seller->isSeller()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $reviews = $seller->receivedReviews()
            ->with('reviewer', 'service', 'booking')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($reviews);
    }

    public function replyReview(Request $request, $reviewId)
    {
        $seller = auth()->user();
        $review = Review::findOrFail($reviewId);

        if ($review->seller_id !== $seller->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'seller_reply' => 'required|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $review->update([
            'seller_reply' => $request->seller_reply,
            'replied_at' => now(),
        ]);

        return response()->json([
            'message' => 'Reply added successfully',
            'review' => $review,
        ]);
    }

    public function getEarnings()
    {
        $seller = auth()->user();

        if (!$seller->isSeller()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $totalEarned = $seller->earnings()
            ->whereIn('status', ['completed', 'withdrawn'])
            ->sum('net_amount');

        $pendingEarnings = $seller->earnings()
            ->where('status', 'pending')
            ->sum('net_amount');

        $availableBalance = $seller->getAvailableBalance();

        $earnings = $seller->earnings()
            ->with('booking')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json([
            'totalEarned' => $totalEarned,
            'pendingEarnings' => $pendingEarnings,
            'availableBalance' => $availableBalance,
            'earnings' => $earnings,
        ]);
    }
}
