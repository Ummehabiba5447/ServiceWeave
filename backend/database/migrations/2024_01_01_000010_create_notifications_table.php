<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('app_notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('type'); // booking_request, booking_status, new_message, new_review, listing_approved, listing_rejected, account_suspended
            $table->string('title');
            $table->text('body')->nullable();
            $table->json('data')->nullable(); // e.g. related booking_id, service_id
            $table->boolean('is_read')->default(false);
            $table->timestamp('read_at')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'is_read']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('app_notifications');
    }
};
