<?php echo validation_errors(); ?>

<?php echo form_open('users/register'); ?>
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<h1 class="text-center"><?= $title; ?></h1>
			<div class="form-group">
				<input type="text" class="form-control" name="firstname" placeholder="First Name">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="lastname" placeholder="Last Name">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="city" placeholder="City">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="address" placeholder="Address">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="postalcode" placeholder="Postal Code">
			</div>
			<div class="form-group">
				<input type="email" class="form-control" name="email" placeholder="Email">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="username" placeholder="Username">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="phone" placeholder="Phone Number">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="occupation" placeholder="Occupation">
			</div>
			<div class="form-group">
				<input type="password" class="form-control" name="password" placeholder="Password">
			</div>
			<div class="form-group">
				<input type="password" class="form-control" name="password2" placeholder="Retype Password">
			</div>
			<button type="submit" class="btn btn-primary btn-block">Submit</button>
		</div>
	</div>
<?php echo form_close(); ?>
</body>
</html>
