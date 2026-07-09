<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // Admin account for the admin panel
        User::firstOrCreate(
            ['email' => 'admin@serviceweave.test'],
            [
                'name' => 'Platform Admin',
                'password' => Hash::make('Admin@12345'),
                'role' => 'admin',
                'is_active' => true,
            ]
        );

        // Demo buyer + seller (handy for quick manual testing)
        User::firstOrCreate(
            ['email' => 'seller@serviceweave.test'],
            [
                'name' => 'Demo Seller',
                'password' => Hash::make('Password@123'),
                'role' => 'seller',
                'city' => 'Rawalpindi',
            ]
        );

        User::firstOrCreate(
            ['email' => 'buyer@serviceweave.test'],
            [
                'name' => 'Demo Buyer',
                'password' => Hash::make('Password@123'),
                'role' => 'buyer',
                'city' => 'Rawalpindi',
            ]
        );

        $categories = [
            'Graphic Designing',
            'Web Development',
            'Photography',
            'Home Services',
            'Tutoring',
            'Content Writing',
            'Digital Marketing',
            'Video Editing',
        ];

        foreach ($categories as $index => $name) {
            ServiceCategory::firstOrCreate(
                ['slug' => Str::slug($name)],
                [
                    'name' => $name,
                    'description' => "Find trusted professionals offering {$name} services.",
                    'order' => $index,
                    'is_active' => true,
                ]
            );
        }
    }
}
