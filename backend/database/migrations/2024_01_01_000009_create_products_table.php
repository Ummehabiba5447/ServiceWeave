<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('category_id')->nullable()->constrained('service_categories')->onDelete('set null');
            $table->string('title');
            $table->text('description');
            $table->decimal('price', 10, 2);
            $table->integer('stock')->default(1);
            $table->string('condition')->default('new'); // new, used, refurbished
            $table->string('location')->nullable();
            $table->json('images')->nullable();
            $table->enum('approval_status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->enum('status', ['active', 'inactive', 'sold', 'archived'])->default('active');
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('total_reviews')->default(0);
            $table->integer('views')->default(0);
            $table->timestamps();

            $table->index(['seller_id', 'status']);
            $table->index('category_id');
            $table->index('approval_status');
            $table->fullText(['title', 'description']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
