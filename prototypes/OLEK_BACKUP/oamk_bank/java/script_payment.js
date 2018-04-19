
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

function paymentbtn1(){
  var paymentoptionbtn1 = document.createElement("input");
  paymentoptionbtn1.setAttribute('type', 'button');
  paymentoptionbtn1.setAttribute('value', 'Own Transfer');
  paymentoptionbtn1.setAttribute('id', 'payoptbtn1');
  paymentoptionbtn1.setAttribute('onclick', 'transferTrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn1);
}

function paymentbtn2(){

  var paymentoptionbtn2 = document.createElement("input");
  paymentoptionbtn2.setAttribute('type', 'button');
  paymentoptionbtn2.setAttribute('value', 'Payment');
  paymentoptionbtn2.setAttribute('id', 'payoptbtn2');
  paymentoptionbtn2.setAttribute('onclick', 'paymenttrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn2);

}


function transferTrigger(){
  var transf = document.getElementById('formdiv2').style.display = 'none';
  if(transf){
    document.getElementById('payoptbtn1').disabled = true ;
    document.getElementById('payoptbtn2').disabled = false ;
    document.getElementById('formdiv2').style.display = 'block';
    document.getElementById('formdiv3').style.display = 'none';
  }
  else{
return;  }
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

function trasferformFunction(){

    ///From here for getting account with RESTAPI request
    document.getElementById('formdiv2').innerHTML = " ";
    var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid";
    var jsonData='';
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);

    document.getElementById('loading').inner="Loading...";
    document.getElementById('loading').style.display="block";
xhttp.onreadystatechange=function()
{
  if(xhttp.readyState==4 && xhttp.status==200)
  {
    jsonData = JSON.parse(xhttp.responseText);

    var label_send = document.createElement("label");
    var send_from = document.createTextNode("From  ");
    label_send.appendChild(send_from);
    document.getElementById('formdiv2').appendChild(label_send);

    var sender = document.createElement("select");
    sender.setAttribute('id', 'sender_transfer');
    document.getElementById('formdiv2').appendChild(sender);
    for(x in jsonData)
    {
      if(jsonData[x].user_id == 1)
      {
      var option_sender = document.createElement("option");
      option_sender.value = jsonData[x].account_id;
      option_sender.setAttribute('id', jsonData[x].account_id);
      option_sender.text = jsonData[x].account_id;
      sender.appendChild(option_sender);
      }
    }

    createListFunction(2);
    var label_recieve = document.createElement("label");
    var recieve_to = document.createTextNode("To  ");
    label_recieve.appendChild(recieve_to);
    document.getElementById('formdiv2').appendChild(label_recieve);

    var reciever = document.createElement("select");
    reciever.setAttribute('id', 'reciever_transfer');
    document.getElementById('formdiv2').appendChild(reciever);

    for(x in jsonData)
    {
      if(jsonData[x].user_id == 1)
      {
      var option_reciever = document.createElement("option");
      option_reciever.value = jsonData[x].account_id;
      option_reciever.setAttribute('id', jsonData[x].account_id);
      option_reciever.text = jsonData[x].account_id;
      reciever.appendChild(option_reciever);
      }
    }

    createListFunction(2);

    var amount = document.createElement("input");
    amount.setAttribute('type', 'number');
    amount.setAttribute('id', 'amount_transfer');
    amount.setAttribute('placeholder', 'amount to transfer');
    document.getElementById('formdiv2').appendChild(amount);

    createListFunction(2);
    var  sendbtn = document.createElement('input');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('type', 'button');
    sendbtn.setAttribute('value', 'send');
    sendbtn.setAttribute('onclick', 'send_money_own()');
    document.getElementById('formdiv2').appendChild(sendbtn);

    document.getElementById('loading').inner=" ";
    document.getElementById('loading').style.display="none";

  }
};
xhttp.send();
}//here is end of function

function paymentformFunction(){
  document.getElementById('formdiv3').innerHTML = " ";
//from here for sender account with drop down

document.getElementById('loading').inner="Loading...";
document.getElementById('loading').style.display="block";

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
  if(jsonData[x].user_id == 1)
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
var refnum = document.createElement('input');
refnum.setAttribute('type','number');
refnum.setAttribute('id','refnum');
refnum.setAttribute('placeholder', 'reference number')
document.getElementById('formdiv3').appendChild(refnum);


createListFunction(3);
var sendbtn = document.createElement('input');
sendbtn.setAttribute('type', 'button');
sendbtn.setAttribute('id', 'sendbtn');
sendbtn.setAttribute('value', 'send');
sendbtn.setAttribute('onclick', 'send_money_own()');
sendbtn.innerHTML = 'Proceed';
document.getElementById('formdiv3').appendChild(sendbtn);

document.getElementById('loading').inner=" ";
document.getElementById('loading').style.display="none";

}
};
xhttp.send();

}//here is end of function
