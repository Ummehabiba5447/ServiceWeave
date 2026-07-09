<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /** Public: browse approved, active products with search/filter/sort */
    public function browse(Request $request)
    {
        $query = Product::where('status', 'active')
            ->where('approval_status', 'approved')
            ->with('seller', 'category');

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
            $query->where('location', 'like', '%' . $request->location . '%');
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

        return response()->json($query->paginate(12));
    }

    public function show($id)
    {
        $product = Product::with('seller', 'category')->findOrFail($id);
        $product->increment('views');

        return response()->json($product);
    }

    /** Seller's own products (any role may sell products per task spec) */
    public function myProducts()
    {
        $user = auth()->user();

        $products = $user->products()
            ->with('category')
            ->orderBy('created_at', 'desc')
            ->paginate(12);

        return response()->json($products);
    }

    public function store(Request $request)
    {
        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:2000',
            'category_id' => 'nullable|exists:service_categories,id',
            'price' => 'required|numeric|min:0.01',
            'stock' => 'nullable|integer|min:0',
            'condition' => 'nullable|in:new,used,refurbished',
            'location' => 'nullable|string|max:255',
            'images' => 'nullable|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $product = $user->products()->create([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'stock' => $request->stock ?? 1,
            'condition' => $request->condition ?? 'new',
            'location' => $request->location,
            'images' => $request->images ?? [],
            'approval_status' => 'pending',
            'status' => 'active',
        ]);

        return response()->json([
            'message' => 'Product submitted for approval',
            'product' => $product,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();
        $product = Product::findOrFail($id);

        if ($product->seller_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'string|max:255',
            'description' => 'string|max:2000',
            'category_id' => 'nullable|exists:service_categories,id',
            'price' => 'numeric|min:0.01',
            'stock' => 'integer|min:0',
            'condition' => 'in:new,used,refurbished',
            'location' => 'nullable|string|max:255',
            'status' => 'in:active,inactive,sold,archived',
            'images' => 'nullable|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Re-submit for approval if content changed materially
        $data = $request->all();
        if ($request->hasAny(['title', 'description', 'price'])) {
            $data['approval_status'] = 'pending';
        }

        $product->update($data);

        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
    }

    public function destroy($id)
    {
        $user = auth()->user();
        $product = Product::findOrFail($id);

        if ($product->seller_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}
