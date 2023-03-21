<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FrontController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('front');
});

Route::get('/getservices',[FrontController::class,'ServicesAll']);

Auth::routes();

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/checkuser',[AuthController::class,'CheckUser']);
Route::post('/logout',[AuthController::class,'LogoutUser']);


Route::get('/{vue_capture?}', function () { 
    return view('front');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('/{vue_capture?}', function () { 
    return view('back');
})->where('vue_capture', '[\/\w\.-]*');

