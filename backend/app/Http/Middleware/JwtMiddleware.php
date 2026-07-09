<?php

namespace App\Http\Middleware;

use App\Models\PersonalAccessToken;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class name kept as JwtMiddleware to avoid touching every route reference,
 * but this no longer depends on tymon/jwt-auth (that package was never
 * actually installed -- composer.json had no require for it, vendor/tymon
 * did not exist, and config/auth.php had no 'api' guard defined at all.
 * Every call to auth('api')->... in the controllers was therefore fatal.
 *
 * This middleware implements a simple, self-contained bearer-token check
 * against the personal_access_tokens table and attaches the resolved user
 * to the request so `$request->user()` / `auth()->user()` work normally.
 */
class JwtMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $header = $request->header('Authorization', '');

        if (!str_starts_with($header, 'Bearer ')) {
            return response()->json(['message' => 'Token not provided'], 401);
        }

        $plainToken = substr($header, 7);
        $hashed = hash('sha256', $plainToken);

        $accessToken = PersonalAccessToken::with('user')
            ->where('token', $hashed)
            ->first();

        if (!$accessToken || $accessToken->isExpired()) {
            return response()->json(['message' => 'Token invalid or expired'], 401);
        }

        $user = $accessToken->user;

        if (!$user) {
            return response()->json(['message' => 'User not found'], 401);
        }

        if ($user->is_suspended) {
            return response()->json(['message' => 'Your account has been suspended'], 403);
        }

        $accessToken->update(['last_used_at' => now()]);

        Auth::setUser($user);
        $request->setUserResolver(fn () => $user);

        return $next($request);
    }
}
