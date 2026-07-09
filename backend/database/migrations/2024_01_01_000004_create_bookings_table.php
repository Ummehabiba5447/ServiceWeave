<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
            $table->foreignId('buyer_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('seller_id')->constrained('users')->onDelete('cascade');
            $table->enum('status', ['pending', 'accepted', 'rejected', 'in_progress', 'completed', 'cancelled'])->default('pending');
            $table->dateTime('scheduled_date')->nullable();
            $table->text('notes')->nullable();
            $table->decimal('total_price', 10, 2);
            $table->decimal('service_fee', 10, 2)->default(0);
            $table->decimal('amount_paid', 10, 2)->default(0);
            $table->enum('payment_status', ['pending', 'paid', 'refunded'])->default('pending');
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
            
            $table->index(['buyer_id', 'status']);
            $table->index(['seller_id', 'status']);
            $table->index(['service_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
