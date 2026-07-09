<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'ServiceWeave API is running. See /api/* for endpoints.']);
});
