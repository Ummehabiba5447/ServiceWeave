<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('service_categories')->onDelete('set null')->nullable();
            $table->string('title');
            $table->text('description');
            $table->text('detailed_description')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('duration')->nullable(); // e.g., "2 hours", "1 day"
            $table->json('images')->nullable(); // Array of image URLs
            $table->enum('status', ['active', 'inactive', 'archived'])->default('active');
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('total_reviews')->default(0);
            $table->integer('total_bookings')->default(0);
            $table->json('tags')->nullable();
            $table->json('faq')->nullable();
            $table->timestamps();
            
            $table->index(['seller_id', 'status']);
            $table->index('category_id');
            $table->fullText(['title', 'description']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
