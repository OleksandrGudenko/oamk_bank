    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<h2 style="color:blue;"><div class="text-center" style="display:none" id="result">Here shows result</div></h2>
		<h1 class="text-center">Registration</h1>
    <div id="registration_form">
<form id="signup_form">
<div class="container">
	<br>
		<div class="row justify-content-center">
			<div class="col-8">
				<input placeholder="User Name" autocomplete="off" onchange="id_check()" type="text" class="form-control" name="username" id="username" required>
				<div id="id_check"><i title="This is used for log in OAMK BANK and username should be checked" class="material-icons">warning</i></div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="First Name" type="text" class="form-control" name="firstname">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="Last Name" type="text" class="form-control" name="lastname">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="City" type="text" class="form-control" name="city">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="Address" type="text" class="form-control" name="address">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="Postal Code" type="number" class="form-control" name="postalcode">
			</div>
		</div>
		<div class="row justify-content-center text-danger">
			<div class="col-8">
			<input placeholder="E-mail" type="text" class="form-control" name="email" id="email" onchange="email_check()" required>
			<div id="email_check"><i style="color: black;" title="This is used for sending passwords from OAMK BANK and e-mail should be checked" class="material-icons">add_alert</i></div>
			
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="Phone Number" type="text" class="form-control" name="phone">
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
			<input placeholder="Occupation" type="text" class="form-control" name="occupation">
		</div>
		<br>
		<br><br>
      </form>
	</div>
</div><!--end of container-->
<div class="centering">
  <span><b>Terms and Conditions OAMK BANK</b></span>
  <div class="scroll_for_terms_conditions">
    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
  </div>
<input onclick="agree_the_terms()" type="checkbox" name="terms_conditions_check_box" id="terms_conditions_check_box" value="" required>
<label for=""><i>I have read the terms and conditions of OAMK BANK and agree terms and conditions.</i></label>
<br> <br>
</div>
</div>
	<div class="row justify-content-center">
		<button type="button" class="btn btn-primary col-2" id="submit_btn" onclick="signup()">Submit</button>
	</div>
<br><br>


<button onclick="topFunction()" id="Bttop" title="Go to top">Top</button>
