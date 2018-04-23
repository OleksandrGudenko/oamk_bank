
function payment_show()
{
  document.getElementById('pay_btn').disabled = true;
  document.getElementById('contact_btn').disabled = false;
  document.getElementById('edit_btn').disabled = false;
  document.getElementById('loan_btn').disabled = false;
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";
  for (var i = 0; i < 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
    document.getElementById(name_div).style.display="none";
  }

  document.getElementById('container').style.display="flex";
  var paymentsection = "<h2>Payments</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

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

function paymentbtn2(){

  var paymentoptionbtn2 = document.createElement("input");
  paymentoptionbtn2.setAttribute('type', 'button');
  paymentoptionbtn2.setAttribute('value', 'Payment');
  paymentoptionbtn2.setAttribute('id', 'payoptbtn2');
  paymentoptionbtn2.setAttribute('onclick', 'paymenttrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn2);

}

function paymenttrigger(){
  var payment = document.getElementById('formdiv3').style.display = 'none';
  if(payment){
    document.getElementById('payoptbtn1').disabled = false ;
    document.getElementById('payoptbtn2').disabled = true ;
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

document.getElementById('loading').inner="Loading...";
document.getElementById('loading').style.display="block";
var id_for_payment = document.getElementById('user_id_from_login').value;
var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid";
var jsonData='';
var xhttp = new XMLHttpRequest();
xhttp.open('GET', url, true);

xhttp.onreadystatechange=function()
{
  if(xhttp.readyState==4 && xhttp.status==200)
  {
    jsonData = JSON.parse(xhttp.responseText);

    var label_send = document.createElement("label");
    var send_from = document.createTextNode("From  ");
    label_send.appendChild(send_from);
    document.getElementById('formdiv3').appendChild(label_send);

    var sender = document.createElement("select");
    sender.setAttribute('id', 'sender_payment');
    document.getElementById('formdiv3').appendChild(sender);
    for(x in jsonData)
    {
      if(jsonData[x].user_id == id_for_payment)
      {
      var option_sender = document.createElement("option");
      option_sender.value = jsonData[x].Balance;
      option_sender.setAttribute('id', jsonData[x].account_id);
      option_sender.text = jsonData[x].account_id;
      sender.appendChild(option_sender);
      }
    }

    createListFunction(3);
    var reciever = document.createElement("input");
    reciever.setAttribute('type', 'text');
    reciever.setAttribute('id', 'reciever_payment');
    reciever.setAttribute('placeholder', 'IBAN where money will go');
    document.getElementById('formdiv3').appendChild(reciever);


    createListFunction(3);
    var amount = document.createElement("input");
    amount.setAttribute('type', 'number');
    amount.setAttribute('id', 'amount_payment');
    amount.setAttribute('placeholder', 'amount to pay');
    document.getElementById('formdiv3').appendChild(amount);


    createListFunction(3);
    var sendbtn = document.createElement('input');
    sendbtn.setAttribute('type', 'button');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('value', 'send');
    sendbtn.setAttribute('onclick', 'payment_money()');
    document.getElementById('formdiv3').appendChild(sendbtn);

    document.getElementById('loading').inner=" ";
    document.getElementById('loading').style.display="none";

  }

};
xhttp.send();
}

function payment_money()
{
  document.getElementById('loading').innerHTML = "loading...";
  var sender_account = document.getElementById('sender_transfer').id;
  var reciever_account = document.getElementById('reciever_transfer').id;
  var amount = document.getElementById('amount_transfer').value;

  var xhttp = new XMLHttpRequest();

  var url_sender = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";


  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {

      json_sender = JSON.parse(xhttp.responseText);

      var sender_balance_before = json_sender[0].Balance;

      var money_limit = parseFloat(json_sender[0].Balance) + parseFloat(json_sender[0].credit);

      if(amount <= money_limit)
      {
        payment_sender(sender_balance_before);

        other_payment(reciever_account);
      }
      else
      {
        document.getElementById('formdiv').innerHTML = "Not enough money on the account that you selected.";
        document.getElementById('formdiv').style.color = 'red';
        document.getElementById('formdiv').style.fontSize = '3vw';;
      }
    }
  };
  xhttp.open('GET', url_sender, true);
  xhttp.send();
}

function payment_sender(variable)
{
  //from here put sender's account
    var sender_balance_before = document.getElementById('sender_payment')[document.getElementById('sender_payment').selectedIndex].value;
    var xhttp = new XMLHttpRequest();
    var url_sender = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";
    var money = document.getElementById('amount_payment').value;

    var sender_account_after = parseFloat(sender_balance_before) - parseFloat(money) ;
    sender_account_after.toFixed(2);
    var data_sender = {} ;
    data_sender.account_id = document.getElementById('sender_payment')[document.getElementById('sender_payment').selectedIndex].id;
    data_sender.Balance= Number(sender_account_after);
    var jsonData1 = JSON.stringify(data_sender);

    xhttp.open('PUT', url_sender, true);
    xhttp.onreadystatechange = function()
    {
      if(xhttp.readyState==4 && xhttp.status==201)
      {
        document.getElementById('formdiv').style.display = "block";
        document.getElementById('formdiv').innerHTML = "Transaction went succesfully";
        document.getElementById('formdiv').style.color = 'green';
        document.getElementById('formdiv').style.fontSize = '3vw';;
        reload_yes = 1;
      }
      else
      {
        document.getElementById('formdiv').style.display = "block";
        document.getElementById('formdiv').innerHTML = "Something went wrong";
        document.getElementById('formdiv').style.color = 'red';
        document.getElementById('formdiv').style.fontSize = '3vw';;
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


function other_payment()
{
  //from here get reciever's balance
  var account = document.getElementById('reciever_payment').value;
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
    recieve_payment(recieve_balance_before);
  }
};
xhttp.open('GET', url_recieve, true);
xhttp.send();

}

function recieve_payment(variable)
{
  //from here put reciever's balance
  var recieve_balance_before = variable;

  var money = document.getElementById('amount_payment').value;
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";

  var reciever_account_after = parseFloat(recieve_balance_before) + parseFloat(money) ;

  var data = {} ;
  data.account_id = document.getElementById('reciever_payment').value;
  data.Balance = reciever_account_after.toFixed(2);
  var jsonData = JSON.stringify(data);

  xhttp.open('PUT', url, true);
  xhttp.onreadystatechange = function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('formdiv').style.display = "block";
      document.getElementById('formdiv').innerHTML = "Transaction went succesfully"
      document.getElementById('formdiv').style.color = 'green';
      document.getElementById('formdiv').style.fontSize = '3vw';
      reload_yes = 1;
    }
    else
    {
      document.getElementById('formdiv').style.display = "block";
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

//here is end of function
