<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
            $table->foreignId('booking_id')->constrained('bookings')->onDelete('cascade');
            $table->foreignId('reviewer_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('seller_id')->constrained('users')->onDelete('cascade');
            $table->integer('rating')->min(1)->max(5);
            $table->text('comment')->nullable();
            $table->text('seller_reply')->nullable();
            $table->timestamp('replied_at')->nullable();
            $table->timestamps();
            
            $table->unique(['booking_id', 'reviewer_id']);
            $table->index(['service_id', 'rating']);
            $table->index(['seller_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
