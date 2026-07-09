<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->enum('role', ['buyer', 'seller', 'admin'])->default('buyer');
            $table->string('avatar_url')->nullable();
            $table->text('bio')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->decimal('rating', 3, 2)->default(0);
            $table->integer('total_reviews')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamp('last_login_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
            
            $table->index('email');
            $table->index('role');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
