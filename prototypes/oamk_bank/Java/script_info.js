function save_own_info()
{
  document.getElementById('loading').innerHTML = "Loading...";
  document.getElementById('formdiv3').style.display = "none";

var url = "http://localhost/oamk_bank/index.php/api/bank/users/id/" + 1;
var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url, true);
var data = {} ;
data.id=1;
data.firstname=document.getElementById('fname').value;
data.lastname=document.getElementById('lname').value;
data.city=document.getElementById('city').value;
data.address=document.getElementById('address').value;
data.postalcode=document.getElementById('postalcode').value;
data.email=document.getElementById('email').value;
data.phone=document.getElementById('phone').value;
data.occupation=document.getElementById('job').value;

var jsonData = JSON.stringify(data);

xhttp.onreadystatechange = function()
{
  if(xhttp.readyState==4 && xhttp.status==201)
  {
    document.getElementById('result').innerHTML = "User updated succesfully";
    document.getElementById('loading').innerHTML = " ";
    document.getElementById('formdiv3').style.display = "block";
  }
  else
  {
    document.getElementById('result').innerHTML = "Something went wrong";
    document.getElementById('loading').innerHTML = " ";
    document.getElementById('formdiv3').style.display = "block";
  }
};
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);
}


/// from here for request

function request_add()
{
  var date_request = new Date();
date_request.getFullYear(); // 2018
var month = date_request.getMonth() + 1 ;// 04
date_request.getDate();// 02
date_request.getHours();
date_request.getMinutes();
date_request.getSeconds();

document.getElementById('timestamp').value =
date_request.getFullYear() + "-" + month + "-" +
date_request.getDate() + "-" + date_request.getHours() + "-" +
date_request.getMinutes() + "-" + date_request.getSeconds() ;

      document.getElementById('result').innerHTML = "Loading...";
      var form = document.getElementById('requestform');
      document.getElementById('hide_form').style.display="none";

      var url = "http://localhost/oamk_bank/index.php/api/bank/requests/";
      var xhttp = new XMLHttpRequest();
      xhttp.open('POST', url, true);

      var formData = new FormData(form);

      xhttp.onreadystatechange=function()
      {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
          document.getElementById('result').innerHTML = "Request sent succesfully";
          document.getElementById('hide_form').style.display="block";
        }
        else
        {
            document.getElementById('result').innerHTML = "Something went wrong";
            document.getElementById('hide_form').style.display="block";
        }
      };

        xhttp.send(formData);
}


function hide_pic()
{
  if(document.getElementById('test_pic').style.display == 'none')
  {
    document.getElementById('test_pic').style.display = 'block';
  }
  else
  {
  document.getElementById('test_pic').style.display = 'none';
  }
}
