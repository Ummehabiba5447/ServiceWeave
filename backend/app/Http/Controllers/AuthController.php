<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:buyer,seller',
            'phone' => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'role' => $request->role,
        ]);

        $token = $user->createToken();

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token,
            'expires_in' => 30 * 24 * 60 * 60,
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        if ($user->is_suspended) {
            return response()->json(['message' => 'Your account has been suspended. Contact support.'], 403);
        }

        $user->update(['last_login_at' => now()]);
        $token = $user->createToken();

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token,
            'expires_in' => 30 * 24 * 60 * 60,
        ]);
    }

    public function logout(Request $request)
    {
        $header = $request->header('Authorization', '');
        if (str_starts_with($header, 'Bearer ')) {
            $hashed = hash('sha256', substr($header, 7));
            \App\Models\PersonalAccessToken::where('token', $hashed)->delete();
        }

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function refresh(Request $request)
    {
        $user = $request->user();
        $token = $user->createToken();

        return response()->json([
            'token' => $token,
            'expires_in' => 30 * 24 * 60 * 60,
        ]);
    }

    public function me(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

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

    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Current password is incorrect'], 401);
        }

        $user->update(['password' => Hash::make($request->password)]);

        return response()->json(['message' => 'Password changed successfully']);
    }
}
