function test_get_user()
{
  var url = "http://localhost/oamk_bank/index.php/api/bank/users/id.html";
  var xhttp = new XMLHttpRequest();
     xhttp.open('GET', url, true);
     xhttp.onreadystatechange=function()
     {
       if(xhttp.readyState==4 && xhttp.status==200)
       {
         document.getElementById('test_user').innerHTML=
         xhttp.responseText;
       }
     };
     xhttp.send();
}

function test_get_account()
{
  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid.html";
  var xhttp = new XMLHttpRequest();
     xhttp.open('GET', url, true);
     xhttp.onreadystatechange=function()
     {
       if(xhttp.readyState==4 && xhttp.status==200)
       {
         document.getElementById('test_account').innerHTML=
         xhttp.responseText;
       }
     };
     xhttp.send();
}

function test_account_hide()
{
  document.getElementById('test_user').style.display = "none";
  test_get_account();
  if(document.getElementById('test_account').style.display == 'none')
  document.getElementById('test_account').style.display = 'block';
  else
  document.getElementById('test_account').style.display = 'none';
}

function test_user_hide()
{
  document.getElementById('test_account').style.display = "none";
  test_get_user();
  if(document.getElementById('test_user').style.display == 'none')
  document.getElementById('test_user').style.display = 'block';
  else
  document.getElementById('test_user').style.display = 'none';
}


function send_money_own()
{
  document.getElementById('loading').innerHTML = "loading...";
  document.getElementById('formdiv').style.display = "none";
  document.getElementById('formdiv2').style.display = "none";
  var sender_account = document.getElementById('sender').value;
  var reciever_account = document.getElementById('reciever').value;
  var amount = document.getElementById('amount').value;

  var xhttp = new XMLHttpRequest();

  var url_sender = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/" + sender_account;
  var json_sender='';

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      var sender_balance_before;
      json_sender = JSON.parse(xhttp.responseText);

      sender_balance_before = json_sender[0].Balance;

      var money_limit = Number(json_sender[0].Balance) + Number(json_sender[0].credit);

      if(amount <= money_limit)
      {
        transaction_sender(sender_balance_before);

        other_transaction(reciever_account);
      }
      else
      {
        document.getElementById('formdiv').style.display = "block";
        document.getElementById('formdiv2').style.display = "block";
        document.getElementById('loading').innerHTML = "Money is not enough from the account that you are trying to send.";
      }
    }
  };
  xhttp.open('GET', url_sender, true);
  xhttp.send();
}

function transaction_sender(variable)
{
  //from here put sender's account
    var sender_balance_before = variable;
    var xhttp = new XMLHttpRequest();
    var url_sender = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";
    var money = document.getElementById('amount').value;

    xhttp.open('PUT', url_sender, true);
    var sender_account_after = Number(sender_balance_before) - Number(money) ;
    sender_account_after.toFixed(2);
    var data_sender = {} ;
    data_sender.account_id=document.getElementById('sender').value;
    data_sender.Balance= Number(sender_account_after);
    var jsonData = JSON.stringify(data_sender);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
}


function other_transaction(account)
{
  //from here get reciever's balance
  var url_recieve = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/" + account;
  var xhttp = new XMLHttpRequest();
  var json_recieve='';
  xhttp.onreadystatechange=function()
{
  if(xhttp.readyState==4 && xhttp.status==200)
  {
    var recieve_balance_before ;
    json_recieve = JSON.parse(xhttp.responseText);
    recieve_balance_before = json_recieve[0].Balance;
    recieve_transaction(recieve_balance_before);
  }
};
xhttp.open('GET', url_recieve, true);
xhttp.send();
}

function recieve_transaction(variable)
{
  //from here put reciever's balance
  var recieve_balance_before = variable;

  var money = document.getElementById('amount').value;
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";
  var reciever_account_after = Number(recieve_balance_before) + Number(money) ;
  xhttp.open('PUT', url, true);
  var data = {} ;
  data.account_id=document.getElementById('reciever').value;
  data.Balance= Number(reciever_account_after) ;
  var jsonData = JSON.stringify(data);

  xhttp.onreadystatechange = function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('formdiv').style.display = "block";
      document.getElementById('formdiv2').style.display = "block";
      document.getElementById('loading').innerHTML = "Transaction went succesfully";
    }
    else
    {
      document.getElementById('formdiv').style.display = "block";
      document.getElementById('formdiv2').style.display = "block";
      document.getElementById('loading').innerHTML = "Something went wrong";
    }
  };
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);
}
