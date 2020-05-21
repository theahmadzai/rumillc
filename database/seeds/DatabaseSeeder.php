<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            NetworkSeeder::class,
            ImageSeeder::class,
            TestimonialSeeder::class,
            BranchSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            FeedbackSeeder::class,
        ]);
    }
}
