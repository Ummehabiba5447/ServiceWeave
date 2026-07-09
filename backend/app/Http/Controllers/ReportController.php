<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    public function store(Request $request)
    {
        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            'reportable_type' => 'required|in:review,service,product,user,message',
            'reportable_id' => 'required|integer',
            'reason' => 'required|string|max:255',
            'details' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $report = Report::create([
            'reporter_id' => $user->id,
            'reportable_type' => $request->reportable_type,
            'reportable_id' => $request->reportable_id,
            'reason' => $request->reason,
            'details' => $request->details,
        ]);

        return response()->json(['message' => 'Report submitted, our team will review it', 'report' => $report], 201);
    }
}
