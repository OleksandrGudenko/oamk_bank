


function GetUsers()
{
      var url = "http://localhost/oamk_bank/index.php/api/bank/users/id.html";

      var xhttp = new XMLHttpRequest();
  		xhttp.open('GET', url, true);
      xhttp.onreadystatechange=function()
      {
        if(xhttp.readyState==4 && xhttp.status==200)
        {
          document.getElementById('results').innerHTML=
          xhttp.responseText;
        }
      };
  		xhttp.send();
}

function AddUser()
{
  var url = "http://localhost/Test_bank_rest_api/index.php/api/test/users";
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url, true);
  var form = document.getElementById('UserForm');
  var formData = new FormData(form);

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('results').innerHTML = "User added succesfully";
    }
    else
    {
        document.getElementById('results').innerHTML = "Something went wrong";
    }
  };
    xhttp.send(formData);
}


function GetAccount()
{
  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid.html";

  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      document.getElementById('results').innerHTML=
      xhttp.responseText;
    }
  };
  xhttp.send();
}


function test(id)
{
  document.getElementById('test14').value = id;
  var url_test_before = "http://localhost/Test_bank_rest_api/index.php/api/test/accounts/idaccount/" + id;
  var xhttp = new XMLHttpRequest();
  var json_to='';
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      var to_balance_before = new Array();
      json_to = JSON.parse(xhttp.responseText);
      document.getElementById('test4').value = json_to[0].balance;
      to_balance_before.push(json_to[0].balance);
      to_balance_before.push(json_to[0].iduser);
      to_balance_before.push(json_to[0].credit);
      to_balance_before.push(json_to[0].loan);
      test321(to_balance_before);
    }
  };
  xhttp.open('GET', url_test_before, true);
  xhttp.send();
}


function test_account()
{
  var xhttp = new XMLHttpRequest();
  var from_account = document.getElementById('idaccount1').value;
  var to_account = document.getElementById('idaccount2').value;
document.getElementById('test13').value = to_account;
  var url_test_after = "http://localhost/Test_bank_rest_api/index.php/api/test/accounts/idaccount/" + from_account;
  var json_from='';
  var limit_money = document.getElementById('amount').value;
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      var from_balance_before = new Array();
      json_from = JSON.parse(xhttp.responseText);
      document.getElementById('test3').value = json_from[0].balance;
      from_balance_before.push(json_from[0].balance);
      from_balance_before.push(json_from[0].iduser);
      from_balance_before.push(json_from[0].credit);
      from_balance_before.push(json_from[0].loan);

      var test_limit = parseInt(json_from[0].balance) + parseInt(json_from[0].credit);

      if(limit_money <= test_limit && parseInt(json_from[0].balance) - parseInt(json_from[0].credit) >= -100)
      {
        test123(from_balance_before);

        test(to_account);
      }
      else
      {
        document.getElementById('results').innerHTML = "You can't send more money than you have";
      }
    }
  };
  xhttp.open('GET', url_test_after, true);
  xhttp.send();

}


function test321(value)
{
  var to_balance_before = value;
  //for testing array
  // document.getElementById('test6').value = to_balance_before;
  var money = document.getElementById('amount').value;
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost/Test_bank_rest_api/index.php/api/test/accounts/idaccount.html";
  var to_account_cal = Number(to_balance_before[0]) + Number(money) ;
  xhttp.open('PUT', url, true);
  var data = {} ;
  data.idaccount=document.getElementById('idaccount2').value;
  data.iduser=to_balance_before[1];
  data.balance= Number(to_account_cal) ;
  data.credit=to_balance_before[2];
  data.loan=to_balance_before[3];
  var jsonData = JSON.stringify(data);

  xhttp.onreadystatechange = function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('results').innerHTML = "Transaction went succesfully";
    }
    else
    {
      document.getElementById('results').innerHTML = "Something went wrong";
    }
  };

xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send(jsonData);
}

function test123(value)
{
    var from_balance_before = value;
    //for testing array
    // document.getElementById('test5').value = from_balance_before;
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/Test_bank_rest_api/index.php/api/test/accounts/idaccount.html";
    var money = document.getElementById('amount').value;


  xhttp.open('PUT', url, true);
  var from_account_cal = Number(from_balance_before[0]) - Number(money) ;
  var data_2 = {} ;
  data_2.idaccount=parseInt(document.getElementById('idaccount1').value);
  data_2.iduser=from_balance_before[1];
  data_2.credit=from_balance_before[2];
  data_2.loan=from_balance_before[3];
  data_2.balance= Number(from_account_cal);
  var jsonData_2 = JSON.stringify(data_2);
  xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhttp.send(jsonData_2);
}

function account_gene()
{

  var result_array = "FI";

  var fun_a = Math.random() * ( 99 - 10 + 1 ) + 10 ;
  var fun_b = Math.floor(fun_a) ;
  result_array = result_array + fun_b + "100104";


for(i=0; i<8; i++)
{
  var fun_a = Math.random() * ( 9 - 0 + 0 ) + 0 ;
  var fun_b = Math.floor(fun_a) ;
  result_array = result_array + fun_b;
}


  document.getElementById('test3').value = result_array;

  var url = "http://localhost/Test_bank_rest_api/index.php/api/test/accounts/idaccount";

  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData='';
  var data = [];

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      jsonData = JSON.parse(xhttp.responseText);
      for(x in jsonData)
      {
        data.push(jsonData[x].idaccount);
      }
      if(data.indexOf(result_array) == -1)
      {
        document.getElementById('test4').value = data ;
        document.getElementById('test_account').innerHTML = result_array ;
        document.getElementById('test_account2').innerHTML = "account number valid";
        addAccount(result_array);
      }

      else
      {
        document.getElementById('test_account2').innerHTML = "Already exist";
        document.getElementById('test_account').innerHTML = result_array ;
      }
    }
  };
  xhttp.send();
}


function addAccount(value)
{
  // document.getElementsByName('idaccount').value = value;
  // document.getElementById('test6').value = document.getElementsByName('idaccount').value;
  var url = "http://localhost/Test_bank_rest_api/index.php/api/test/accounts/idaccount/";
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url, true);
  var form = document.getElementById('test_form');
  var formData = new FormData(form);
  document.getElementById('test6').value = value;
  formData.set('idaccount', value);

  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==201)
    {
      document.getElementById('test_account4').innerHTML = "account created succesfully";
    }
    else
    {
        document.getElementById('test_account4').innerHTML = "Something went wrong";
    }
  };
    xhttp.send(formData);
}

