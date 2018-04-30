
function loan_show()
{
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";
  for (var i = 0; i <= 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";

    document.getElementById('contact_btn').style.color = 'white';
    document.getElementById('contact_btn').style.backgroundColor = '#F2882F';
    
    
    document.getElementById('edit_btn').style.color = 'white';
    document.getElementById('edit_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('loan_btn').style.color = '#F2882F';
    document.getElementById('loan_btn').style.backgroundColor = 'white';
    
    document.getElementById('pay_btn').style.color = 'white';
    document.getElementById('pay_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('accounts_btn').style.color = 'white';
    document.getElementById('accounts_btn').style.backgroundColor = '#F2882F';
  }


  document.getElementById('container').style.display = 'none';
  document.getElementById('container1').style.display = 'flex';

  var paymentsection = "<h2>Loan</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

  document.getElementById('loanoptbtn1').style.color = '#F2882F' ;
  document.getElementById('loanoptbtn1').style.backgroundColor = 'white'
  document.getElementById('loanoptbtn2').style.color = '#F2882F' ;
  document.getElementById('loanoptbtn2').style.backgroundColor = 'white';

  document.getElementById('container1').innerHTML=" ";
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
    document.getElementById('container1').appendChild(loanoptionbtn1);
  }


  function loanbtn2(){

    var loanoptionbtn2 = document.createElement("input");
    loanoptionbtn2.setAttribute('type', 'button');
    loanoptionbtn2.setAttribute('value', 'Payback');
    loanoptionbtn2.setAttribute('id', 'loanoptbtn2');
    loanoptionbtn2.setAttribute('onclick', 'paybacktrigger()');
    document.getElementById('container1').appendChild(loanoptionbtn2);
  
  }


  function requestTrigger(){
    var request = document.getElementById('formdiv4').style.display = 'none';
    if(request){
      document.getElementById('formdiv4').style.display = 'block';
      document.getElementById('formdiv5').style.display = 'none';

      document.getElementById('loanoptbtn1').style.color = 'white' ;
      document.getElementById('loanoptbtn1').style.backgroundColor = '#F2882F'
      document.getElementById('loanoptbtn2').style.color = '#F2882F' ;
      document.getElementById('loanoptbtn2').style.backgroundColor = 'white';
    }
    else{
  return;  }
  }

  function paybacktrigger(){
    var loan = document.getElementById('formdiv5').style.display = 'none';
    if(loan){
      document.getElementById('formdiv5').style.display = 'block';
      document.getElementById('formdiv4').style.display = 'none';

      document.getElementById('loanoptbtn1').style.color = '#F2882F' ;
      document.getElementById('loanoptbtn1').style.backgroundColor = 'white'
      document.getElementById('loanoptbtn2').style.color = 'white' ;
      document.getElementById('loanoptbtn2').style.backgroundColor = '#F2882F';
    }
    else{
      return;
    }
  }

  function requestformFunction(){
      var sender_exist = null;
      var br = document.createElement('br');
      var br1 = document.createElement('br');
      var br2 = document.createElement('br');
      var br3 = document.createElement('br');
      var br4 = document.createElement('br');

      ///From here for getting account with RESTAPI request

      var url = "http://www.students.oamk.fi/~t7haki01/oamk_bank/index.php/api/Bank/accounts/accountid";
      var jsonData='';
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', url, true);

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {

      jsonData = JSON.parse(xhttp.responseText);


      for(x in jsonData)
      {
        if(jsonData[x].user_id == user_id_global)
        {
          if (sender_exist == null){
          var user_idelement = document.createElement('input');
          user_idelement.id = jsonData[x].user_id;
          user_idelement.name = 'user_id';
          user_idelement.readOnly = true;
          user_idelement.value = jsonData[x].user_id;
          user_idelement.style.display = 'none';
          document.getElementById('requestForm').appendChild(user_idelement);

          var user_account = document.createElement('input');
          user_account.type = 'text';
          user_account.id = 'Account_test'
          user_account.name = 'account_id';
          user_account.readOnly = true;
          user_account.style.display = 'none';
          document.getElementById('requestForm').appendChild(user_account);

          
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
          var user_id_for_loan = document.getElementById('user_id_from_login').value;
          sender_exist = 1;
          }

        var option_sender = document.createElement("option");
        option_sender.value = jsonData[x].Balance;
        option_sender.setAttribute('id', jsonData[x].account_id);
        option_sender.text = jsonData[x].account_id;
        sender.appendChild(option_sender);
        }
      }

    document.getElementById('requestForm').appendChild(br);
    document.getElementById('requestForm').appendChild(br1);

    var balance_lable = document.createElement('label')
    var balance_text = document.createTextNode("Chosen Account Balance:")
    balance_lable.appendChild(balance_text);
    document.getElementById('requestForm').appendChild(balance_lable);

    var user_balance = document.createElement('input');
    user_balance.type = 'text';
    user_balance.id = 'Balance_test';
    user_balance.name = 'Balance_test';
    user_balance.readOnly = true;
    document.getElementById('requestForm').appendChild(user_balance);

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

  var url_loan = "http://www.students.oamk.fi/~t7haki01/oamk_bank/index.php/api/Bank/loans/loan/";

  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url_loan, true)

  var form = document.getElementById('requestForm');
  var formData = new FormData(form);
  console.log(form);

  xhttp.onreadystatechange = function(){

    if(xhttp.readyState == 4 && xhttp.status == 201)
    {
      document.getElementById('formdiv').innerHTML = "Request processed successfully.";
      document.getElementById('formdiv').style.color = 'green';
      document.getElementById('formdiv').style.fontSize = '3vw';
      reload_yes = 1;
    }
    else{
      document.getElementById('formdiv').innerHTML = "Internal error, loan request denied.";
      document.getElementById('formdiv').style.color = 'red';
      document.getElementById('formdiv').style.fontSize = '3vw';
    }

  };
  xhttp.send(formData);
    setTimeout(function(){
    if(reload_yes == 1){

      location.reaload();

    }
  },2000);


}

function request_money2(){

var account = document.getElementById('Account_test').value;

var url_account = "http://www.students.oamk.fi/~t7haki01/oamk_bank/index.php/api/Bank/accounts/accountid/" +account;

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
    document.getElementById('formdiv').innerHTML = 'Request processed successfully.';
    document.getElementById('formdiv').style.display = 'block';
    document.getElementById('formdiv').style.color = 'green';
    document.getElementById('formdiv').style.fontSize = '3vw';
    reload_yes = 1;
  }
  else{
    document.getElementById('formdiv').innerHTML = 'Internal error, loan request denied.';
    document.getElementById('formdiv').style.display = 'block';
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
