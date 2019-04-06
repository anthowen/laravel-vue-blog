@extends('layout')
@section('content')

<h1>
	Customers
</h1>
<div>
	<ul>
	@foreach($customers as $customer)
		<li>{{$customer}}</li>
	@endforeach
	</ul>
</div>
@endsection