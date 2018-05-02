function edit_show()
{
  document.getElementById('container').style.display = 'none';
  document.getElementById('container1').style.display = 'none';

  for (var i = 0; i <= 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
    document.getElementById(name_div).style.display = 'none';


    document.getElementById('contact_btn').style.color = 'white';
    document.getElementById('contact_btn').style.backgroundColor = '#F2882F';
    
    
    document.getElementById('edit_btn').style.color = '#F2882F';
    document.getElementById('edit_btn').style.backgroundColor = 'white';
    
    document.getElementById('loan_btn').style.color = 'white';
    document.getElementById('loan_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('pay_btn').style.color = 'white';
    document.getElementById('pay_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('accounts_btn').style.color = 'white';
    document.getElementById('accounts_btn').style.backgroundColor = '#F2882F';
  }

  document.getElementById('formdiv7').style.display = "block";
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";

  var editCredsection = "<h2>Edit Credentials</h2>";

  document.getElementById("pagetitle").innerHTML = editCredsection;

}

function editCredFunction(){

  document.getElementById('loading').inner="Loading...";
  document.getElementById('loading').style.display="block";

  //from here about information
  var id_for_edit = document.getElementById('user_id_from_login').value;
  var url = "http://localhost/oamk_bank/index.php/api/Bank/users/id/" + id_for_edit;
  var xhttp = new XMLHttpRequest();
  var json='';
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      json=JSON.parse(xhttp.responseText);;

      createListFunction(7);
      var fname_label = document.createElement("label");
      var fname_text = document.createTextNode("Firstname");
      fname_label.appendChild(fname_text);
      document.getElementById('formdiv7').appendChild(fname_label);
      createListFunction(7);
      var firstname = document.createElement("input");
      firstname.setAttribute('type', 'text');
      firstname.setAttribute('id', 'fname');
      firstname.setAttribute('value', json[0].firstname);
      document.getElementById('formdiv7').appendChild(firstname);

      createListFunction(7);
      var lname_label = document.createElement("label");
      var lname_text = document.createTextNode("Lastname");
      lname_label.appendChild(lname_text);
      document.getElementById('formdiv7').appendChild(lname_label);
      createListFunction(7);
      var lastname = document.createElement("input");
      lastname.setAttribute('type', 'text');
      lastname.setAttribute('id', 'lname');
      lastname.setAttribute('value', json[0].lastname);
      document.getElementById('formdiv7').appendChild(lastname);

      createListFunction(7);
      var city_label = document.createElement("label");
      var city_text = document.createTextNode("City");
      city_label.appendChild(city_text);
      document.getElementById('formdiv7').appendChild(city_label);
      createListFunction(7);
      var city = document.createElement('input');
      city.setAttribute('type','text');
      city.setAttribute('id','city');
      city.setAttribute('value', json[0].city);
      document.getElementById('formdiv7').appendChild(city);

      createListFunction(7);
      var address_label = document.createElement("label");
      var address_text = document.createTextNode("Address");
      address_label.appendChild(address_text);
      document.getElementById('formdiv7').appendChild(address_label);
      createListFunction(7);
      var address = document.createElement('input');
      address.setAttribute('type','text');
      address.setAttribute('id','address');
      address.setAttribute('value', json[0].address);
      document.getElementById('formdiv7').appendChild(address);

      createListFunction(7);
      var postalcode_label = document.createElement("label");
      var postalcode_text = document.createTextNode("Postal Code");
      postalcode_label.appendChild(postalcode_text);
      document.getElementById('formdiv7').appendChild(postalcode_label);
      createListFunction(7);
      var postalcode = document.createElement('input');
      postalcode.setAttribute('type','number');
      postalcode.setAttribute('id','postalcode');
      postalcode.setAttribute('value', json[0].postalcode);
      document.getElementById('formdiv7').appendChild(postalcode);

      createListFunction(7);
      var email_label = document.createElement("label");
      var email_text = document.createTextNode("Email");
      email_label.appendChild(email_text);
      document.getElementById('formdiv7').appendChild(email_label);
      createListFunction(7);
      var email = document.createElement('input');
      email.setAttribute('type','text');
      email.setAttribute('id','email');
      email.setAttribute('value', json[0].email);
      email.setAttribute('onchange', 'check_email_for_edit()')
      document.getElementById('formdiv7').appendChild(email);
      
      var emailcheck = document.createElement('input');
      emailcheck.setAttribute('type','text');
      emailcheck.setAttribute('id','emailcheck');
      emailcheck.setAttribute('value', json[0].email);
      emailcheck.style.display = 'none';
      emailcheck.setAttribute('readonly', 'readonly');
      document.getElementById('formdiv7').appendChild(emailcheck);

      createListFunction(7);
      var phone_label = document.createElement("label");
      var phone_text = document.createTextNode("Phone");
      phone_label.appendChild(phone_text);
      document.getElementById('formdiv7').appendChild(phone_label);
      createListFunction(7);
      var phone = document.createElement('input');
      phone.setAttribute('type','text');
      phone.setAttribute('id','phone');
      phone.setAttribute('value', json[0].phone);
      document.getElementById('formdiv7').appendChild(phone);

      createListFunction(7);
      var job_label = document.createElement("label");
      var job_text = document.createTextNode("Occupation");
      job_label.appendChild(job_text);
      document.getElementById('formdiv7').appendChild(job_label);
      createListFunction(7);
      var job = document.createElement('input');
      job.setAttribute('type','text');
      job.setAttribute('id','job');
      job.setAttribute('value', json[0].occupation);
      document.getElementById('formdiv7').appendChild(job);

      createListFunction(7);
      var savebtn = document.createElement('input');
      savebtn.setAttribute('type', 'button');
      savebtn.setAttribute('id', 'sendbtn');
      savebtn.setAttribute('value', 'save');
      savebtn.setAttribute('onclick', 'save_own_info()');
      document.getElementById('formdiv7').appendChild(savebtn);

      document.getElementById('loading').inner=" ";
      document.getElementById('loading').style.display="none";
    }
  };
  xhttp.send();

}


function save_own_info()
{
  var id_for_edit =  document.getElementById('user_id_from_login').value;
  document.getElementById('formdiv7').style.display = "none";

var url = "http://localhost/oamk_bank/index.php/api/Bank/users/id/" + id_for_edit;
var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url, true);
var data = {} ;

data.id=id_for_edit;
data.firstname=document.getElementById('fname').value;
data.lastname=document.getElementById('lname').value;
data.city=document.getElementById('city').value;
data.address=document.getElementById('address').value;
data.postalcode=document.getElementById('postalcode').value;
data.email=document.getElementById('email').value;
data.phone=document.getElementById('phone').value;
data.occupation=document.getElementById('job').value;

var jsonData = JSON.stringify(data);
if (document.getElementById('email').style.borderColor !== 'red' ){
xhttp.onreadystatechange = function()
{
  if(xhttp.readyState==4 && xhttp.status==201)
  {
    document.getElementById('formdiv').style.display = "block";
    document.getElementById('formdiv').style.color = "green";
    document.getElementById('formdiv').style.fontSize = "3vw";
    document.getElementById('formdiv').innerHTML = "User updated succesfully";
    document.getElementById('loading').innerHTML = " ";
    document.getElementById('loading').style.display = "none";
    // document.getElementById('formdiv7').style.display = "block";
    setTimeout(function(){ location.reload(); }, 2000);
  }
  else
  {
     
    document.getElementById('formdiv').style.display = "block";
    document.getElementById('formdiv').style.color = "red";
    document.getElementById('formdiv').style.fontSize = "3vw";
    document.getElementById('formdiv').innerHTML = "Unexpected error, Please send message to us";
    document.getElementById('loading').innerHTML = " ";
    document.getElementById('loading').style.display = "none";
    document.getElementById('formdiv7').style.display = "block";
  }
};
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);
}
else {
    document.getElementById('formdiv').innerHTML='Email is invalid.';
    document.getElementById('formdiv').style.display = 'block';
    document.getElementById('formdiv7').style.display = 'none';
    setTimeout(function(){ 
        document.getElementById('formdiv').innerHTML='Email is invalid.';
        document.getElementById('formdiv').style.display = 'none';
        document.getElementById('formdiv7').style.display = 'block';
     }, 2000);

}
}

function check_email_for_edit()
{
  var url = "http://localhost/oamk_bank/index.php/api/Bank/users/";
  var jsonData='';
  var email = document.getElementById('email').value;
  var xhttp = new XMLHttpRequest();
  var emailcheck = document.getElementById('emailcheck').value;
  if (emailcheck == email) {
      document.getElementById('email').style.borderColor = '#F2882F';
      document.getElementById('email').style.borderWidth = '1px';
  }
  else {
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange=function()
  {
    if (!validateEmail(email)) {
        document.getElementById('email').style.borderColor='red';
		document.getElementById('email').style.borderWidth='thick';
        } else{
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
			document.getElementById('email').style.borderColor='green';
			document.getElementById('email').style.borderWidth='thick';
			
      }
      else
      {
			document.getElementById('email').style.borderColor='red';
			document.getElementById('email').style.borderWidth='thick';
		
      }
    }
    }
  };
  xhttp.send();
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}