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
      user_idelement.style.display = 'none';
      document.getElementById('requestForm').appendChild(user_idelement);

      var user_account = document.createElement('input');
      user_account.type = 'text';
      user_account.id = 'Account_test'
      user_account.name = 'account_id';
      user_account.readOnly = true;
      user_account.style.display = 'none';
      document.getElementById('requestForm').appendChild(user_account);

      var user_balance = document.createElement('input');
      user_balance.type = 'text';
      user_balance.id = 'Balance_test';
      user_balance.name = 'Balance_test';
      user_balance.readOnly = true;
      user_balance.style.display = 'none';
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
      document.getElementById('loading').innerHTML = "Request processed successfully.";
      reload_yes = 1;
    }
    else{
      document.getElementById('loading').innerHTML = "Internal error, loan request denied.";
    }
  
  };
  setTimeout(function(){
    if(reload_yes == 1){
    
      xhttp.send(formData);
    
    }
  },2000);


}

function request_money2(){
var account = document.getElementById('Account_test').value;
// debugger
var url_account = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/" +account;

var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url_account, true)

var loan_a = parseFloat(document.getElementById('amount_loan').value);
var old_b = parseFloat(document.getElementById('Balance_test').value);

var new_balance = loan_a + old_b;  
new_balance = new_balance.toFixed(2);
var data = {};
data.account_id = account;
data.Balance = new_balance;
var jsonData = JSON.stringify(data);
xhttp.onreadystatechange = function(){

  if(xhttp.readyState == 4 && xhttp.status == 201){
    document.getElementById('formdiv').innerHTML = 'Success';
    document.getElementById('formdiv').style.display = 'block';
    reload_yes = 1;
  }
  else{
    document.getElementById('formdiv').innerHTML = 'FAIL';
    document.getElementById('formdiv').style.display = 'block';
  }
};
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);

setTimeout(function(){
  if(reload_yes == 1){
  
      location.reload();

  }
},2000);
console.log(new_balance);
console.log(jsonData);
}





