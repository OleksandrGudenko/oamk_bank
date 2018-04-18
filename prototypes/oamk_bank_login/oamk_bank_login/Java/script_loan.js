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
      document.getElementById('requestForm').innerHTML = " ";
      var url = "http://localhost/oamk_bank/index.php/api/bank/loans/loan";
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
      user_idelement.name = 'id';
      user_idelement.readOnly = true;
      user_idelement.value = jsonData[0].user_id;
      user_idelement.style.display = 'none';
      document.getElementById('requestForm').appendChild(user_idelement);

      var label_send = document.createElement("label");
      var send_from = document.createTextNode("Select account:  ");
      label_send.appendChild(send_from);
      document.getElementById('requestForm').appendChild(label_send);
  
      var sender = document.createElement("select");
      sender.setAttribute('id', 'sender');
      document.getElementById('requestForm').appendChild(sender);
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
      
    document.getElementById('requestForm').appendChild(br);
    document.getElementById('requestForm').appendChild(br2);
    document.getElementById('requestForm').appendChild(br3);

    var amount = document.createElement("input");
    amount.setAttribute('type', 'number');
    amount.setAttribute('name', 'amount');
    amount.setAttribute( 'id', 'amount');
    amount.setAttribute('placeholder', 'amount to request');
    document.getElementById('requestForm').appendChild(amount);
    
    document.getElementById('requestForm').appendChild(br4);

    var  sendbtn = document.createElement('input');
    sendbtn.setAttribute('id', 'sendbtn');
    sendbtn.setAttribute('type', 'button');
    sendbtn.setAttribute('value', 'send');
    sendbtn.setAttribute('onclick', 'request_money()');
    document.getElementById('requestForm').appendChild(sendbtn);

    document.getElementById('loading').inner=" ";
    document.getElementById('loading').style.display="none";

  
    }
  };
  xhttp.send();
 } 

 
function request_money()
{
  document.getElementById('loading').innerHTML = "loading...";
  document.getElementById('formdiv').style.display = "none";
  // document.getElementById('formdiv2').style.display = "none";
  
  var url_loan = "http://localhost/oamk_bank/index.php/api/bank/loans/loan/" +1;
  
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
  
  }
  document.getElementById('formdiv').innerHTML = "";
  xhttp.send(formData);

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
  
      var label_send = document.createElement("label");
      var send_from = document.createTextNode("Select account:  ");
      label_send.appendChild(send_from);
      document.getElementById('formdiv5').appendChild(label_send);
  
      var sender = document.createElement("select");
      sender.setAttribute('id', 'sender');
      document.getElementById('formdiv5').appendChild(sender);
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

      createListFunction(5);

      var amount = document.createElement("input");
      amount.setAttribute('type', 'number');
      amount.setAttribute('id', 'amount');
      amount.setAttribute('placeholder', 'amount to request');
      document.getElementById('formdiv5').appendChild(amount);

      createListFunction(5);

      var label_send = document.createElement("label");
      var send_to = document.createTextNode("Select loan ID:  ");
      label_send.appendChild(send_to);
      document.getElementById('formdiv5').appendChild(label_send);

      var reciever = document.createElement('select');
      reciever.setAttribute('id', 'reciever');
      document.getElementById('formdiv5').appendChild(reciever);

      for(x in jsonData)
      {
        if(jsonData[x].user_id == 1)
        {
        var option_reciever = document.createElement("option");
        option_reciever.value = jsonData[x].loan_id;
        option_reciever.setAttribute('id', "send" + jsonData[x].loan_id);
        option_reciever.text = jsonData[x].loan_id;
        reciever.appendChild(option_reciever);
        }
      }
  
      createListFunction(5);

      var  sendbtn = document.createElement('input');
      sendbtn.setAttribute('id', 'sendbtn');
      sendbtn.setAttribute('type', 'button');
      sendbtn.setAttribute('value', 'send');
      sendbtn.setAttribute('onclick', 'send_money_own()');
      document.getElementById('formdiv5').appendChild(sendbtn);
  
      document.getElementById('loading').inner=" ";
      document.getElementById('loading').style.display="none";
  
    }
  };
  xhttp.send();
}//here is end of function




