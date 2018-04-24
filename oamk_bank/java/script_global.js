
function createListFunction(number){

  var div_name = 'formdiv' ;

  var list = document.createElement('ul');
  list.setAttribute( 'id', 'formlist');
  document.getElementById(div_name + number).appendChild(list);

  var ul = document.createElement('li');
  ul.setAttribute('id', 'ul');
  list.appendChild(ul);
}

function time_greet()
{
  var time = new Date();
  var time_hour = time.getHours() ;

  if( time_hour >=0 && time_hour <12 )
  {
      document.getElementById("time_expression").innerHTML = "Good Morning " ;
  }

  else if( time_hour >=12 && time_hour <18 )
  {
      document.getElementById("time_expression").innerHTML = "Good Afternoon " ;
  }

  else if( time_hour >=18 && time_hour <24 )
  {
      document.getElementById("time_expression").innerHTML = "Good Evening ";
  }

}


function real_time()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('current_time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(real_time, 500);
}

function checkTime(i)
{
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function for_onload()
{
  // time_greet();
  // real_time();
  get_user();
  account_own();
  paymentFunction();
  editCredFunction();
  contactBankFunction();
  loanFunction();

  document.getElementById('pagetitle').innerHTML = " ";
  for (var i = 0; i <= 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }
  document.getElementById('container').style.display = 'none';
  document.getElementById('container1').style.display = 'none';

  setTimeout(function(){ show_accounts(); }, 2000);
}

var user_id_global;

function get_user()
{
  ///because of time difference between javascript(client side) and Rest API(server side)
  // set global value here
 user_id_global = document.getElementById('user_id_from_login').value;

 var id_for_greet = document.getElementById('user_id_from_login').value;
 var url = "http://localhost/oamk_bank/index.php/api/bank/users/id/" + id_for_greet;

 var xhttp = new XMLHttpRequest();
 var json='';
 xhttp.open('GET', url, true);
 xhttp.onreadystatechange=function()
 {
   if(xhttp.readyState==4 && xhttp.status==200)
   {
     json=JSON.parse(xhttp.responseText);
     document.getElementById('user').innerHTML = json[0].firstname + " " + json[0].lastname ;
   }
 };
 xhttp.send();
}

var reload_yes = 0;
var create_new_div = null;
