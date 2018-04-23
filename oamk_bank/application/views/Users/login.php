<link rel="stylesheet" href="https://bootswatch.com/3/united/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="http://cdn.ckeditor.com/4.5.11/standard/ckeditor.js"></script>
<?php echo form_open('users/login_verify'); ?>
<br><br><br><br>
<form id="signin_form">
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <h1 class="text-center">SIGN IN</h1>
      <div class="form-group">
        <input autocomplete="off" type="text" id="username" name="username" class="form-control" placeholder="Enter Username" required>
      </div>
      <div id="check_msg"></div>
      <div id="signin_btn"></div>
    </div>
  </div>
</form>
<?php echo form_close(); ?>
<div class="row">
    <div class="col-md-4 col-md-offset-4">
    <a href="#" id="username_btn" class="btn btn-primary btn-block" onclick="id_check()">Proceed</a>
    </div>
</div>

<br><br><br><br>

<script>
function id_check()
{
  document.getElementById('check_msg').innerHTML = "Checking username...";
  var url = "http://localhost/oamk_bank/index.php/api/bank/users/user";
  var jsonData='';
  var user_name = document.getElementById('username').value;
  var xhttp = new XMLHttpRequest();
  
  if (user_name == 'admin') {
    document.getElementById('flash_message').remove();
    document.getElementById('username_btn').remove();
    document.getElementById('username').style.borderColor ="Green";
    document.getElementById('check_msg').innerHTML = "ID valid";
    var submit_btn =	document.createElement("button");
    var btn_text = document.createTextNode("GO Forward");
    submit_btn.appendChild(btn_text);
    submit_btn.setAttribute('type', 'submit');
    submit_btn.setAttribute('class', 'btn btn-success btn-block');
    document.getElementById('signin_btn').appendChild(submit_btn);
  } else{
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      var check_array= new Array;
      jsonData = JSON.parse(xhttp.responseText);
      for(x in jsonData)
      {
        check_array.push(jsonData[x].username) ;
      }
      if(check_array.indexOf(user_name)==-1)
      {
        document.getElementById('signin_btn').innerHTML = " ";
				document.getElementById('username').style.borderColor ="red";
				document.getElementById('check_msg').innerHTML = "ID is not found";
      }
      else
      {
        document.getElementById('flash_message').remove();
        document.getElementById('username_btn').remove();
				document.getElementById('username').style.borderColor ="Green";
				document.getElementById('check_msg').innerHTML = "ID valid";
				var submit_btn =	document.createElement("button");
				var btn_text = document.createTextNode("GO Forward");
				submit_btn.appendChild(btn_text);
				submit_btn.setAttribute('type', 'submit');
				submit_btn.setAttribute('class', 'btn btn-success btn-block');
				document.getElementById('signin_btn').appendChild(submit_btn);
      }
    }
  };
  xhttp.send();
  }
}

</script>
<br>
<br>
<br>
<br>