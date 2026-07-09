<?php

namespace App\Http\Controllers;

use App\Models\AppNotification;
use App\Models\Booking;
use App\Models\Product;
use App\Models\Report;
use App\Models\Review;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function stats()
    {
        return response()->json([
            'total_users' => User::count(),
            'total_buyers' => User::where('role', 'buyer')->count(),
            'total_sellers' => User::where('role', 'seller')->count(),
            'suspended_users' => User::where('is_suspended', true)->count(),
            'total_services' => Service::count(),
            'pending_services' => Service::where('approval_status', 'pending')->count(),
            'total_products' => Product::count(),
            'pending_products' => Product::where('approval_status', 'pending')->count(),
            'total_bookings' => Booking::count(),
            'completed_bookings' => Booking::where('status', 'completed')->count(),
            'total_reviews' => Review::count(),
            'pending_reports' => Report::where('status', 'pending')->count(),
            'gmv' => (float) Booking::where('status', 'completed')->sum('total_price'),
            'recent_users' => User::orderBy('created_at', 'desc')->limit(5)->get(),
            'recent_bookings' => Booking::with('service', 'buyer', 'seller')
                ->orderBy('created_at', 'desc')->limit(5)->get(),
        ]);
    }

    public function users(Request $request)
    {
        $query = User::query();

        if ($request->filled('role')) {
            $query->where('role', $request->role);
        }

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('email', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->filled('status')) {
            if ($request->status === 'suspended') {
                $query->where('is_suspended', true);
            } elseif ($request->status === 'active') {
                $query->where('is_suspended', false);
            }
        }

        $users = $query->orderBy('created_at', 'desc')->paginate(20);

        return response()->json($users);
    }

    public function suspendUser(Request $request, $userId)
    {
        $validator = Validator::make($request->all(), [
            'reason' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::findOrFail($userId);

        if ($user->role === 'admin') {
            return response()->json(['message' => 'Cannot suspend an admin account'], 422);
        }

        $user->update([
            'is_suspended' => true,
            'suspension_reason' => $request->reason,
        ]);

        AppNotification::notify(
            $user->id,
            'account_suspended',
            'Your account has been suspended',
            $request->reason ?? 'Please contact support for more information.'
        );

        return response()->json(['message' => 'User suspended successfully', 'user' => $user]);
    }

    public function reinstateUser($userId)
    {
        $user = User::findOrFail($userId);
        $user->update(['is_suspended' => false, 'suspension_reason' => null]);

        AppNotification::notify($user->id, 'account_reinstated', 'Your account has been reinstated');

        return response()->json(['message' => 'User reinstated successfully', 'user' => $user]);
    }

    public function deleteUser($userId)
    {
        $user = User::findOrFail($userId);

        if ($user->role === 'admin') {
            return response()->json(['message' => 'Cannot delete an admin account'], 422);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }

    // ---- Listings (services + products) ----

    public function listings(Request $request)
    {
        $type = $request->get('type', 'services'); // services | products
        $status = $request->get('approval_status');

        if ($type === 'products') {
            $query = Product::with('seller', 'category');
        } else {
            $query = Service::with('seller', 'category');
        }

        if ($status) {
            $query->where('approval_status', $status);
        }

        $listings = $query->orderBy('created_at', 'desc')->paginate(20);

        return response()->json($listings);
    }

    public function approveListing(Request $request, $type, $id)
    {
        $model = $type === 'products' ? Product::findOrFail($id) : Service::findOrFail($id);
        $model->update(['approval_status' => 'approved']);

        AppNotification::notify(
            $model->seller_id,
            'listing_approved',
            'Your listing was approved',
            "\"{$model->title}\" is now live on the marketplace."
        );

        return response()->json(['message' => 'Listing approved', 'listing' => $model]);
    }

    public function rejectListing(Request $request, $type, $id)
    {
        $validator = Validator::make($request->all(), [
            'reason' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $model = $type === 'products' ? Product::findOrFail($id) : Service::findOrFail($id);
        $model->update(['approval_status' => 'rejected']);

        AppNotification::notify(
            $model->seller_id,
            'listing_rejected',
            'Your listing was rejected',
            $request->reason ?? "\"{$model->title}\" did not meet marketplace guidelines."
        );

        return response()->json(['message' => 'Listing rejected', 'listing' => $model]);
    }

    public function removeListing($type, $id)
    {
        $model = $type === 'products' ? Product::findOrFail($id) : Service::findOrFail($id);
        $model->delete();

        return response()->json(['message' => 'Listing removed']);
    }

    // ---- Reported content ----

    public function reports(Request $request)
    {
        $query = Report::with('reporter');

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $reports = $query->orderBy('created_at', 'desc')->paginate(20);

        return response()->json($reports);
    }

    public function updateReportStatus(Request $request, $reportId)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|in:pending,reviewed,dismissed,actioned',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $report = Report::findOrFail($reportId);
        $report->update(['status' => $request->status]);

        return response()->json(['message' => 'Report updated', 'report' => $report]);
    }
}
