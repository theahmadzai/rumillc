<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Branch;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Branch::class, function (Faker $faker) {
    $branchName = $faker->words(2, true);

    return [
        'name' => $branchName,
        'slug' => Str::slug($branchName),
    ];
});
