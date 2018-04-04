function createListFunction(){
  var list = document.createElement('ul');
  list.setAttribute( 'id', 'formlist');
  document.getElementById('formdiv1').appendChild(list);

  var ul = document.createElement('li');
  ul.setAttribute('id', 'ul');
  list.appendChild(ul);
}

function createListFunction2(){
  var list = document.createElement('ul');
  list.setAttribute( 'id', 'formlist');
  document.getElementById('formdiv2').appendChild(list);

  var ul = document.createElement('li');
  ul.setAttribute('id', 'ul');
  list.appendChild(ul);
}

function createListFunction3(){
  var list = document.createElement('ul');
  list.setAttribute( 'id', 'formlist');
  document.getElementById('formdiv3').appendChild(list);

  var ul = document.createElement('li');
  ul.setAttribute('id', 'ul');
  list.appendChild(ul);
}

function createListFunction4()
{
  var list = document.createElement('ul');
  list.setAttribute( 'id', 'formlist');
  document.getElementById('formdiv4').appendChild(list);

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
