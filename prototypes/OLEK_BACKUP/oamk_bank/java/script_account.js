
function show_accounts()
{

  for (var i = 0; i < 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";

    document.getElementById('contact_btn').style.color = 'white';
    document.getElementById('contact_btn').style.backgroundColor = '#F2882F';
    
    
    document.getElementById('edit_btn').style.color = 'white';
    document.getElementById('edit_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('loan_btn').style.color = 'white';
    document.getElementById('loan_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('pay_btn').style.color = 'white';
    document.getElementById('pay_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('accounts_btn').style.color = '#F2882F';
    document.getElementById('accounts_btn').style.backgroundColor = 'white';
  }

  document.getElementById('container').style.display = 'none';
  document.getElementById('container1').style.display = 'none';
  document.getElementById('formdiv0').style.display = 'block';
  document.getElementById('pagetitle').innerHTML = '<h2>' + 'List of your available accounts:' + '</h2>';
}


function account_own()
{
  document.getElementById('formdiv0').style.display = 'none';
  var id_for_own_acc = document.getElementById('user_id_from_login').value;
  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";
  var xhttp = new XMLHttpRequest();
  var jsonData ='';
     xhttp.open('GET', url, true);
     xhttp.onreadystatechange=function()
     {
       if(xhttp.readyState==4 && xhttp.status==200)
       {
        jsonData = JSON.parse(xhttp.responseText);
        
         for(x in jsonData)
         {
           if(jsonData[x].user_id == id_for_own_acc)
             {
              createListFunction(0);
              var li_button = document.createElement("input");
              li_button.setAttribute('type', 'button');
              li_button.setAttribute('id', 'li_button');
              li_button.setAttribute('onclick','getaccountinfo("'+jsonData[x].account_id+'","'+jsonData[x].Balance+'","'+jsonData[x].credit+'")');
              li_button.setAttribute('value', jsonData[x].account_id);
              
              document.getElementById('formdiv0').appendChild(li_button);
             }
         }
         for (var i = 0; i < 8; i++)
         {
           var name_div = "formdiv" ;
           document.getElementById(name_div + i).style.display="none";
         }
         document.getElementById('formdiv').style.display = 'none';
         document.getElementById('formdiv1').style.display = 'none';
       }
     };
     xhttp.send();
}

function getaccountinfo(account_id,Balance,credit){

    document.getElementById('pagetitle').innerHTML = '<h2>' + account_id + '</h2>';
    var formdiv1 = document.getElementById('formdiv1');
    formdiv1.innerHTML = "";

    var balance = document.createTextNode('Balance: ' + "\u00A0" +  "\u00A0" + Balance + "\u00A0" + '€');
    var credit = document.createTextNode('Credit Limit: ' + "\u00A0" + "\u00A0" + credit + "\u00A0" + '€');

    formdiv1.appendChild(balance);
    createListFunction(1);
    formdiv1.appendChild(credit);
    get_loan();

    document.getElementById('formdiv0').style.display = 'none';
    document.getElementById('formdiv1').style.display = 'block';

    createListFunction(1);

    var loan_table = document.createElement('div');
    loan_table.style.overflowY = 'scroll';
    loan_table.style.width = '15vw';
    loan_table.style.height = '10vw';
    loan_table.id = 'accounts_loan_table';
    loan_table.style.display = 'block';
    loan_table.style.marginLeft = 'auto';
    loan_table.style.marginRight = 'auto';
    loan_table.style.border = '1px solid #F2882F'
    document.getElementById('formdiv1').appendChild(loan_table);

    
}

function get_loan(){
  
  var url = "http://localhost/oamk_bank/index.php/api/bank/loans/loan";
  var jsonData='';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      jsonData = JSON.parse(xhttp.responseText);

      for(x in jsonData)
      {
        if(jsonData[x].user_id == 1)
        {
        createListFunction(1);
        var loan_label = document.createElement('label');
        loan_label.id = 'loan_label'+x;
        var text_for_label = document.createTextNode('Loan ID' + "\u00A0" + jsonData[x].loan_id + ":" + "\u00A0\u00A0\u00A0\u00A0\u00A0" + jsonData[x].amount + "\u00A0" + "€");
        loan_label.appendChild(text_for_label);
        var br = document.createElement('br');
        loan_label.appendChild(br);
        var br1 = document.createElement('br');
        loan_label.appendChild(br1);
        document.getElementById('accounts_loan_table').appendChild(loan_label);
        }
      }
    }
  };
  xhttp.send();
}

function createaccount(){
    document.getElementById('pagetitle').innerHTML = '<h2>Create New Account</h2>'
    var place = document.getElementById('test1');
    var create = document.createElement('input');
    create.setAttribute('type', 'button');
    create.setAttribute('id', 'sendbtn');
    create.setAttribute('onclick', '');
    create.setAttribute('value','Generate')
    place.appendChild(create);
    location.reload();
}
