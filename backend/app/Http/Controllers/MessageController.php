<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    public function getConversations()
    {
        $user = auth()->user();

        $messages = Message::where('sender_id', $user->id)
            ->orWhere('receiver_id', $user->id)
            ->with('sender', 'receiver')
            ->orderBy('created_at', 'asc')
            ->get();

        $conversations = $messages
            ->groupBy(function ($message) use ($user) {
                return $message->sender_id === $user->id ? $message->receiver_id : $message->sender_id;
            })
            ->map(function ($group) use ($user) {
                $last = $group->last();
                $partner = $last->sender_id === $user->id ? $last->receiver : $last->sender;
                $unread = $group->where('receiver_id', $user->id)->where('is_read', false)->count();

                return [
                    'partner' => $partner,
                    'last_message' => $last,
                    'unread_count' => $unread,
                ];
            })
            ->values()
            ->sortByDesc(fn ($c) => $c['last_message']->created_at)
            ->values();

        return response()->json(['data' => $conversations]);
    }

    public function getMessages($userId)
    {
        $currentUser = auth()->user();

        $messages = Message::where(function ($query) use ($currentUser, $userId) {
            $query->where('sender_id', $currentUser->id)
                ->where('receiver_id', $userId);
        })->orWhere(function ($query) use ($currentUser, $userId) {
            $query->where('sender_id', $userId)
                ->where('receiver_id', $currentUser->id);
        })
            ->with('sender', 'receiver')
            ->orderBy('created_at', 'asc')
            ->paginate(50);

        // Mark messages as read
        Message::where('receiver_id', $currentUser->id)
            ->where('sender_id', $userId)
            ->where('is_read', false)
            ->update(['is_read' => true, 'read_at' => now()]);

        return response()->json($messages);
    }

    public function sendMessage(Request $request)
    {
        $sender = auth()->user();

        $validator = Validator::make($request->all(), [
            'receiver_id' => 'required|exists:users,id|different:sender_id',
            'message' => 'required|string|max:5000',
            'booking_id' => 'nullable|exists:bookings,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $message = Message::create([
            'sender_id' => $sender->id,
            'receiver_id' => $request->receiver_id,
            'booking_id' => $request->booking_id,
            'message' => $request->message,
        ]);

        $message->load('sender', 'receiver');

        \App\Models\AppNotification::notify(
            $request->receiver_id,
            'new_message',
            'New message from ' . $sender->name,
            \Illuminate\Support\Str::limit($request->message, 80),
            ['sender_id' => $sender->id]
        );

        return response()->json([
            'message' => 'Message sent successfully',
            'data' => $message,
        ], 201);
    }

    public function markAsRead($messageId)
    {
        $user = auth()->user();
        $message = Message::findOrFail($messageId);

        if ($message->receiver_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $message->markAsRead();

        return response()->json(['message' => 'Message marked as read']);
    }

    public function getUnreadCount()
    {
        $user = auth()->user();

        $unreadCount = Message::where('receiver_id', $user->id)
            ->where('is_read', false)
            ->count();

        return response()->json(['unread_count' => $unreadCount]);
    }
}
