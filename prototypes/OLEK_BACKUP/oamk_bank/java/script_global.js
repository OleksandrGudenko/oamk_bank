/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("navDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var navDropdown = document.getElementById("navDropdown");
      if (navDropdown.classList.contains('show')) {
        navDropdown.classList.remove('show');
      }
  }
}

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
  time_greet();
  real_time();
  get_user(1);
  account_own();
  paymentFunction();
  editCredFunction();
  contactBankFunction();
  loanFunction();
  document.getElementById('pagetitle').innerHTML = " ";
  for (var i = 0; i < 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }
  document.getElementById('container').style.display="none";
}

function get_user(id)
{
 var url = "http://localhost/oamk_bank/index.php/api/bank/users/id/" + id;
 var xhttp = new XMLHttpRequest();
 var json='';
 xhttp.open('GET', url, true);
 xhttp.onreadystatechange=function()
 {
   if(xhttp.readyState==4 && xhttp.status==200)
   {
     json=JSON.parse(xhttp.responseText);;
     document.getElementById('user').innerHTML = json[0].firstname + " " + json[0].lastname ;
   }
 };
 xhttp.send();
}

var reload_yes = 0;