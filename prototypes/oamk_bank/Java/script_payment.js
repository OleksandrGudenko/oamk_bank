function trasferformFunction(){
  // if(btncheck == 0 || btncheck == 2)
  // {

    for (var i = 0; i < 7; i++)
    {
      var name_div = "formdiv" ;
      document.getElementById(name_div + i).style.display="none";
    }

    document.getElementById('formdiv1').innerHTML = " ";
    document.getElementById('formdiv1').style.display = "block";
    document.getElementById('loading').innerHTML = "Loading...";


    ///From here for getting account with RESTAPI request
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

    createListFunction();
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

    createListFunction();

    var amount = document.createElement("input");
    amount.setAttribute('type', 'number');
    amount.setAttribute('id', 'amount');
    amount.setAttribute('placeholder', 'amount to transfer');
    document.getElementById('formdiv1').appendChild(amount);

    createListFunction();
    var  sendbtn = document.createElement('input');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('type', 'button');
    sendbtn.setAttribute('value', 'send');
    sendbtn.setAttribute('onclick', 'send_money_own()');
    document.getElementById('formdiv1').appendChild(sendbtn);
    document.getElementById('loading').innerHTML = " ";
  }
};
xhttp.send();
// btncheck = 1;
//   }
//     else
//     {
//       return;
//     }
}//here is end of function

function paymentformFunction(){
  // if(btncheck == 0 || btncheck == 1){

  for (var i = 0; i < 7; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }

  document.getElementById('formdiv2').innerHTML = " ";
  document.getElementById('formdiv2').style.display = "block";
  document.getElementById('loading').innerHTML = "Loading...";

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

createListFunction2();
var reciever = document.createElement("input");
reciever.setAttribute('type', 'text');
reciever.setAttribute('id', 'reciever');
reciever.setAttribute('placeholder', 'IBAN where money will go');
document.getElementById('formdiv2').appendChild(reciever);


createListFunction2();
var amount = document.createElement("input");
amount.setAttribute('type', 'number');
amount.setAttribute('id', 'amount');
amount.setAttribute('placeholder', 'amount to transfer');
document.getElementById('formdiv2').appendChild(amount);


createListFunction2();
var refnum = document.createElement('input');
refnum.setAttribute('type','number');
refnum.setAttribute('id','refnum');
refnum.setAttribute('placeholder', 'reference number')
document.getElementById('formdiv2').appendChild(refnum);


createListFunction2();
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
btncheck = 2;
xhttp.send();
// }
// else
// {
//   return;
// }
}//here is end of function
