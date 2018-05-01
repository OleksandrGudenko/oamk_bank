

function paymentbtn1(){
  var paymentoptionbtn1 = document.createElement("input");
  paymentoptionbtn1.setAttribute('type', 'button');
  paymentoptionbtn1.setAttribute('value', 'Own Transfer');
  paymentoptionbtn1.setAttribute('id', 'payoptbtn1');
  paymentoptionbtn1.setAttribute('onclick', 'transferTrigger(); onchangeValue()');
  document.getElementById('container').appendChild(paymentoptionbtn1);
}

function transferTrigger(){
  var transf = document.getElementById('formdiv2').style.display = 'none';
  if(transf){
    document.getElementById('payoptbtn1').style.color = 'white' ;
    document.getElementById('payoptbtn1').style.backgroundColor = '#F2882F'
    document.getElementById('payoptbtn2').style.color = '#F2882F' ;
    document.getElementById('payoptbtn2').style.backgroundColor = 'white';
    document.getElementById('formdiv2').style.display = 'block';
    document.getElementById('formdiv3').style.display = 'none';
  }
  else{
return;  }
}


function trasferformFunction(){

  var id_for_own_trans = document.getElementById('user_id_from_login').value;
  ///From here for getting account with RESTAPI request
  document.getElementById('formdiv2').innerHTML = " ";
  var url = "http://www.oamkbank.com/oamk_bank/index.php/api/Bank/accounts/accountid";
  var jsonData='';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);

xhttp.onreadystatechange=function()
{
if(xhttp.readyState==4 && xhttp.status==200)
{
  jsonData = JSON.parse(xhttp.responseText);
    
  createListFunction(2);
  var id_own = document.createElement("input");
  id_own.setAttribute('name', 'user_id');
  id_own.setAttribute('style', 'display:none');
  id_own.setAttribute('value', id_for_own_trans);
  document.getElementById('formdiv2').appendChild(id_own);

  createListFunction(2);
  var id_own = document.createElement("input");
  id_own.setAttribute('name', 'user_id');
  id_own.setAttribute('style', 'display:none');
  id_own.setAttribute('value', id_for_own_trans);
  document.getElementById('formdiv2').appendChild(id_own);

  var label_send = document.createElement("label");
  var send_from = document.createTextNode("From  ");
  label_send.appendChild(send_from);
  document.getElementById('formdiv2').appendChild(label_send);

  var sender = document.createElement("select");
  sender.setAttribute('id', 'sender_transfer');
  sender.setAttribute('onchange', 'onchangeValue()');
  document.getElementById('formdiv2').appendChild(sender);
  for(x in jsonData)
  {
    if(jsonData[x].user_id == id_for_own_trans)
    {
      var option_sender = document.createElement("option");
      option_sender.value = jsonData[x].account_id;
      option_sender.setAttribute('id', jsonData[x].account_id);
      option_sender.text = jsonData[x].account_id;
      sender.appendChild(option_sender);
    }
  }

  createListFunction(2);
  var sender_own = document.createElement("input");
  sender_own.setAttribute('type', 'text');
  sender_own.setAttribute('id', 'sender_own');
  sender_own.setAttribute('style', 'display:none');
  sender_own.setAttribute('name', 'sender');
  document.getElementById('formdiv2').appendChild(sender_own);

  createListFunction(2);
  var label_recieve = document.createElement("label");
  var recieve_to = document.createTextNode("To  ");
  label_recieve.appendChild(recieve_to);
  document.getElementById('formdiv2').appendChild(label_recieve);

  var reciever = document.createElement("select");
  reciever.setAttribute('id', 'reciever_transfer');
  reciever.setAttribute('onchange', 'onchangeValue()');
  document.getElementById('formdiv2').appendChild(reciever);

  for(x in jsonData)
  {
    if(jsonData[x].user_id == id_for_own_trans)
    {
      var option_reciever = document.createElement("option");
      option_reciever.value = jsonData[x].account_id;
      option_reciever.setAttribute('id', jsonData[x].account_id);
      option_reciever.text = jsonData[x].account_id;
      option_sender.selected = true;
      reciever.appendChild(option_reciever);
    }
  }

  createListFunction(2);
  var receiver_own = document.createElement("input");
  receiver_own.setAttribute('type', 'text');
  receiver_own.setAttribute('id', 'receiver_own');
  receiver_own.setAttribute('style', 'display:none');
  receiver_own.setAttribute('name', 'receiver');
  document.getElementById('formdiv2').appendChild(receiver_own);

  createListFunction(2);
  var amount = document.createElement("input");
  amount.setAttribute('type', 'number');
  amount.setAttribute('id', 'amount_transfer');
  amount.setAttribute('name', 'amount');
  amount.setAttribute('min', 0);
  amount.setAttribute('placeholder', 'amount to transfer');
  document.getElementById('formdiv2').appendChild(amount);

  createListFunction(2);
  var reference = document.createElement("input");
  reference.setAttribute('type', 'text');
  reference.setAttribute('id', 'reference_own');
  reference.setAttribute('name', 'reference');
  reference.setAttribute('value', 'Own Sending');
  reference.setAttribute('style', 'display:none');
  document.getElementById('formdiv2').appendChild(reference);

  createListFunction(2);
  var  sendbtn = document.createElement('input');
  sendbtn.setAttribute('id', 'sendbtn');
  sendbtn.setAttribute('type', 'button');
  sendbtn.setAttribute('value', 'send');
  sendbtn.setAttribute('onclick', 'send_money_own(); ownsendingSubmit()');
  document.getElementById('formdiv2').appendChild(sendbtn);

}
};
xhttp.send();
}//here is end of function

function send_money_own()
{
  document.getElementById('formdiv2').style.display = "none";
  var sender_account = document.getElementById('sender_transfer').value;
  var reciever_account = document.getElementById('reciever_transfer').value;
  var amount = document.getElementById('amount_transfer').value;
  var json_sender = '';
  var xhttp = new XMLHttpRequest();

  var url_sender = "http://www.oamkbank.com/oamk_bank/index.php/api/Bank/accounts/accountid/" + sender_account;

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {

      json_sender = JSON.parse(xhttp.responseText);

      var sender_balance_before = json_sender[0].Balance;

      var money_limit = parseFloat(json_sender[0].Balance) + parseFloat(json_sender[0].credit);

      if(amount <= money_limit)
      {
        transaction_sender(sender_account, sender_balance_before);
        ownsendingSubmit();
        other_transaction(reciever_account);
      }
      else
      {
        document.getElementById('formdiv').style.display = 'block';
        document.getElementById('formdiv').style.color = 'red';
        document.getElementById('formdiv').style.fontSize = '3vw';
        document.getElementById('formdiv').innerHTML = "Not enough money on the account.";
      }
    }
  };
  xhttp.open('GET', url_sender, true);
  xhttp.send();
}

function transaction_sender(account, balance)
{
  //from here put sender's account
    var sender_balance_before = balance;
    var xhttp = new XMLHttpRequest();
    var url_sender = "http://www.oamkbank.com/oamk_bank/index.php/api/Bank/accounts/accountid/";
    var money = document.getElementById('amount_transfer').value;

    var sender_account_after = parseFloat(sender_balance_before) - parseFloat(money) ;
    sender_account_after.toFixed(2);
    var data_sender = {} ;
    data_sender.account_id = account;
    data_sender.Balance= Number(sender_account_after);
    var jsonData1 = JSON.stringify(data_sender);

    xhttp.open('PUT', url_sender, true);
    xhttp.onreadystatechange = function()
    {
      if(xhttp.readyState==4 && xhttp.status==201)
      {
        document.getElementById('formdiv').innerHTML = 'Transaction went succesfully';
        document.getElementById('formdiv').style.color = 'green';
        document.getElementById('formdiv').style.fontSize = '3vw';
        reload_yes = 1;
      }
      else
      {
        document.getElementById('formdiv').innerHTML = "Something went wrong";
        document.getElementById('formdiv').style.color = 'red';
        document.getElementById('formdiv').style.fontSize = '3vw';
      }
    };
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData1);

    setTimeout(function(){
      if(reload_yes == 1){

        location.reload();

      }
    },2000);
}


function other_transaction(account)
{
  //from here get reciever's balance
  var url_recieve = "http://www.oamkbank.com/oamk_bank/index.php/api/Bank/accounts/accountid/" + account;
  var xhttp = new XMLHttpRequest();
  var json_recieve='';
  xhttp.onreadystatechange=function()
{
  if(xhttp.readyState==4 && xhttp.status==200)
  {
    json_recieve = JSON.parse(xhttp.responseText);
    var recieve_balance_before = json_recieve[0].Balance;
    recieve_transaction(account, recieve_balance_before);
  }
};
xhttp.open('GET', url_recieve, true);
xhttp.send();
}

function recieve_transaction(account, balance)
{
  //from here put reciever's balance
//even though unnecessary part but variable defining is performed for making flow understandable to other partners
  var recieve_balance_before = balance;

  var money = document.getElementById('amount_transfer').value;
  var xhttp = new XMLHttpRequest();
  var url = "http://www.oamkbank.com/oamk_bank/index.php/api/Bank/accounts/accountid/";

  var reciever_account_after = parseFloat(recieve_balance_before) + parseFloat(money) ;

  var data = {} ;
  data.account_id = account;
  data.Balance = reciever_account_after.toFixed(2);
  var jsonData = JSON.stringify(data);

  xhttp.open('PUT', url, true);
  xhttp.onreadystatechange = function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('formdiv').innerHTML = 'Transaction went succesfully';
      document.getElementById('formdiv').style.color = 'green';
      document.getElementById('formdiv').style.fontSize = '3vw';
      reload_yes = 1;
   }
    else
    {
      document.getElementById('formdiv').innerHTML = "Something went wrong";
      document.getElementById('formdiv').style.color = 'red';
      document.getElementById('formdiv').style.fontSize = '3vw';
    }
  };

xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);

setTimeout(function(){
  if(reload_yes == 1){

    location.reload();

  }
},2000);

}
