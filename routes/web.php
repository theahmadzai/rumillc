<?php

use LaravelLocalization as Lang;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::prefix(Lang::setLocale())->group(function () {

    Route::get('/', 'PageController@home')->name('home');

    Route::get('/about', 'PageController@about')->name('about');

    Route::get('/services', 'PageController@services')->name('services');

    Route::get('/dubai-office', 'PageController@dubai')->name('dubai-office');

    Route::get('/indonesia-office', 'PageController@indonesia')->name('indonesia-office');

    Route::get('/gallery', 'PageController@gallery')->name('gallery');

    Route::get('/contact', 'PageController@contact')->name('contact');

    // Auth

    Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');

    Route::post('/register', 'Auth\RegisterController@register');

    Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');

    Route::post('/login', 'Auth\LoginController@login');

    Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

    Route::get('/password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');

    Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');

    Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');

    Route::post('/password/reset', 'Auth\ResetPasswordController@reset');
});

Route::prefix('admin')->group(function () {

    Route::get('/', 'Admin\PageController@home')->name('admin.home');

    Route::get('/images', 'Admin\PageController@images')->name('admin.images');

    Route::get('/testimonials', 'Admin\PageController@testimonials')->name('admin.testimonials');
});

Route::resource('/api/images', 'ImageController');
