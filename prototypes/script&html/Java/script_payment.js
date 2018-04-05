
function paymentFunction(){
  document.getElementById('pay_btn').disabled = true;
  document.getElementById('contact_btn').disabled = false;
  document.getElementById('edit_btn').disabled = false;
  document.getElementById('loading').style.display = "block";
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";
  for (var i = 0; i < 7; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }

  document.getElementById('container').innerHTML = " ";
  document.getElementById('container').style.display="flex";
  var paymentsection = "<h2>Payments</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

  paymentbtn1();
  paymentbtn2();
  trasferformFunction();
  paymentformFunction();
}

function paymentbtn1(){
  var paymentoptionbtn1 = document.createElement("input");
  paymentoptionbtn1.setAttribute('type', 'button');
  paymentoptionbtn1.setAttribute('value', 'Own Transfer');
  paymentoptionbtn1.setAttribute('id', 'payoptbtn');
  paymentoptionbtn1.setAttribute('onclick', 'transferTrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn1);
}

var br = document.createElement('br');

function paymentbtn2(){

  var paymentoptionbtn2 = document.createElement("input");
  paymentoptionbtn2.setAttribute('type', 'button');
  paymentoptionbtn2.setAttribute('value', 'Payment');
  paymentoptionbtn2.setAttribute('id', 'payoptbtn');
  paymentoptionbtn2.setAttribute('onclick', 'paymenttrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn2);

}


function transferTrigger(){
  var transf = document.getElementById('formdiv1').style.display = 'none';
  if(transf){
    document.getElementById('formdiv1').style.display = 'block';
    document.getElementById('formdiv2').style.display = 'none';
  }
  else{
return;  }
}

function paymenttrigger(){
  var payment = document.getElementById('formdiv2').style.display = 'none';
  if(payment){
    document.getElementById('formdiv2').style.display = 'block';
    document.getElementById('formdiv1').style.display = 'none';
  }
  else{
    return;
  }
}

function trasferformFunction(){

    ///From here for getting account with RESTAPI request
    document.getElementById('formdiv1').innerHTML = " ";
    document.getElementById('loading').style.display = "block";
    document.getElementById('loading').innerHTML = "Wait...";
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
    document.getElementById('formdiv1').appendChild(label_send);

    var sender = document.createElement("select");
    sender.setAttribute('id', 'sender');
    document.getElementById('formdiv1').appendChild(sender);
    for(x in jsonData)
    {
      if(jsonData[x].user_id == 1)
      {
      var option_sender = document.createElement("option");
      option_sender.value = jsonData[x].account_id;
      option_sender.setAttribute('id', "send" + jsonData[x].account_id);
      option_sender.text = jsonData[x].account_id;
      sender.appendChild(option_sender);
      }
    }

    createListFunction(1);
    var label_recieve = document.createElement("label");
    var recieve_to = document.createTextNode("To  ");
    label_recieve.appendChild(recieve_to);
    document.getElementById('formdiv1').appendChild(label_recieve);

    var reciever = document.createElement("select");
    reciever.setAttribute('id', 'reciever');
    document.getElementById('formdiv1').appendChild(reciever);

    for(x in jsonData)
    {
      if(jsonData[x].user_id == 1)
      {
      var option_reciever = document.createElement("option");
      option_reciever.value = jsonData[x].account_id;
      option_reciever.setAttribute('id', "recieve" + jsonData[x].account_id);
      option_reciever.text = jsonData[x].account_id;
      reciever.appendChild(option_reciever);
      }
    }

    createListFunction(1);

    var amount = document.createElement("input");
    amount.setAttribute('type', 'number');
    amount.setAttribute('id', 'amount');
    amount.setAttribute('placeholder', 'amount to transfer');
    document.getElementById('formdiv1').appendChild(amount);

    createListFunction(1);
    var  sendbtn = document.createElement('input');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('type', 'button');
    sendbtn.setAttribute('value', 'send');
    sendbtn.setAttribute('onclick', 'send_money_own()');
    document.getElementById('formdiv1').appendChild(sendbtn);
    document.getElementById('loading').innerHTML = " ";
    document.getElementById('loading').style.display = "none";
  }
};
xhttp.send();
}//here is end of function

function paymentformFunction(){
  document.getElementById('loading').style.display = "block";
  document.getElementById('loading').innerHTML = "Wait...";
  document.getElementById('formdiv2').innerHTML = " ";
//from here for sender account with drop down

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
document.getElementById('formdiv2').appendChild(label_send);

var sender = document.createElement("select");
sender.setAttribute('id', 'sender');
document.getElementById('formdiv2').appendChild(sender);
for(x in jsonData)
{
  if(jsonData[x].user_id == 1)
  {
  var option_sender = document.createElement("option");
  option_sender.value = jsonData[x].account_id;
  option_sender.setAttribute('id', "send" + jsonData[x].account_id);
  option_sender.text = jsonData[x].account_id;
  sender.appendChild(option_sender);
  }
}

createListFunction(2);
var reciever = document.createElement("input");
reciever.setAttribute('type', 'text');
reciever.setAttribute('id', 'reciever');
reciever.setAttribute('placeholder', 'IBAN where money will go');
document.getElementById('formdiv2').appendChild(reciever);


createListFunction(2);
var amount = document.createElement("input");
amount.setAttribute('type', 'number');
amount.setAttribute('id', 'amount');
amount.setAttribute('placeholder', 'amount to transfer');
document.getElementById('formdiv2').appendChild(amount);


createListFunction(2);
var refnum = document.createElement('input');
refnum.setAttribute('type','number');
refnum.setAttribute('id','refnum');
refnum.setAttribute('placeholder', 'reference number')
document.getElementById('formdiv2').appendChild(refnum);


createListFunction(2);
var sendbtn = document.createElement('input');
sendbtn.setAttribute('type', 'button');
sendbtn.setAttribute('id', 'sendbtn');
sendbtn.setAttribute('value', 'send');
sendbtn.setAttribute('onclick', 'send_money_own()');
sendbtn.innerHTML = 'Proceed';
document.getElementById('formdiv2').appendChild(sendbtn);
document.getElementById('loading').innerHTML = " ";
}
};
xhttp.send();

}//here is end of function
