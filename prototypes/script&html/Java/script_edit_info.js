function edit_show()
{
  document.getElementById('edit_btn').disabled = true;
  document.getElementById('contact_btn').disabled = false;
  document.getElementById('pay_btn').disabled = false;
  document.getElementById('container').style.display="none";
  for (var i = 0; i < 7; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }

  document.getElementById('formdiv5').style.display = "block";
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";

  var editCredsection = "<h2>Edit Credentials</h2>";

  document.getElementById("pagetitle").innerHTML = editCredsection;

}

function editCredFunction(){

  document.getElementById('loading').inner="Loading...";
  document.getElementById('loading').style.display="block";

  //from here about information

  var url = "http://localhost/oamk_bank/index.php/api/bank/users/id/1";
  var xhttp = new XMLHttpRequest();
  var json='';
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      json=JSON.parse(xhttp.responseText);;

      createListFunction(5);
      var fname_label = document.createElement("label");
      var fname_text = document.createTextNode("Firstname");
      fname_label.appendChild(fname_text);
      document.getElementById('formdiv5').appendChild(fname_label);
      createListFunction(5);
      var firstname = document.createElement("input");
      firstname.setAttribute('type', 'text');
      firstname.setAttribute('id', 'fname');
      firstname.setAttribute('value', json[0].firstname);
      document.getElementById('formdiv5').appendChild(firstname);

      createListFunction(5);
      var lname_label = document.createElement("label");
      var lname_text = document.createTextNode("Lastname");
      lname_label.appendChild(lname_text);
      document.getElementById('formdiv5').appendChild(lname_label);
      createListFunction(5);
      var lastname = document.createElement("input");
      lastname.setAttribute('type', 'text');
      lastname.setAttribute('id', 'lname');
      lastname.setAttribute('value', json[0].lastname);
      document.getElementById('formdiv5').appendChild(lastname);

      createListFunction(5);
      var city_label = document.createElement("label");
      var city_text = document.createTextNode("City");
      city_label.appendChild(city_text);
      document.getElementById('formdiv5').appendChild(city_label);
      createListFunction(5);
      var city = document.createElement('input');
      city.setAttribute('type','text');
      city.setAttribute('id','city');
      city.setAttribute('value', json[0].city);
      document.getElementById('formdiv5').appendChild(city);

      createListFunction(5);
      var address_label = document.createElement("label");
      var address_text = document.createTextNode("Address");
      address_label.appendChild(address_text);
      document.getElementById('formdiv5').appendChild(address_label);
      createListFunction(5);
      var address = document.createElement('input');
      address.setAttribute('type','text');
      address.setAttribute('id','address');
      address.setAttribute('value', json[0].address);
      document.getElementById('formdiv5').appendChild(address);

      createListFunction(5);
      var postalcode_label = document.createElement("label");
      var postalcode_text = document.createTextNode("Postal Code");
      postalcode_label.appendChild(postalcode_text);
      document.getElementById('formdiv5').appendChild(postalcode_label);
      createListFunction(5);
      var postalcode = document.createElement('input');
      postalcode.setAttribute('type','number');
      postalcode.setAttribute('id','postalcode');
      postalcode.setAttribute('value', json[0].postalcode);
      document.getElementById('formdiv5').appendChild(postalcode);

      createListFunction(5);
      var email_label = document.createElement("label");
      var email_text = document.createTextNode("Email");
      email_label.appendChild(email_text);
      document.getElementById('formdiv5').appendChild(email_label);
      createListFunction(5);
      var email = document.createElement('input');
      email.setAttribute('type','text');
      email.setAttribute('id','email');
      email.setAttribute('value', json[0].email);
      document.getElementById('formdiv5').appendChild(email);

      createListFunction(5);
      var phone_label = document.createElement("label");
      var phone_text = document.createTextNode("Phone");
      phone_label.appendChild(phone_text);
      document.getElementById('formdiv5').appendChild(phone_label);
      createListFunction(5);
      var phone = document.createElement('input');
      phone.setAttribute('type','text');
      phone.setAttribute('id','phone');
      phone.setAttribute('value', json[0].phone);
      document.getElementById('formdiv5').appendChild(phone);

      createListFunction(5);
      var job_label = document.createElement("label");
      var job_text = document.createTextNode("Occupation");
      job_label.appendChild(job_text);
      document.getElementById('formdiv5').appendChild(job_label);
      createListFunction(5);
      var job = document.createElement('input');
      job.setAttribute('type','text');
      job.setAttribute('id','job');
      job.setAttribute('value', json[0].occupation);
      document.getElementById('formdiv5').appendChild(job);

      createListFunction(5);
      var savebtn = document.createElement('input');
      savebtn.setAttribute('type', 'button');
      savebtn.setAttribute('id', 'sendbtn');
      savebtn.setAttribute('value', 'save');
      savebtn.setAttribute('onclick', 'save_own_info()');
      document.getElementById('formdiv5').appendChild(savebtn);

      document.getElementById('loading').inner=" ";
      document.getElementById('loading').style.display="none";
    }
  };
  xhttp.send();

}


function save_own_info()
{
  document.getElementById('loading').style.display = "block";
  document.getElementById('loading').innerHTML = "Loading...";
  document.getElementById('formdiv5').style.display = "none";

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
    document.getElementById('loading').style.display = "none";
    document.getElementById('formdiv5').style.display = "block";
  }
  else
  {
    document.getElementById('result').innerHTML = "Something went wrong";
    document.getElementById('loading').innerHTML = " ";
    document.getElementById('loading').style.display = "none";
    document.getElementById('formdiv5').style.display = "block";
  }
};
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);
}
