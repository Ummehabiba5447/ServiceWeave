<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();

        $query = $user->notifications();

        if ($request->boolean('unread_only')) {
            $query->where('is_read', false);
        }

        return response()->json($query->paginate(20));
    }

    public function unreadCount()
    {
        $user = auth()->user();
        return response()->json(['unread_count' => $user->notifications()->where('is_read', false)->count()]);
    }

    public function markAsRead($id)
    {
        $user = auth()->user();
        $notification = $user->notifications()->findOrFail($id);
        $notification->update(['is_read' => true, 'read_at' => now()]);

        return response()->json(['message' => 'Marked as read']);
    }

    public function markAllAsRead()
    {
        $user = auth()->user();
        $user->notifications()->where('is_read', false)->update(['is_read' => true, 'read_at' => now()]);

        return response()->json(['message' => 'All notifications marked as read']);
    }
}
