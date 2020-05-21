<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\Category;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'        => $faker->word,
        'slug'        => $faker->slug,
        'price'       => $faker->numberBetween(1000, 20000),
        'tags'        => $faker->word,
        'content'     => $faker->text(500),
        'category_id' => Category::all()->random(),
    ];
});
