<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reporter_id')->constrained('users')->onDelete('cascade');
            $table->string('reportable_type'); // review, service, product, user, message
            $table->unsignedBigInteger('reportable_id');
            $table->string('reason');
            $table->text('details')->nullable();
            $table->enum('status', ['pending', 'reviewed', 'dismissed', 'actioned'])->default('pending');
            $table->timestamps();

            $table->index(['reportable_type', 'reportable_id']);
            $table->index('status');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_suspended')->default(false)->after('is_active');
            $table->text('suspension_reason')->nullable()->after('is_suspended');
        });

        Schema::table('services', function (Blueprint $table) {
            $table->enum('approval_status', ['pending', 'approved', 'rejected'])->default('approved')->after('status');
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('approval_status');
        });
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['is_suspended', 'suspension_reason']);
        });
        Schema::dropIfExists('reports');
    }
};
