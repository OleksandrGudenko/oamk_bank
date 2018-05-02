
function payment_show()
{
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";
  for (var i = 0; i <= 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
    document.getElementById(name_div).style.display = 'none';


    document.getElementById('contact_btn').style.color = 'white';
    document.getElementById('contact_btn').style.backgroundColor = '#F2882F';


    document.getElementById('edit_btn').style.color = 'white';
    document.getElementById('edit_btn').style.backgroundColor = '#F2882F';

    document.getElementById('loan_btn').style.color = 'white';
    document.getElementById('loan_btn').style.backgroundColor = '#F2882F';

    document.getElementById('pay_btn').style.color = '#F2882F';
    document.getElementById('pay_btn').style.backgroundColor = 'white';

    document.getElementById('accounts_btn').style.color = 'white';
    document.getElementById('accounts_btn').style.backgroundColor = '#F2882F';
  }


  document.getElementById('container').style.display = 'flex';
  document.getElementById('container1').style.display = 'none';

  var paymentsection = "<h2>Payments</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

  document.getElementById('payoptbtn1').style.color = '#F2882F' ;
  document.getElementById('payoptbtn1').style.backgroundColor = 'white'
  document.getElementById('payoptbtn2').style.color = '#F2882F' ;
  document.getElementById('payoptbtn2').style.backgroundColor = 'white';

  document.getElementById("container").innerHTML = " ";
  paymentbtn1();
  paymentbtn2();
}

function paymentFunction(){
  paymentbtn1();
  paymentbtn2();
  trasferformFunction();
  paymentformFunction();
}

function hide_all_divs(){
  for (var i = 0; i <= 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
    document.getElementById(name_div).style.display = 'none';


    document.getElementById('contact_btn').style.color = 'white';
    document.getElementById('contact_btn').style.backgroundColor = '#F2882F';


    document.getElementById('edit_btn').style.color = 'white';
    document.getElementById('edit_btn').style.backgroundColor = '#F2882F';

    document.getElementById('loan_btn').style.color = 'white';
    document.getElementById('loan_btn').style.backgroundColor = '#F2882F';

    document.getElementById('pay_btn').style.color = '#F2882F';
    document.getElementById('pay_btn').style.backgroundColor = 'white';

    document.getElementById('accounts_btn').style.color = 'white';
    document.getElementById('accounts_btn').style.backgroundColor = '#F2882F';
  }

}

function paymentbtn2(){

  var paymentoptionbtn2 = document.createElement("input");
  paymentoptionbtn2.setAttribute('type', 'button');
  paymentoptionbtn2.setAttribute('value', 'Payment');
  paymentoptionbtn2.setAttribute('id', 'payoptbtn2');
  paymentoptionbtn2.setAttribute('onclick', ' hide_all_divs(); paymenttrigger(); onchangeValue()');
  document.getElementById('container').appendChild(paymentoptionbtn2);

}

function paymenttrigger(){
  var payment = document.getElementById('formdiv3').style.display = 'none';
  if(payment){
    document.getElementById('payoptbtn1').style.color = '#F2882F' ;
    document.getElementById('payoptbtn1').style.backgroundColor = 'white';
    document.getElementById('payoptbtn2').style.color = 'white' ;
    document.getElementById('payoptbtn2').style.backgroundColor = '#F2882F'
    document.getElementById('formdiv3').style.display = 'block';
    document.getElementById('formdiv2').style.display = 'none';
  }
  else{
    return;
  }
}

function paymentformFunction(){
document.getElementById('formdiv3').innerHTML = " ";
//from here for sender account with drop down

var id_for_payment = document.getElementById('user_id_from_login').value;
var url = "http://localhost/oamk_bank/index.php/api/Bank/accounts/accountid";
var jsonData='';
var xhttp = new XMLHttpRequest();
xhttp.open('GET', url, true);

xhttp.onreadystatechange=function()
{
  if(xhttp.readyState==4 && xhttp.status==200)
  {
    jsonData = JSON.parse(xhttp.responseText);

    createListFunction(3);
    var id_other = document.createElement("input");
    id_other.setAttribute('value', id_for_payment);
    id_other.setAttribute('name', 'user_id');
    id_other.setAttribute('style', 'display:none');
    document.getElementById('formdiv3').appendChild(id_other);
    
    createListFunction(3);
    var receiver_id_other = document.createElement("input");
    receiver_id_other.setAttribute('id', 'receiver_id_other')
    receiver_id_other.setAttribute('style', 'display:none');
    document.getElementById('formdiv3').appendChild(receiver_id_other);
    
    var label_send = document.createElement("label");
    var send_from = document.createTextNode("From  ");
    label_send.appendChild(send_from);
    document.getElementById('formdiv3').appendChild(label_send);

    var sender = document.createElement("select");
    sender.setAttribute('id', 'sender_payment');
    sender.setAttribute('onchange', 'onchangeValue()');
    document.getElementById('formdiv3').appendChild(sender);
    for(x in jsonData)
    {
      if(jsonData[x].user_id == id_for_payment)
      {
      var option_sender = document.createElement("option");
      option_sender.value = jsonData[x].account_id;
      option_sender.setAttribute('id', jsonData[x].Balance);
      option_sender.text = jsonData[x].account_id;
      sender.appendChild(option_sender);
      }
    }
    createListFunction(3);
    var sender_other = document.createElement("input");
    sender_other.setAttribute('type', 'text');
    sender_other.setAttribute('id', 'sender_other');
    sender_other.setAttribute('name', 'sender');
    sender_other.setAttribute('style', 'display:none');
    document.getElementById('formdiv3').appendChild(sender_other);
    
    createListFunction(3);

    var curr_balance = document.createElement('input');
    curr_balance.setAttribute('type', 'text');
    curr_balance.setAttribute('id', 'curr_balance_payment');
    curr_balance.setAttribute('readonly', 'readonly');
    curr_balance.setAttribute('placeholder', 'selected account balance');
    document.getElementById('formdiv3').appendChild(curr_balance);

    createListFunction(3);
    var reciever = document.createElement("input");
    reciever.setAttribute('type', 'text');
    reciever.setAttribute('id', 'reciever_payment');
    reciever.setAttribute('name', 'receiver');
    reciever.setAttribute('placeholder', 'IBAN where money will go');
    document.getElementById('formdiv3').appendChild(reciever);

    createListFunction(3);
    var amount = document.createElement("input");
    amount.setAttribute('type', 'number');
    amount.setAttribute('id', 'amount_payment');
    amount.setAttribute('name', 'amount');
    amount.setAttribute('min', 0);
    amount.setAttribute('step', 0.01);
    amount.setAttribute('placeholder', 'amount to pay');
    document.getElementById('formdiv3').appendChild(amount);
    
    createListFunction(3);
    var reference = document.createElement("input");
    reference.setAttribute('type', 'text');
    reference.setAttribute('id', 'other_reference');
    reference.setAttribute('placeholder','Reference Number/ Message')
    reference.setAttribute('name', 'reference');
    document.getElementById('formdiv3').appendChild(reference);

    createListFunction(3);
    var sendbtn = document.createElement('input');
    sendbtn.setAttribute('type', 'submit');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('value', 'send');
    document.getElementById('formdiv3').appendChild(sendbtn);
  }

};
xhttp.send();
}

function payment_money()
{
  document.getElementById('formdiv3').style.display = "none";
  var sender_account = document.getElementById('sender_payment').value;
  var reciever_account = document.getElementById('reciever_payment').value;
  var amount = document.getElementById('amount_payment').value;

  var xhttp = new XMLHttpRequest();

  var url_sender = "http://localhost/oamk_bank/index.php/api/Bank/accounts/accountid/" + sender_account;

  var json_sender = '';

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {

      json_sender = JSON.parse(xhttp.responseText);

      var sender_balance_before = json_sender[0].Balance;

      var money_limit = parseFloat(json_sender[0].Balance) + parseFloat(json_sender[0].credit);

      if(amount <= money_limit)
      {
        payment_sender(sender_account, sender_balance_before);
        othersendingSubmit();
        other_payment(reciever_account);
      }
      else
      {
        document.getElementById('formdiv').style.display = 'block';
        document.getElementById('formdiv').innerHTML = "Not enough money on the account that you selected.";
        document.getElementById('formdiv').style.color = 'red';
        document.getElementById('formdiv').style.fontSize = '3vw';;
      }
    }
  };
  xhttp.open('GET', url_sender, true);
  xhttp.send();
}

function payment_sender(account, balance)
{
  //from here put sender's account
    var sender_balance_before = balance;
    var xhttp = new XMLHttpRequest();
    var url_sender = "http://localhost/oamk_bank/index.php/api/Bank/accounts/accountid/";
    var money = document.getElementById('amount_payment').value;

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
        document.getElementById('formdiv').innerHTML = "Transaction went succesfully";
        document.getElementById('formdiv').style.color = 'green';
        document.getElementById('formdiv').style.fontSize = '3vw';
        document.getElementById('formdiv').style.display = "block";
        reload_yes = 1;
      }
      else
      {
        document.getElementById('formdiv').innerHTML = "Something went wrong";
        document.getElementById('formdiv').style.color = 'red';
        document.getElementById('formdiv').style.fontSize = '3vw';
        document.getElementById('formdiv').style.display = "block";
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


function other_payment(account)
{
  //from here get reciever's balance
  var url_recieve = "http://localhost/oamk_bank/index.php/api/Bank/accounts/accountid/" + account;
  var xhttp = new XMLHttpRequest();
  var json_recieve='';
  xhttp.onreadystatechange=function()
{
  if(xhttp.readyState==4 && xhttp.status==200)
  {
    var recieve_balance_before ;
    json_recieve = JSON.parse(xhttp.responseText);
    recieve_balance_before = json_recieve[0].Balance;
    recieve_payment(account, recieve_balance_before);
    var id = json_recieve[0].user_id;
    receiver_othersendingSubmit(id);
  }
};
xhttp.open('GET', url_recieve, true);
xhttp.send();

}

function recieve_payment(account, balance)
{
  //from here put reciever's balance
  var recieve_balance_before = balance;

  var money = document.getElementById('amount_payment').value;
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost/oamk_bank/index.php/api/Bank/accounts/accountid/";

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
      document.getElementById('formdiv').innerHTML = "Transaction went succesfully"
      document.getElementById('formdiv').style.color = 'green';
      document.getElementById('formdiv').style.fontSize = '3vw';
      document.getElementById('formdiv').style.display = "block";
      reload_yes = 1;
    }
    else
    {
      document.getElementById('formdiv').innerHTML = "Something went wrong";
      document.getElementById('formdiv').style.color = 'red';
      document.getElementById('formdiv').style.fontSize = '3vw';
      document.getElementById('formdiv').style.display = "block";
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

//here is end of function
