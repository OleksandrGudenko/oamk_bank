    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<h2 style="color:blue;"><div class="text-center" style="display:none" id="result">Here shows result</div></h2>
		<h1 class="text-center">Registration</h1>
<form id="signup_form">
<div class="container">
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label title="For log in OAMK BANK">User Name</label>
			</div>
			<div class="col-3">
			<input onchange="id_check()" type="text" class="input-group mb-2" name="username" id="username">
			<div id="id_check"></div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Firstname</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="firstname">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Lastname</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="lastname">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>City</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="city">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Address</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="address">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Postal Code</label>
			</div>
			<div class="col-3">
			<input type="number" class="input-group mb-2" name="postalcode">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Email</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="email" id="email" onchange="email_check()">
			<div id="email_check"></div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Phone</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="phone">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 text-right">
			<label>Occupation</label>
			</div>
			<div class="col-3">
			<input type="text" class="input-group mb-2" name="occupation">
			</div>
		</div>
</div><!--end of container-->
</form>
<div class="text-center">
	<button type="button" class="btn btn-primary center" id="submit_btn" onclick="signup()">Submit</button>
</div>
