function editCredFunction(){
  document.getElementById('container').style.display="none";
  for (var i = 0; i < 7; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }

  document.getElementById('formdiv3').innerHTML = " ";
  document.getElementById('formdiv3').style.display = "block";
  document.getElementById('loading').innerHTML = "Loading...";

  // document.getElementById('container').style.display = 'none';

  var editCredsection = "<h2>Edit Credentials</h2>";

  document.getElementById("pagetitle").innerHTML = editCredsection;

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

      createListFunction3();
      var fname_label = document.createElement("label");
      var fname_text = document.createTextNode("Firstname");
      fname_label.appendChild(fname_text);
      document.getElementById('formdiv3').appendChild(fname_label);
      createListFunction3();
      var firstname = document.createElement("input");
      firstname.setAttribute('type', 'text');
      firstname.setAttribute('id', 'fname');
      firstname.setAttribute('value', json[0].firstname);
      document.getElementById('formdiv3').appendChild(firstname);

      createListFunction3();
      var lname_label = document.createElement("label");
      var lname_text = document.createTextNode("Lastname");
      lname_label.appendChild(lname_text);
      document.getElementById('formdiv3').appendChild(lname_label);
      createListFunction3();
      var lastname = document.createElement("input");
      lastname.setAttribute('type', 'text');
      lastname.setAttribute('id', 'lname');
      lastname.setAttribute('value', json[0].lastname);
      document.getElementById('formdiv3').appendChild(lastname);

      createListFunction3();
      var city_label = document.createElement("label");
      var city_text = document.createTextNode("City");
      city_label.appendChild(city_text);
      document.getElementById('formdiv3').appendChild(city_label);
      createListFunction3();
      var city = document.createElement('input');
      city.setAttribute('type','text');
      city.setAttribute('id','city');
      city.setAttribute('value', json[0].city);
      document.getElementById('formdiv3').appendChild(city);

      createListFunction3();
      var address_label = document.createElement("label");
      var address_text = document.createTextNode("Address");
      address_label.appendChild(address_text);
      document.getElementById('formdiv3').appendChild(address_label);
      createListFunction3();
      var address = document.createElement('input');
      address.setAttribute('type','text');
      address.setAttribute('id','address');
      address.setAttribute('value', json[0].address);
      document.getElementById('formdiv3').appendChild(address);

      createListFunction3();
      var postalcode_label = document.createElement("label");
      var postalcode_text = document.createTextNode("Postal Code");
      postalcode_label.appendChild(postalcode_text);
      document.getElementById('formdiv3').appendChild(postalcode_label);
      createListFunction3();
      var postalcode = document.createElement('input');
      postalcode.setAttribute('type','number');
      postalcode.setAttribute('id','postalcode');
      postalcode.setAttribute('value', json[0].postalcode);
      document.getElementById('formdiv3').appendChild(postalcode);

      createListFunction3();
      var email_label = document.createElement("label");
      var email_text = document.createTextNode("Email");
      email_label.appendChild(email_text);
      document.getElementById('formdiv3').appendChild(email_label);
      createListFunction3();
      var email = document.createElement('input');
      email.setAttribute('type','text');
      email.setAttribute('id','email');
      email.setAttribute('value', json[0].email);
      document.getElementById('formdiv3').appendChild(email);

      createListFunction3();
      var phone_label = document.createElement("label");
      var phone_text = document.createTextNode("Phone");
      phone_label.appendChild(phone_text);
      document.getElementById('formdiv3').appendChild(phone_label);
      createListFunction3();
      var phone = document.createElement('input');
      phone.setAttribute('type','text');
      phone.setAttribute('id','phone');
      phone.setAttribute('value', json[0].phone);
      document.getElementById('formdiv3').appendChild(phone);

      createListFunction3();
      var job_label = document.createElement("label");
      var job_text = document.createTextNode("Occupation");
      job_label.appendChild(job_text);
      document.getElementById('formdiv3').appendChild(job_label);
      createListFunction3();
      var job = document.createElement('input');
      job.setAttribute('type','text');
      job.setAttribute('id','job');
      job.setAttribute('value', json[0].occupation);
      document.getElementById('formdiv3').appendChild(job);

      createListFunction3();
      var savebtn = document.createElement('input');
      savebtn.setAttribute('type', 'button');
      savebtn.setAttribute('id', 'savebtn');
      savebtn.setAttribute('value', 'save');
      savebtn.setAttribute('onclick', 'save_own_info()');
      document.getElementById('formdiv3').appendChild(savebtn);
      document.getElementById('loading').innerHTML = " ";
    }
  };
  xhttp.send();

}