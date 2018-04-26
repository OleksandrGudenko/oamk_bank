

function create_account_terms()
{


      // createListFunction();
      var terms_condition_label = document.createElement("label");
      var text_for_terms_condition_label = document.createTextNode("Test terms");
      terms_condition_label.appendChild(text_for_terms_condition_label);
      document.getElementById('formdiv').appendChild(terms_condition_label);


      // createListFunction(8);
      var terms_div = document.createElement("div");
      var terms_text = document.createTextNode("Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and Here will come terms and ");
      terms_div.appendChild(terms_text);
      terms_div.setAttribute('class', 'create_account_terms');
      document.getElementById('formdiv').appendChild(terms_div);
  //
  //     createListFunction(8);
      var checkbox_terms = document.createElement("input");
      checkbox_terms.setAttribute('type', 'checkbox');
      checkbox_terms.setAttribute('onclick', 'terms_agree_for_create');
      document.getElementById('formdiv').appendChild(checkbox_terms);

      var terms_checkbox_msg = document.createTextNode("I agree");
      document.getElementById('form').appendChild(terms_checkbox_msg);

      // createListFunction(8);
      // var lastname = document.createElement("input");
      // lastname.setAttribute('type', 'text');
      // lastname.setAttribute('id', 'lname');
      // lastname.setAttribute('value', json[0].lastname);
      // document.getElementById('formdiv7').appendChild(lastname);
  //
  //     createListFunction(7);
  //     var city_label = document.createElement("label");
  //     var city_text = document.createTextNode("City");
  //     city_label.appendChild(city_text);
  //     document.getElementById('formdiv7').appendChild(city_label);
  //     createListFunction(7);
  //     var city = document.createElement('input');
  //     city.setAttribute('type','text');
  //     city.setAttribute('id','city');
  //     city.setAttribute('value', json[0].city);
  //     document.getElementById('formdiv7').appendChild(city);
  //
  //     createListFunction(7);
  //     var address_label = document.createElement("label");
  //     var address_text = document.createTextNode("Address");
  //     address_label.appendChild(address_text);
  //     document.getElementById('formdiv7').appendChild(address_label);
  //     createListFunction(7);
  //     var address = document.createElement('input');
  //     address.setAttribute('type','text');
  //     address.setAttribute('id','address');
  //     address.setAttribute('value', json[0].address);
  //     document.getElementById('formdiv7').appendChild(address);
  //
  //     createListFunction(7);
  //     var postalcode_label = document.createElement("label");
  //     var postalcode_text = document.createTextNode("Postal Code");
  //     postalcode_label.appendChild(postalcode_text);
  //     document.getElementById('formdiv7').appendChild(postalcode_label);
  //     createListFunction(7);
  //     var postalcode = document.createElement('input');
  //     postalcode.setAttribute('type','number');
  //     postalcode.setAttribute('id','postalcode');
  //     postalcode.setAttribute('value', json[0].postalcode);
  //     document.getElementById('formdiv7').appendChild(postalcode);
  //
  //     createListFunction(7);
  //     var email_label = document.createElement("label");
  //     var email_text = document.createTextNode("Email");
  //     email_label.appendChild(email_text);
  //     document.getElementById('formdiv7').appendChild(email_label);
  //     createListFunction(7);
  //     var email = document.createElement('input');
  //     email.setAttribute('type','text');
  //     email.setAttribute('id','email');
  //     email.setAttribute('value', json[0].email);
  //     document.getElementById('formdiv7').appendChild(email);
  //
  //     createListFunction(7);
  //     var phone_label = document.createElement("label");
  //     var phone_text = document.createTextNode("Phone");
  //     phone_label.appendChild(phone_text);
  //     document.getElementById('formdiv7').appendChild(phone_label);
  //     createListFunction(7);
  //     var phone = document.createElement('input');
  //     phone.setAttribute('type','text');
  //     phone.setAttribute('id','phone');
  //     phone.setAttribute('value', json[0].phone);
  //     document.getElementById('formdiv7').appendChild(phone);
  //
  //     createListFunction(7);
  //     var job_label = document.createElement("label");
  //     var job_text = document.createTextNode("Occupation");
  //     job_label.appendChild(job_text);
  //     document.getElementById('formdiv7').appendChild(job_label);
  //     createListFunction(7);
  //     var job = document.createElement('input');
  //     job.setAttribute('type','text');
  //     job.setAttribute('id','job');
  //     job.setAttribute('value', json[0].occupation);
  //     document.getElementById('formdiv7').appendChild(job);
  //
  //     createListFunction(7);
  //     var savebtn = document.createElement('input');
  //     savebtn.setAttribute('type', 'button');
  //     savebtn.setAttribute('id', 'sendbtn');
  //     savebtn.setAttribute('value', 'save');
  //     savebtn.setAttribute('onclick', 'save_own_info()');
  //     document.getElementById('formdiv7').appendChild(savebtn);
  //
  //     document.getElementById('loading').inner=" ";
  //     document.getElementById('loading').style.display="none";
}
