<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
	public function list(){
		$customers = [
			'John Doe',
			'Alex Marin',
			'Andrey Kol'
		];
		return view('customers',[
			'customers' => $customers
		]);
	}
}
