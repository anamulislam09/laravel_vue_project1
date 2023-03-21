<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function CheckUser(Request $request){

       $credintial= $request->only('email','password');
       $login = Auth::attempt($credintial);
       if($login){
        return response()->json(['msg' => 'success']);
       }else{
        return response()->json(['msg' => 'failed']);
       }
        // $email = $request->email;
        // $password = $request->password;
        // return "You sent email:$email and password:$password";
    }

    public function LogoutUser(){
        Auth::logout();
    }
}
