
function show_accounts()
{
    document.getElementById('li_button1').removeAttribute('disabled');
    document.getElementById('li_button2').disabled = false;



  for (var i = 0; i <= 8; i++)
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

  create_new_div = null;
  document.getElementById('container').style.display = 'none';
  document.getElementById('container1').style.display = 'none';
  document.getElementById('formdiv0').style.display = 'block';
  document.getElementById('pagetitle').style.display = 'block';
  document.getElementById('pagetitle').innerHTML = '<h2>' + 'List of your available accounts:' + '</h2>';
}


function account_own()
{
  document.getElementById('formdiv0').style.display = 'none';
  document.getElementById('formdiv1').innerHTML = ' ';
  var id_for_own_acc = document.getElementById('user_id_from_login').value;
  var url = "http://www.students.oamk.fi/~t7haki01/oamk_bank/index.php/api/Bank/accounts/accountid/";
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
         for (var i = 0; i <= 8; i++)
         {
           var name_div = "formdiv" ;
           document.getElementById(name_div + i).style.display="none";
         }

         createListFunction(0);

         var transaction_history = document.createElement('input');
         transaction_history.setAttribute('type', 'button');
         transaction_history.setAttribute('id', 'li_button2');
         transaction_history.setAttribute('onclick', 'get_trans_history()');
         transaction_history.setAttribute('value', 'View transaction history');
         document.getElementById('formdiv0').appendChild(transaction_history);

         createListFunction(0);

         var account_loan = document.createElement('input');
         account_loan.setAttribute('type','button');
         account_loan.setAttribute('id', 'li_button1');
         account_loan.setAttribute('value', 'View all Loans');
         account_loan.setAttribute('onclick', 'get_loan()');
         document.getElementById('formdiv0').appendChild(account_loan);

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

    formdiv1.style.marginTop = '5vw';
    formdiv1.appendChild(balance);
    createListFunction(1);
    formdiv1.appendChild(credit);

    document.getElementById('formdiv0').style.display = 'none';
    document.getElementById('formdiv1').style.display = 'block';

    createListFunction(1);
}

function get_trans_history(){
  document.getElementById('formdiv1').innerHTML = ' ';
  document.getElementById('li_button2').disabled = true;
  var user_accounts = document.getElementById('user_id_from_login').value;
  var url = "http://www.students.oamk.fi/~t7haki01/oamk_bank/index.php/api/Bank/transactions/user_id/" + user_accounts;
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
        if(jsonData[x].user_id == user_accounts)
        {
         document.getElementById('pagetitle').innerHTML = '<h2>'+'Transaction History'+'</h2>';

        if(create_new_div == null){
          var history_table = document.createElement("TABLE");
          document.getElementById('formdiv1').appendChild(history_table);
          history_table.id = 'trans_history';
          history_table.setAttribute('cellspacing', '15');
          var table = document.getElementById('trans_history');
          var header = table.createTHead();
          var row = header.insertRow(0);
          history_table.style.display = 'block';
          history_table.style.overflowY = 'scroll';
          history_table.style.height = '30vw';
          history_table.style.width = '50vw';
          history_table.style.marginTop = '5vw';

  
          var time_history = row.insertCell(0);
          time_history.id = 'thead_history';
          time_history.innerHTML = '<b>Date</b>';
          var sender_history = row.insertCell(1);
          sender_history.id = 'thead_history';
          sender_history.innerHTML = '<b>Sender</b>';
          var receiver_history = row.insertCell(2);
          receiver_history.id = 'thead_history';
          receiver_history.innerHTML = '<b>Receiver</b>';
          var amount_history = row.insertCell(3);
          amount_history.id = 'thead_history';
          amount_history.innerHTML = '<b>Amount</b>';
          var reference_history = row.insertCell(4);
          reference_history.id = 'thead_history';
          reference_history.innerHTML = '<b>Reference/Message</b>';
          create_new_div = 1;
        }

        var tr = document.createElement('tr');
        tr.id = 'new_row';
        var time_td = document.createElement('td');
        time_td.id = 'new_cell';
        time_td.innerHTML = jsonData[x].timestamp;
        var sender_td = document.createElement('td');
        sender_td.innerHTML = jsonData[x].sender;
        sender_td.id = 'new_cell';
        var receiver_td = document.createElement('td');
        receiver_td.innerHTML = jsonData[x].receiver;
        receiver_td.id = 'new_cell';
        var amount_td = document.createElement('td');
        amount_td.innerHTML = jsonData[x].amount + "€";
        amount_td.id = 'new_cell';
        var reference_td = document.createElement('td');
        reference_td.innerHTML = jsonData[x].reference;
        reference_td.id = 'new_cell';
        tr.appendChild(time_td);
        tr.appendChild(sender_td);
        tr.appendChild(receiver_td);
        tr.appendChild(amount_td);
        tr.appendChild(reference_td);
        document.getElementById('trans_history').appendChild(tr);
      

        document.getElementById('formdiv0').style.display = 'none';
        document.getElementById('formdiv1').style.display = 'block';
        }
      }
    }
  };
  xhttp.send();

}

function get_loan(){
  document.getElementById('formdiv1').innerHTML = ' ';
  document.getElementById('li_button1').disabled = true;
  var user_accounts = document.getElementById('user_id_from_login').value;
  var url = "http://www.students.oamk.fi/~t7haki01/oamk_bank/index.php/api/Bank/loans/loan";
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
        if(jsonData[x].user_id == user_accounts)
        {
         document.getElementById('pagetitle').innerHTML = '<h2>'+'View all Loans'+'</h2>';
         if(create_new_div == null){
         var loan_table = document.createElement('div');
         loan_table.style.overflowY = 'scroll';
         loan_table.style.height = '30vw';
         loan_table.style.width = '40vw';
         loan_table.id = 'accounts_loan_table';
         loan_table.style.display = 'block';
         loan_table.style.marginLeft = 'auto';
         loan_table.style.marginRight = 'auto';
         loan_table.style.marginTop = '5vw';
         loan_table.style.border = '1px solid #F2882F'
         loan_table.style.textAlign = 'center';
         document.getElementById('formdiv1').appendChild(loan_table);
         create_new_div = 1;
         }

        var loan_label = document.createElement('label');
        var br2 = document.createElement('br');
        loan_label.appendChild(br2);
        loan_label.id = 'loan_label';
        var text_for_label = document.createTextNode('Loan ID' + "\u00A0" + jsonData[x].loan_id + ":" + "\u00A0\u00A0\u00A0\u00A0\u00A0" + jsonData[x].amount + "\u00A0" + "€");
        loan_label.appendChild(text_for_label);
        var br = document.createElement('br');
        loan_label.appendChild(br);
        var br1 = document.createElement('br');
        loan_label.appendChild(br1);
        document.getElementById('accounts_loan_table').appendChild(loan_label);

        document.getElementById('formdiv0').style.display = 'none';
        document.getElementById('formdiv1').style.display = 'block';
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
