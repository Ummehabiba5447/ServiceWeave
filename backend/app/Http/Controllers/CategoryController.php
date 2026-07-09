<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;

class CategoryController extends Controller
{
    public function getAll()
    {
        $categories = ServiceCategory::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($categories);
    }

    public function getWithServices()
    {
        $categories = ServiceCategory::where('is_active', true)
            ->with(['services' => function ($query) {
                $query->where('status', 'active')->limit(6);
            }])
            ->orderBy('order')
            ->get();

        return response()->json($categories);
    }
}
