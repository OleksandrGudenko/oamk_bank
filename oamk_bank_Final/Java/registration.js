
var id_check_boolean = false;
var email_check_boolean = false;

function id_check()
{
  document.getElementById('id_check').innerHTML = " ";
  var url = "http://localhost/oamk_bank/index.php/api/Bank/logins/login/";
  var jsonData='';
  var username = document.getElementById('username').value;
  var xhttp = new XMLHttpRequest();
  if (username == 'admin'){
    document.getElementById('id_check').innerHTML = "Username can't be 'admin'.";
    document.getElementById('username').style.borderColor ="red";
    document.getElementById('id_check').style.color = "red";
  } else {
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
      if(check_array.indexOf(username)==-1)
      {
        document.getElementById('id_check').innerHTML = "Username valid";
        document.getElementById('username').style.borderColor ="Green";
        document.getElementById('id_check').style.color = "Green";

        //here for checking
        id_check_boolean = true;

        if(id_check_boolean == true && email_check_boolean == true )
        {
          document.getElementById('signup_btn').disabled = false;
        }
        else
        {
          document.getElementById('signup_btn').disabled = true;
        }
      }
      else
      {
        id_check_boolean = false;
        if(id_check_boolean == true && email_check_boolean == true )
        {
          document.getElementById('signup_btn').disabled = false;
        }
        else
        {
          document.getElementById('signup_btn').disabled = true;
        }
        document.getElementById('id_check').innerHTML = "Username already taken";
        document.getElementById('username').style.borderColor ="red";
        document.getElementById('id_check').style.color = "red";
      }
    }
  };
  xhttp.send();
  }
}

function signup()
{
  document.getElementById('result').innerHTML = "Loading...";
  document.getElementById('signup_form').style.display="none";
  var url = "http://localhost/oamk_bank/index.php/api/Bank/logins/";
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url, true);

  var form = document.getElementById('signup_form');
  var formData = new FormData(form);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('result').style.display = "block";
      document.getElementById('result').innerHTML = "You have signed up successfully";
      document.getElementById('registration_form').style.display="none";
      document.getElementById('signup_btn').disabled= true;
      document.getElementById('signup_btn').style.display= "none";
      setTimeout(function()
      {
        window.location.replace("http://localhost/oamk_bank");
      }, 10000);
    }
    else
    {
      document.getElementById('result').innerHTML = "Fail";
      document.getElementById('signup_form').style.display="block";
    }
  };
  xhttp.send(formData);
}


function email_check()
{
  document.getElementById('email_check').innerHTML = " ";
  var url = "http://localhost/oamk_bank/index.php/api/Bank/users/";
  var jsonData='';
  var email = document.getElementById('email').value;
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
        check_array.push(jsonData[x].email) ;
      }
      if(check_array.indexOf(email)==-1)
      {
          document.getElementById('email_check').innerHTML = "Email valid";
          document.getElementById('email').style.borderColor ="Green";
          document.getElementById('email_check').style.color = "Green";
          email_check_boolean = true;
          if(id_check_boolean == true && email_check_boolean == true )
          {
            document.getElementById('signup_btn').disabled = false;
          }
          else
          {
            document.getElementById('signup_btn').disabled = true;
          }
      }
      else
      {
        email_check_boolean = false;
        if(id_check_boolean == true && email_check_boolean == true )
        {
          document.getElementById('signup_btn').disabled = false;
        }
        else
        {
          document.getElementById('signup_btn').disabled = true;
        }
        document.getElementById('email_check').innerHTML = "Email already taken";
        document.getElementById('email').style.borderColor ="red";
        document.getElementById('email_check').style.color = "red";
      }
    }
  };
  xhttp.send();
}
