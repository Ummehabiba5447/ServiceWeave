<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('earnings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('booking_id')->constrained('bookings')->onDelete('cascade')->nullable();
            $table->decimal('amount', 10, 2);
            $table->decimal('platform_fee', 10, 2)->default(0);
            $table->decimal('net_amount', 10, 2);
            $table->enum('status', ['pending', 'completed', 'withdrawn', 'cancelled'])->default('pending');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['seller_id', 'status']);
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('earnings');
    }
};
