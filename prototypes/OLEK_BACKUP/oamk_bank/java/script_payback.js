


  function paybackformFunction(){
    
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
      your_iban.style.display = 'none';
      document.getElementById('formdiv5').appendChild(your_iban);
      
      createListFunction(5);
      
      var your_id = document.createElement('input');
      your_id.readOnly = true;
      your_id.id = 'user_id_payback';
      your_id.name = 'user_id';
      your_id.style.display = 'none';
      document.getElementById('formdiv5').appendChild(your_id);

      
      createListFunction(5);
  
      var loan_id = document.createElement('input');
      loan_id.readOnly = true;
      loan_id.id = 'loan_id_payback';
      loan_id.name = 'loan_id';
      loan_id.style.display = 'none';
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
      paybackformFunction2();
      createListFunction(5);

      var label_send = document.createElement("label");
      var acc_balance = document.createTextNode("Selected Account Balance:"+" ");
      label_send.appendChild(acc_balance);
      document.getElementById('formdiv5').appendChild(label_send);

      var your_balance = document.createElement('input');
      your_balance.readOnly = true;
      your_balance.id = 'account_payback_balance';
      your_balance.name = 'Balance';
      document.getElementById('formdiv5').appendChild(your_balance);

      createListFunction(5);
      
      var label_loan = document.createElement('label');
      var label_loan_text = document.createTextNode("Loan Amount Left:"+" ");
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
  var send_from = document.createTextNode("Select account:"+" ");
  label_send.appendChild(send_from);
  document.getElementById('formdiv5').insertBefore(label_send, document.getElementById('formdiv5').children[10]);

  var sender = document.createElement("select");
  sender.setAttribute('id', 'loan_from');
  sender.setAttribute('onchange', 'right_loan_amount()')
  document.getElementById('formdiv5').insertBefore(sender, document.getElementById('formdiv5').children[11]);

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

  var balance_remain = parseFloat(document.getElementById('account_payback_balance').value);
  var how_much_paid = parseFloat(document.getElementById('payback_amount').value);

  var new_balance = balance_remain - how_much_paid;  
  new_balance = new_balance.toFixed(2);
  var data = {};
  data.account_id = account;
  data.Balance = new_balance;
  var jsonData = JSON.stringify(data);

  var loan_old = parseFloat(document.getElementById('loan_money').value);
  var amount_paid = parseFloat(document.getElementById('payback_amount').value);

  var loan_new = loan_old - amount_paid;

  if(loan_new > 0){
  xhttp.onreadystatechange = function(){

    if(xhttp.readyState == 4 && xhttp.status == 201){
      document.getElementById('formdiv').innerHTML = 'Part of a loan paid off successfully';
      document.getElementById('formdiv').style.display = 'block';
      reload_yes = 1;
    }
    else{
      document.getElementById('formdiv').innerHTML = 'Internal error please try later.';
      document.getElementById('formdiv').style.display = 'block';
    }
  };
 

}
else if(loan_new = 0){

      if(xhttp.readyState == 4 && xhttp.status == 201){
        document.getElementById('formdiv').innerHTML = 'Loan was successfully paid off.'
        document.getElementById('formdiv').style.display = 'block';
        delete_loan();
        reload_yes = 1;
      }
      else{
          document.getElementById('formdiv').innerHTML = "Internal error please try later.";
          document.getElementById('formdiv').style.display = 'block';
      }
  }
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);

setTimeout(function(){
  if(reload_yes == 1){
  
      location.reload();

  }
},3000);

  console.log(jsonData);
  console.log(loan_new);
      
}

function payback_money2(){

var account = document.getElementById('account_payback').value;
var user = document.getElementById('user_id_payback').value;
var loanid = document.getElementById('loan_id_payback').value;

var url_account = "http://localhost/oamk_bank/index.php/api/bank/loans/loan/" +loanid;

var xhttp = new XMLHttpRequest();
xhttp.open('PUT', url_account, true)

var loan_old = parseFloat(document.getElementById('loan_money').value);
var amount_payed = parseFloat(document.getElementById('payback_amount').value);

var loan_new = loan_old - amount_payed;  
loan_new = loan_new.toFixed(2);
var data = {};
data.loan_id = loanid;
data.amount = loan_new;
var jsonData = JSON.stringify(data);

if(loan_new > 0){

  xhttp.onreadystatechange = function(){

    if(xhttp.readyState == 4 && xhttp.status == 201){
      document.getElementById('formdiv').innerHTML = 'Part of a loan paid off successfully.';
      document.getElementById('formdiv').style.display = 'block';
      reload_yes = 1;
    }
    else{
       document.getElementById('formdiv').innerHTML = 'Internal error, could not update loan information.';
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
}
else if(loan_new == 0){
  
  delete_loan();
  
}
  else{
  document.getElementById('formdiv').innerHTML = 'Type in valid amount';
  document.getElementById('formdiv').style.display = 'block';
}

// else if(amount_payed > document.getElementById('loan_from')[document.getElementById('loan_from').selectedIndex].id){
  //   document.getElementById('formdiv').innerHTML = 'Type in valid amount';
  //   document.getElementById('formdiv').style.display = 'block';
  // }

console.log(jsonData);

}


function delete_loan(){
  var delete_loan_id  = document.getElementById('loan_id_payback').value;
  var url = "http://localhost/oamk_bank/index.php/api/bank/loans/loan_id/" + delete_loan_id;
  var xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', url,true)

  xhttp.onreadystatechange = function(){
      if(xhttp.readyState == 4 && xhttp.status == 200){
        document.getElementById('formdiv').innerHTML = 'Loan was successfully paid off.'
        document.getElementById('formdiv').style.display = 'block';
        reload_yes = 1;
      }
      else{
          document.getElementById('formdiv').innerHTML = "Internal error, please try again later.";
          document.getElementById('formdiv').style.display = 'block';
      }
  }
  xhttp.send();

  setTimeout(function(){
    if(reload_yes == 1){
    
        location.reload();
  
    }
  },2000);
}