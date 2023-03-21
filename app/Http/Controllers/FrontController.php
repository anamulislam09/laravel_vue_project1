<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function ServicesAll(){
        $services = Service::get();
        return response()->json(['services' => $services]);
    }
}
