function terms_conditions()
{
    document.getElementById('pagetitle').style.display = 'none';
    document.getElementById('formdiv0').style.display = 'none';
    document.getElementById('formdiv1').style.display = 'none';
    document.getElementById('formdiv8').style.display="block";
}



function create_account_terms()
{

      createListFunction(8);
      var terms_condition_label = document.createElement("h1");
      var text_for_terms_condition_label = document.createTextNode("Open an account from Oamk Bank");
      terms_condition_label.appendChild(text_for_terms_condition_label);
      document.getElementById('formdiv8').appendChild(terms_condition_label);


      createListFunction(8);
      var terms_div = document.createElement("div");
      var terms_text = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
      terms_div.appendChild(terms_text);
      terms_div.setAttribute('class', 'create_account_terms');
      document.getElementById('formdiv8').appendChild(terms_div);

      createListFunction(8);
      var checkbox_div = document.createElement("div");
      checkbox_div.setAttribute("id", "checkbox_div");
      checkbox_div.style.textAlign ="left";
      document.getElementById('formdiv8').appendChild(checkbox_div);

      var checkbox_terms = document.createElement("input");
      checkbox_terms.setAttribute('type', 'checkbox');
      checkbox_terms.setAttribute('size', 2);
      checkbox_terms.setAttribute('id', 'input_checkbox_terms');
      checkbox_terms.setAttribute('onclick', 'terms_agree_for_create()');
      document.getElementById('checkbox_div').appendChild(checkbox_terms);

      var terms_msg_for_i = document.createElement('i');
      var terms_checkbox_msg = document.createTextNode("I agree this and that also that and this so  i am clicking this now");
      terms_msg_for_i.appendChild(terms_checkbox_msg);
      document.getElementById('checkbox_div').appendChild(terms_msg_for_i);

      createListFunction(8);
      var conditions_div = document.createElement("div");
      var conditions_text = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
      conditions_div.appendChild(conditions_text);
      conditions_div.setAttribute('class', 'create_account_terms');
      document.getElementById('formdiv8').appendChild(conditions_div);

      createListFunction(8);
      var checkbox_div_condition = document.createElement("div");
      checkbox_div_condition.setAttribute("id", "checkbox_div_condition");
      checkbox_div_condition.style.textAlign ="left";
      document.getElementById('formdiv8').appendChild(checkbox_div_condition);

      var checkbox_conditions = document.createElement("input");
      checkbox_conditions.setAttribute('type', 'checkbox');
      checkbox_conditions.setAttribute('size', 2);
      checkbox_conditions.setAttribute('id', 'input_checkbox_condition');
      checkbox_conditions.setAttribute('onclick', 'terms_agree_for_create()');
      document.getElementById('checkbox_div_condition').appendChild(checkbox_conditions);

      var conditions_msg_for_i = document.createElement('i');
      var conditions_checkbox_msg = document.createTextNode("I agree this and that also that and this so  i am clicking this now");
      conditions_msg_for_i.appendChild(conditions_checkbox_msg);
      document.getElementById('checkbox_div_condition').appendChild(conditions_msg_for_i);


      createListFunction(8);
      var create_btn = document.createElement("input");
      create_btn.setAttribute('type', 'button');
      create_btn.setAttribute('id', 'create_account');
      create_btn.disabled = true;
      create_btn.setAttribute('onclick', 'check_account()');
      create_btn.setAttribute('value', 'Create');
      document.getElementById('formdiv8').appendChild(create_btn);

      createListFunction(8);
      var account_form = document.createElement("form");
      account_form.setAttribute('id', 'account_form_for_generate');
      account_form.style.display = "none";
      document.getElementById('formdiv8').appendChild(account_form);

      var user_id_for_generate = document.createElement('input');
      user_id_for_generate.setAttribute('type', 'hidden');
      user_id_for_generate.setAttribute('name', 'user_id');
      user_id_for_generate.setAttribute('value', '');
      user_id_for_generate.setAttribute('id', 'user_id_for_form_value');
      account_form.appendChild(user_id_for_generate);

      var account_id_for_generate = document.createElement('input');
      account_id_for_generate.setAttribute('type', 'hidden');
      account_id_for_generate.setAttribute('value', '');
      account_id_for_generate.setAttribute('id', 'account_id_for_form_value');
      account_id_for_generate.setAttribute('name', 'account_id');
      account_form.appendChild(account_id_for_generate);

      var balance_for_generate = document.createElement('input');
      balance_for_generate.setAttribute('type', 'hidden');
      balance_for_generate.setAttribute('value', 0);
      balance_for_generate.setAttribute('name', 'Balance');
      account_form.appendChild(balance_for_generate);

      var credit_for_generate = document.createElement('input');
      credit_for_generate.setAttribute('type', 'hidden');
      credit_for_generate.setAttribute('value', 100);
      credit_for_generate.setAttribute('name', 'credit');
      account_form.appendChild(credit_for_generate);

} // here is end of terms and conditions create element function

var condition_checkbox = false;
var terms_checkbox = false;


 function terms_agree_for_create()
 {
   if(document.getElementById('input_checkbox_condition').checked)
   {
     condition_checkbox = true;
   }
   else
   {
     condition_checkbox = false;
   }

   if(document.getElementById('input_checkbox_terms').checked)
   {
     terms_checkbox = true;
   }
   else
   {
     terms_checkbox = false;
   }
   if(condition_checkbox == true && terms_checkbox == true )
   {
     document.getElementById('create_account').disabled = false;
   }
   else
   {
     document.getElementById('create_account').disabled = true;
   }
 }/// here is end of for checking checkbox

var loop_counter = 0;

function check_account()
 {
   var loading_msg = document.getElementById('result') ;
   document.getElementById('result').style.display = "block";

   document.getElementById('formdiv8').style.display="none";

   var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/";

   var xhttp = new XMLHttpRequest();
   xhttp.open('GET', url, true);
   var jsonData='';
   var data = [];

    xhttp.onreadystatechange=function()
    {
      if(xhttp.readyState==4 && xhttp.status==200)
      {
        var account_generated = "FI";

        ///This is test for checking existing account number
        /// one problem yet, if there are whole number is occupied then there will be endless loop
        // so i added loop counter for making endless loop ends in some point
        // var first_2_number = Math.random() * ( 10 - 0 + 1 ) + 0 ;
        // var first_2_number_floor = Math.floor(first_2_number) ;
        // account_generated = account_generated + first_2_number_floor;


        var first_2_number = Math.random() * ( 99 - 10 + 1 ) + 10 ;
        var first_2_number_floor = Math.floor(first_2_number) ;

        account_generated = account_generated + first_2_number_floor + "100104";

        for(i=0; i<8; i++)
        {
          var rest_of_number = Math.random() * ( 9 - 0 + 0 ) + 0 ;
          var rest_of_number_floor = Math.floor(rest_of_number) ;
          account_generated = account_generated + rest_of_number_floor;
        }


        jsonData = JSON.parse(xhttp.responseText);
        for(x in jsonData)
        {
          data.push(jsonData[x].account_id);
        }
        if(data.indexOf(account_generated) == -1)
        {
          account_generate(account_generated);
          loop_counter = 0;
        }
        else
        {
          loading_msg.innerHTML += "."

          check_account();
          loop_counter ++;
          if(loop_counter == 25)
          {
            document.getElementById('result').innerHTML = "Unexpected error happened, Please contact the bank";
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').style.fontSize = '3vw';
            document.getElementById('account_form_for_generate').style.display="block";
            setTimeout(function()
            {
              location.reload();
            }, 4000);
          }
        }
      }
    };
    xhttp.send();
 }


 function account_generate(account_generated)
 {
   var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/";
   var xhttp = new XMLHttpRequest();
   xhttp.open('POST', url, true);

   document.getElementById('user_id_for_form_value').value = user_id_global;
   document.getElementById('account_id_for_form_value').value = account_generated;

   var form = document.getElementById('account_form_for_generate');
   var formData = new FormData(form);
   xhttp.onreadystatechange=function()
   {
     if(xhttp.readyState==4 && xhttp.status==201)
     {
       document.getElementById('result').innerHTML = "Account Created Succesfully";
       document.getElementById('result').style.color = 'green';
       document.getElementById('result').style.fontSize = '3vw';
       setTimeout(function()
       {
         location.reload();
       }, 2000);
     }
     else
     {
       document.getElementById('result').innerHTML = "Unexpected error happened, Please contact the bank";
       document.getElementById('result').style.color = 'red';
       document.getElementById('result').style.fontSize = '3vw';
       document.getElementById('account_form_for_generate').style.display="block";
     }
   };
   xhttp.send(formData);
 }