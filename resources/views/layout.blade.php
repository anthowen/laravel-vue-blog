<!DOCTYPE html>
<html >
<head>
	<title>Laravel Tutorial</title>
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>

	<ul class="nav">
		<li class="nav-item">
		    <a class="nav-link active" href="/">HOME</a>
		</li>
		<li class="nav-item">
		    <a class="nav-link" href="about">ABOUT US</a>
		</li>
		<li class="nav-item">
		    <a class="nav-link" href="customers">CUSTOMERS</a>
		</li>
	</ul>
	<div class="container">			
		@yield('content')
	</div>
	<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
