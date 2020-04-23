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

    Route::get('/products', 'PageController@products')->name('products');

    Route::get('/product/{id}-{slug}', 'PageController@showProduct');
    Route::post('/product', 'PageController@contactPrice');

    Route::get('/network/{location?}', 'PageController@network')->name('network');

    Route::get('/gallery', 'PageController@gallery')->name('gallery');

    Route::get('/contact', 'PageController@contact')->name('contact');
    Route::post('/contact', 'PageController@mail');

    // Auth

    Auth::routes(['verify' => true]);

});

Route::prefix('admin')->group(function () {

    Route::get('/', 'Admin\PageController@home')->name('admin.home');

    Route::get('/images', 'Admin\PageController@images')->name('admin.images');
    Route::get('/images/{id}/edit', 'Admin\PageController@imageEdit');

    Route::get('/testimonials', 'Admin\PageController@testimonials')->name('admin.testimonials');
    Route::get('/testimonials/{id}/edit', 'Admin\PageController@testimonialEdit');

    Route::get('/categories', 'Admin\PageController@categories')->name('admin.categories');
    Route::get('/categories/{id}/edit', 'Admin\PageController@categoryEdit');

    Route::get('/products', 'Admin\PageController@products')->name('admin.products');
    Route::get('/products/{id}/edit', 'Admin\PageController@productEdit');
});

Route::post('/lang', function (\Illuminate\Http\Request $request) {
    App::setLocale($request->lang);
    $url = last(explode('/', url()->previous()));
    if ($url == 'en' || $url == 'ps') {
        $url = '/';
    }

    return redirect($request->lang . '/' . $url);
});

Route::apiResource('/api/images', 'ImageController');
Route::apiResource('/api/testimonials', 'TestimonialController');
Route::apiResource('/api/categories', 'CategoryController');
Route::apiResource('/api/products', 'ProductController');
Route::apiResource('/api/feedbacks', 'FeedbackController');
