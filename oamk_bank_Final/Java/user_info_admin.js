function show_userinfo()
{
  document.getElementById('info_page').style.display = "none" ;
  document.getElementById('request_msg').style.display = "none" ;
  if(document.getElementById('user_info').style.display == "none")
  {
    document.getElementById('user_info').style.display = "block" ;
  }
  else
  {
    document.getElementById('user_info').style.display = "none" ;
  }
}

function show_requestMsg()
{
  document.getElementById('info_page').style.display = "none" ;
  document.getElementById('user_info').style.display = "none" ;
  if(document.getElementById('request_msg').style.display == "none")
  {
    document.getElementById('request_msg').style.display = "block" ;
  }
  else
  {
    document.getElementById('request_msg').style.display = "none" ;
  }
}

function show_phpinfo()
{
  document.getElementById('user_info').style.display = "none" ;
  document.getElementById('request_msg').style.display = "none" ;
  if(document.getElementById('info_page').style.display == "none")
  {
    document.getElementById('info_page').style.display = "block" ;
  }
  else
  {
    document.getElementById('info_page').style.display = "none" ;
  }
}


function delete_user(user_id)
{
  document.getElementById('result_in_admin').innerHTML = "Deleting...";
  document.getElementById('user_info').style.display ="none";
  var url = 'http://localhost/oamk_bank/index.php/api/Bank/users/id/' + user_id;
  var xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', url, true);
  xhttp.onreadystatechange = function()
  {
    if (xhttp.readyState == 4 && xhttp.status == 200)
    {
      document.getElementById('result_in_admin').innerHTML = 'User deleted succesfully';
      setTimeout(function()
      {
        location.reload();
      }, 2000);
    }
    else
    {
      document.getElementById('result_in_admin').innerHTML = 'Something went wrong';
      document.getElementById('user_info').style.display ="block";
    }
  };
  xhttp.send();
}


function show_edit(user_id)
{
  var trname = 'user_edit_info' + user_id ;
  if(document.getElementById(trname).style.visibility == "hidden")
  {
    document.getElementById(trname).style.visibility ="visible";
  }
  else
  {
    document.getElementById(trname).style.visibility  ="hidden";
  }
}

function edit_an_user(user_id)
{
document.getElementById('result_in_admin').style.display = "block";
document.getElementById('result_in_admin').innerHTML = "Editing";

var url = "http://localhost/oamk_bank/index.php/api/Bank/users/id/" + user_id;
var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url, true);
var data = {} ;

data.id=data.id=document.getElementById('edit_id' + user_id).value;
data.firstname=document.getElementById('edit_fname' + user_id).value;
data.lastname=document.getElementById('edit_lname' + user_id).value;
data.city=document.getElementById('edit_city' + user_id).value;
data.address=document.getElementById('edit_address' + user_id).value;
data.postalcode=document.getElementById('edit_postalcode' + user_id).value;
data.email=document.getElementById('edit_email' + user_id).value;
data.phone=document.getElementById('edit_phone' + user_id).value;
data.occupation=document.getElementById('edit_job' + user_id).value;
data.username=document.getElementById('edit_username' + user_id).value;

var jsonData = JSON.stringify(data);

xhttp.onreadystatechange = function()
{
  if(xhttp.readyState==4 && xhttp.status==201)
  {
    document.getElementById('result_in_admin').style.color = "green";
    document.getElementById('result_in_admin').style.fontSize = "3vw";
    document.getElementById('result_in_admin').innerHTML = "User updated succesfully";
  }
  else
  {
    document.getElementById('result_in_admin').style.color = "red";
    document.getElementById('result_in_admin').style.fontSize = "3vw";
    document.getElementById('result_in_admin').innerHTML = "Unexpected error, Please send message to us";
  }
};
  xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhttp.send(jsonData);
}
