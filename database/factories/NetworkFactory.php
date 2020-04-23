<?php

use Faker\Generator as Faker;

$factory->define(App\Network::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'slug' => $faker->slug,
    ];
});
