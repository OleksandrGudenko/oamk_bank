function loan_show()
{
  document.getElementById('pay_btn').disabled = false;
  document.getElementById('contact_btn').disabled = false;
  document.getElementById('edit_btn').disabled = false;
  document.getElementById('loan_btn').disabled = true;
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";
  for (var i = 0; i < 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }

  document.getElementById('container').style.display="flex";
  var paymentsection = "<h2>Loan</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

  document.getElementById('container').innerHTML=" ";
  loanbtn1();
  loanbtn2();
}


function loanFunction(){
    loanbtn1();
    loanbtn2();
    requestformFunction();
    paybackformFunction();
    paybackformFunction2()
  }
  
  function loanbtn1(){
    var loanoptionbtn1 = document.createElement("input");
    loanoptionbtn1.setAttribute('type', 'button');
    loanoptionbtn1.setAttribute('value', 'Request');
    loanoptionbtn1.setAttribute('id', 'loanoptbtn1');
    loanoptionbtn1.setAttribute('onclick', 'requestTrigger()');
    document.getElementById('container').appendChild(loanoptionbtn1);
  }
  
  
  function loanbtn2(){
  
    var loanoptionbtn2 = document.createElement("input");
    loanoptionbtn2.setAttribute('type', 'button');
    loanoptionbtn2.setAttribute('value', 'Payback');
    loanoptionbtn2.setAttribute('id', 'loanoptbtn2');
    loanoptionbtn2.setAttribute('onclick', 'paybacktrigger()');
    document.getElementById('container').appendChild(loanoptionbtn2);
  
  }
  
  
  function requestTrigger(){
    var request = document.getElementById('formdiv4').style.display = 'none';
    if(request){
      document.getElementById('formdiv4').style.display = 'block';
      document.getElementById('formdiv5').style.display = 'none';
    }
    else{
  return;  }
  }
  
  function paybacktrigger(){
    var loan = document.getElementById('formdiv5').style.display = 'none';
    if(loan){
      document.getElementById('formdiv5').style.display = 'block';
      document.getElementById('formdiv4').style.display = 'none';
    }
    else{
      return;
    }
  }
  
  function requestformFunction(){

      var br = document.createElement('br');
      var br2 = document.createElement('br');
      var br3 = document.createElement('br');
      var br4 = document.createElement('br');
      
      ///From here for getting account with RESTAPI request
      document.getElementById('requestForm').innerHTML = " ";
      var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid";
      var jsonData='';
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', url, true);
  
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      
      jsonData = JSON.parse(xhttp.responseText);
      
      var user_idelement = document.createElement('input');
      user_idelement.id = jsonData[0].user_id;
      user_idelement.name = 'user_id';
      user_idelement.readOnly = true;
      user_idelement.value = jsonData[0].user_id;
      user_idelement.style.display = 'block';
      document.getElementById('requestForm').appendChild(user_idelement);

      var user_account = document.createElement('input');
      user_account.type = 'text';
      user_account.id = 'Account_test'
      user_account.name = 'account_id';
      user_account.readOnly = true;
      user_account.style.display = 'block';
      document.getElementById('requestForm').appendChild(user_account);

      var user_balance = document.createElement('input');
      user_balance.type = 'text';
      user_balance.id = 'Balance_test';
      user_balance.name = 'Balance_test';
      user_balance.readOnly = true;
      // user_balance.value = jsonData[0].Balance;
      user_balance.style.display = 'block';
      document.getElementById('requestForm').appendChild(user_balance);

      var label_send = document.createElement("label");
      var send_from = document.createTextNode("Select account:  ");
      label_send.appendChild(send_from);
      
      document.getElementById('requestForm').appendChild(label_send);
  
      var sender = document.createElement("select");
      sender.setAttribute('onchange', 'right_balance()');
      sender.setAttribute('id', 'loan_to');
      document.getElementById('requestForm').appendChild(sender);

      var option_sender = document.createElement("option");
      option_sender.text = "select from here";
      option_sender.disabled = true;
      option_sender.selected = true;
      sender.appendChild(option_sender);
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
      
    document.getElementById('requestForm').appendChild(br);
    document.getElementById('requestForm').appendChild(br2);
    document.getElementById('requestForm').appendChild(br3);

    var amount_loan = document.createElement("input");
    amount_loan.setAttribute('type', 'number');
    amount_loan.setAttribute('name', 'amount');
    amount_loan.setAttribute( 'id', 'amount_loan');
    amount_loan.setAttribute('placeholder', 'amount to request');
    document.getElementById('requestForm').appendChild(amount_loan);
    
    document.getElementById('requestForm').appendChild(br4);

    var  sendbtn = document.createElement('input');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('type', 'button');
    sendbtn.setAttribute('value', 'send');
    sendbtn.setAttribute('onclick', 'request_money(),request_money2()');
    document.getElementById('requestForm').appendChild(sendbtn);

    document.getElementById('loading').inner=" ";
    document.getElementById('loading').style.display="none";

    }
  };
  xhttp.send();
 } 

 function right_balance(){
  var balance = document.getElementById('Balance_test');
  var account = document.getElementById('Account_test');

  var account_balance = document.getElementById('loan_to');
  var selectedNode = account_balance[account_balance.selectedIndex].value;

  var account_id = document.getElementById('loan_to');
  var selectedNode2 = account_id[account_id.selectedIndex].id;
  
  balance.value = selectedNode;
  account.value = selectedNode2;
 }

function request_money()
{
  document.getElementById('loading').innerHTML = "loading...";
  document.getElementById('formdiv').style.display = "none";
  // document.getElementById('formdiv2').style.display = "none";
  
  var url_loan = "http://localhost/oamk_bank/index.php/api/bank/loans/loan/";
  
// debugger

  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url_loan, true)

  var form = document.getElementById('requestForm');
  var formData = new FormData(form);

  for(var value of formData.values()){
    console.log(value);
  }


  xhttp.onreadystatechange = function(){

    if(xhttp.readyState == 4 && xhttp.status == 201)
    {
      document.getElementById('loading').innerHTML = "SUCCSESS...";
    }
    else{
      document.getElementById('loading').innerHTML = "FAIL...";
    }
  
  };
  document.getElementById('formdiv').innerHTML = "";
  xhttp.send(formData);

}

function request_money2(){
var account = document.getElementById('Account_test').value;
// debugger
var url_account = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/" +account;

var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url_account, true)

var loan_a = parseInt(document.getElementById('amount_loan').value);
var old_b = parseInt(document.getElementById('Balance_test').value);

var new_balance = loan_a + old_b;  

var data = {};
data.account_id = account;
data.Balance = new_balance;
var jsonData = JSON.stringify(data);
xhttp.onreadystatechange = function(){

  if(xhttp.readyState == 4 && xhttp.status == 201){
    document.getElementById('formdiv').innerHTML = 'Succsess';
  }
  else{
    document.getElementById('formdiv').innerHTML = 'FAIL';
  }
};
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);
console.log(jsonData);
}








  function paybackformFunction(){
    document.getElementById('formdiv5').innerHTML = " ";
    document.getElementById('loading').style.display = "block";
    document.getElementById('loading').innerHTML = "Wait...";

  //from here for sender account with drop down

  var url = "http://localhost/oamk_bank/index.php/api/bank/loans/loan";
  var jsonData='';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      jsonData = JSON.parse(xhttp.responseText);

      var your_iban = document.createElement('input');
      your_iban.readOnly = true;
      your_iban.id = 'account_payback';
      your_iban.name = 'account_id';
      document.getElementById('formdiv5').appendChild(your_iban);

      
      createListFunction(5);
      
      var your_id = document.createElement('input');
      your_id.readOnly = true;
      your_id.id = 'user_id_payback';
      your_id.name = 'user_id';
      document.getElementById('formdiv5').appendChild(your_id);

      
      createListFunction(5);
  
      var loan_id = document.createElement('input');
      loan_id.readOnly = true;
      loan_id.id = 'loan_id_payback';
      loan_id.name = 'loan_id';
      document.getElementById('formdiv5').appendChild(loan_id);

      
      createListFunction(5);

      var label_send = document.createElement("label");
      var send_to = document.createTextNode("Select loan ID:  ");
      label_send.appendChild(send_to);
      document.getElementById('formdiv5').appendChild(label_send);

      var reciever = document.createElement('select');
      reciever.setAttribute('id', 'loan_reciever');
      reciever.setAttribute('onchange', 'right_loan_amount()')
      document.getElementById('formdiv5').appendChild(reciever);
      
      var option_reciever = document.createElement("option");
      option_reciever.text = "select from here";
      option_reciever.disabled = true;
      option_reciever.selected = true;
      reciever.appendChild(option_reciever);

      for(x in jsonData)
      {
        if(jsonData[x].user_id == 1)
        {
        var option_reciever = document.createElement("option");
        option_reciever.value = jsonData[x].amount;
        option_reciever.setAttribute('id', jsonData[x].user_id);
        option_reciever.text = jsonData[x].loan_id;
        reciever.appendChild(option_reciever);
        }
      }
      
      createListFunction(5);

    
      var label_send = document.createElement("label");
      var acc_balance = document.createTextNode("Selected Account Balance:  ");
      label_send.appendChild(acc_balance);
      document.getElementById('formdiv5').appendChild(label_send);

      var your_balance = document.createElement('input');
      your_balance.readOnly = true;
      your_balance.id = 'account_payback_balance';
      your_balance.name = 'Balance';
      document.getElementById('formdiv5').appendChild(your_balance);

      createListFunction(5);
      
      var label_loan = document.createElement('label');
      var label_loan_text = document.createTextNode("Loan Amount Left:  ");
      label_loan.appendChild(label_loan_text);
      document.getElementById('formdiv5').appendChild(label_loan);

      var loan_money = document.createElement('input');
      loan_money.readOnly = true;
      loan_money.id = 'loan_money';
      loan_money.text = 'amount';
      document.getElementById('formdiv5').appendChild(loan_money);  
      
      createListFunction(5);

      var amount = document.createElement("input");
      amount.setAttribute('type', 'number');
      amount.setAttribute('id', 'payback_amount');
      amount.setAttribute('placeholder', 'amount to payback');
      document.getElementById('formdiv5').appendChild(amount);

      createListFunction(5);

      var  sendbtn = document.createElement('input');
      sendbtn.setAttribute('id', 'sendbtn');
      sendbtn.setAttribute('type', 'button');
      sendbtn.setAttribute('value', 'send');
      sendbtn.setAttribute('onclick', 'payback_money(),payback_money2()');
      document.getElementById('formdiv5').appendChild(sendbtn);
  
      document.getElementById('loading').inner=" ";
      document.getElementById('loading').style.display="none";
  
    }
  };
  xhttp.send();
}//here is end of function

function paybackformFunction2(){

  // document.getElementById('requestForm').innerHTML = " ";
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
  var send_from = document.createTextNode("Select account:  ");
  label_send.appendChild(send_from);
  document.getElementById('formdiv5').appendChild(label_send);

  var sender = document.createElement("select");
  sender.setAttribute('id', 'loan_from');
  sender.setAttribute('onchange', 'right_loan_amount()')
  document.getElementById('formdiv5').appendChild(sender);

  var option_sender = document.createElement("option");
  option_sender.text = "select from here";
  option_sender.disabled = true;
  option_sender.selected = true;
  sender.appendChild(option_sender);
  for(x in jsonData)
  {
    if(jsonData[x].user_id == 1)
    {
    var option_sender = document.createElement("option");
    option_sender.value = jsonData[x].account_id;
    option_sender.setAttribute('id',jsonData[x].Balance);
    option_sender.text = jsonData[x].account_id;
    sender.appendChild(option_sender);
    }
  }

}
};
xhttp.send();
}

function right_loan_amount(){
  var amount = document.getElementById('loan_money');
  var account = document.getElementById('account_payback');
  var userid = document.getElementById('user_id_payback');
  var loanid = document.getElementById('loan_id_payback');
  
  var loan_amount = document.getElementById('loan_reciever');
  var selectedNode = loan_amount[loan_amount.selectedIndex].value;
  var selectedNode2 = loan_amount[loan_amount.selectedIndex].id;
  var selectedNode3 = loan_amount[loan_amount.selectedIndex].text;
  
  var account_id = document.getElementById('loan_from');
  var selectedNode4 = account_id[account_id.selectedIndex].value;
  
  var balance_acc = document.getElementById('account_payback_balance');
  var selectedNode5 = account_id[account_id.selectedIndex].id;
  
  amount.value = selectedNode;
  userid.value = selectedNode2;
  loanid.value = selectedNode3;
  account.value = selectedNode4;
  balance_acc.value = selectedNode5;
 }

function payback_money(){
      
  var account = document.getElementById('account_payback').value;
  // debugger
  var url_account = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/" +account;

  var xhttp = new XMLHttpRequest();
  xhttp.open('PUT', url_account, true)

  var balance_remain = parseInt(document.getElementById('account_payback_balance').value);
  var how_much_payed = parseInt(document.getElementById('payback_amount').value);

  var new_balance = balance_remain - how_much_payed;  

  var data = {};
  data.account_id = account;
  data.Balance = new_balance;
  var jsonData = JSON.stringify(data);
  xhttp.onreadystatechange = function(){

    if(xhttp.readyState == 4 && xhttp.status == 201){
      document.getElementById('formdiv').innerHTML = 'Succsess';
    }
    else{
      document.getElementById('formdiv').innerHTML = 'FAIL';
    }
  };
  xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhttp.send(jsonData);
  console.log(jsonData);

      
}

function payback_money2(){

var account = document.getElementById('account_payback').value;
var user = document.getElementById('user_id_payback').value;
var loanid = document.getElementById('loan_id_payback').value;
// debugger
var url_account = "http://localhost/oamk_bank/index.php/api/bank/loans/loan/" +loanid;

var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url_account, true)

var loan_old = parseInt(document.getElementById('loan_money').value);
var amount_payed = parseInt(document.getElementById('payback_amount').value);

var loan_new = loan_old - amount_payed;  

var data = {};
data.loan_id = loanid;
data.amount = loan_new;
var jsonData = JSON.stringify(data);

if(loan_new > 0){

  xhttp.onreadystatechange = function(){

    if(xhttp.readyState == 4 && xhttp.status == 201){
      document.getElementById('formdiv').innerHTML = 'Succsess';
    }
    else{
      document.getElementById('formdiv').innerHTML = 'FAIL';
    }
  };
  xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhttp.send(jsonData);

}
else {
  document.getElementById('formdiv').innerHTML = 'Type in valid amount';
}

if(loan_new == 0){
  //here should be loan delete function**
  
  document.getElementById('formdiv').innerHTML = 'Loan was successfully paid off.'
}
else{
  document.getElementById('formdiv').innerHTML = 'Oops something went wrong, contact us through "Contact Bank" tab.'
}
console.log(jsonData);

}
