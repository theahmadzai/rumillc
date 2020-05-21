<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Feedback;
use App\Product;
use Faker\Generator as Faker;

$factory->define(Feedback::class, function (Faker $faker) {
    return [
        'rating'     => $faker->numberBetween(1, 5),
        'name'       => $faker->name,
        'title'      => $faker->words(2, true),
        'message'    => $faker->text,
        'product_id' => Product::all()->random(),
    ];
});
