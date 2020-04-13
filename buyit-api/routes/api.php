<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Product Route
Route::get('/product', 'ProductController@index')->name('product');
Route::post('/product', 'ProductController@store')->name('product.store');
Route::get('/product/{product}', 'ProductController@show')->name('product.show');
Route::put('/product/{product}', 'ProductController@update')->name('product.update');
Route::delete('/product/{product}', 'ProductController@destroy')->name('product.destroy');

//Service
Route::resource('services', 'ServiceController');
