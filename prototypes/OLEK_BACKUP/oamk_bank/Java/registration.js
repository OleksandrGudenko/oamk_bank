var id_boolean = false;
var email_boolean = false;

function id_check()
{
  document.getElementById('id_check').innerHTML = " ";
  var url = "http://localhost/oamk_bank/index.php/api/bank/logins/login/";
  var jsonData='';
  var username = document.getElementById('username').value;
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
      if(check_array.indexOf(username)==-1)
      {
        document.getElementById('id_check').innerHTML = "Username valid";
        document.getElementById('username').style.borderColor ="Green";
        document.getElementById('id_check').style.color = "Green";
        id_boolean= true;
      }
      else
      {
        document.getElementById('id_check').innerHTML = "Username already taken";
        document.getElementById('username').style.borderColor ="red";
        document.getElementById('id_check').style.color = "red";
      }
    }
  };
  xhttp.send();
}

function signup()
{
  if(email_boolean == true && id_boolean == true)
  {
  document.getElementById('result').innerHTML = "Loading...";
  document.getElementById('signup_form').style.display="none";
  var url = "http://localhost/oamk_bank_kihun/index.php/api/bank/logins/";
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url, true);

  var form = document.getElementById('signup_form');
  var formData = new FormData(form);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('result').innerHTML = "signup";
      var audio = document.createElement("audio");
      audio.setAttribute('src', 'audio/test1.mp3');
      audio.autoplay = true;
      document.getElementById('result').appendChild(audio);

      setTimeout(function(){
      window.location.replace("http://localhost/homepage_proto");
      document.getElementById('submit_btn').disabled= false;
      email_boolean =false;
      id_boolean = false;
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
else
{
  alert("Username and Email should be checked, first");
}
}


function email_check()
{
  document.getElementById('email_check').innerHTML = " ";
  var url = "http://localhost/oamk_bank_kihun/index.php/api/bank/users/";
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
        email_boolean = true;
      }
      else
      {
        document.getElementById('email_check').innerHTML = "Email already taken";
        document.getElementById('email').style.borderColor ="red";
        document.getElementById('email_check').style.color = "red";
      }
    }
  };
  xhttp.send();
}
