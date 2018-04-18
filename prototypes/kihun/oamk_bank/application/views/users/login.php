<?php echo form_open('users/login_test'); ?>
	<div class="row">
		<div id="test123" class="col-md-4 col-md-offset-4">
			<h1 class="text-center"><?php echo $title; ?></h1>
			<div class="form-group">
				<input autocomplete="off" type="text" id="username" name="username" class="form-control" placeholder="Enter Username" onchange="id_check()" required autofocus>
			</div>
			<div id="check_msg"></div>
      <div id="test1"></div>
		</div>
	</div>
  <?php echo base_url('Java/script_loan.js'); ?>
<?php echo form_close(); ?>
<script>

function id_check()
{
  var url = "http://localhost/oamk_bank/index.php/api/bank/users/user";
  var jsonData='';
  var user_name = document.getElementById('username').value;
  var xhttp = new XMLHttpRequest();
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
        document.getElementById('test1').innerHTML = " ";
				document.getElementById('username').style.borderColor ="red";
				document.getElementById('check_msg').innerHTML = "ID is not found";
      }
      else
      {
        document.getElementById('test1').innerHTML = " ";
				document.getElementById('username').style.borderColor ="Green";
				document.getElementById('check_msg').innerHTML = "ID valid";
				var submit_btn =	document.createElement("button");
				var btn_text = document.createTextNode("GO Forward");
				submit_btn.appendChild(btn_text);
				submit_btn.setAttribute('type', 'submit');
				submit_btn.setAttribute('class', 'btn btn-success btn-block');
				document.getElementById('test1').appendChild(submit_btn);
      }
    }
  };
  xhttp.send();
}

</script>

</body>
</html>
