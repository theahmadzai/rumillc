<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => 'The Tester',
        'email' => 'tester@test.com',
        'password' => Hash::make('tester'),
        'remember_token' => str_random(10),
    ];
});
