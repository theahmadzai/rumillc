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
        factory(App\User::class, 1)->create();
        factory(App\Image::class, 15)->create();
        factory(App\Testimonial::class, 5)->create();
        factory(App\Network::class, 5)->create();
        factory(App\Branch::class, 4)->create();
        factory(App\Category::class, 10)->create();
        factory(App\Product::class, 25)->create();
        factory(App\Feedback::class, 40)->create();
    }
}
