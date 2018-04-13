
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("navDropdown").classList.toggle("show");
}

function account_own()
{
  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid/";
  var xhttp = new XMLHttpRequest();
  var jsonData ='';
     xhttp.open('GET', url, true);
     xhttp.onreadystatechange=function()
     {
       if(xhttp.readyState==4 && xhttp.status==200)
       {
        jsonData = JSON.parse(xhttp.responseText);
         for(x in jsonData)
         {

           if(jsonData[x].user_id == 1)
             {
             var li_account = document.createElement("LI");

             var li_button = document.createElement("input");
             li_button.setAttribute('type', 'button');
             li_button.setAttribute('id', 'li_button');
             li_button.setAttribute('value', jsonData[x].account_id);
             li_account.appendChild(li_button);
             document.getElementById('account_ul').appendChild(li_account);
             }
         }
       }
     };
     xhttp.send();
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

var br = document.createElement('br');


function paymentbtn1(){
  document.getElementById('result').innerHTML = " ";
  document.getElementById('formdiv3').innerHTML = ' ';
  document.getElementById('formdiv3').style.display = 'none';
  var paymentoptionbtn1 = document.createElement("input");
  paymentoptionbtn1.setAttribute('type', 'button');
  paymentoptionbtn1.setAttribute('value', 'Own Transfer');
  paymentoptionbtn1.setAttribute('id', 'payoptbtn');
  paymentoptionbtn1.setAttribute('onclick', 'transferTrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn1);
 // paymentoptionbtn1.addEventListener('click', false);
}

var br = document.createElement('br');



function paymentbtn2(){
var btndivexist = document.getElementById('formdiv');
var btndivempty = document.getElementById('formdiv').innerHTML === " ";
 if (!btndivempty && !btndivexist){
  return;
}
 else{
  var paymentoptionbtn2 = document.createElement("input");
  paymentoptionbtn2.setAttribute('type', 'button');
  paymentoptionbtn2.setAttribute('value', 'Payment');
  paymentoptionbtn2.setAttribute('id', 'payoptbtn');
  paymentoptionbtn2.setAttribute('onclick', 'paymenttrigger()');
  document.getElementById('container').appendChild(paymentoptionbtn2);
}
}

var btncheck = 0;

function transferTrigger(){
  var payment = document.getElementById('formdiv2').style.display = 'none';
  var transf = document.getElementById('formdiv1').style.display = 'none';
  if(transf){
    document.getElementById('formdiv1').style.display = 'block';
    document.getElementById('formdiv2').style.display = 'none';
  }
  else{
return;  }
}

function paymenttrigger(){
  var payment = document.getElementById('formdiv2').style.display = 'none';
  if(payment){
    document.getElementById('formdiv2').style.display = 'block';
    document.getElementById('formdiv1').style.display = 'none';
  }
  else{
    return;
  }
}



function paymentFunction(){
  document.getElementById('container').innerHTML = " ";
  document.getElementById('container').style.display="block";
  document.getElementById('loading').style.display="block";
  // document.getElementById('formdiv1').style.display = "none";
  // document.getElementById('formdiv2').style.display = "none";
  var paymentsection = "<h2>Payments</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

  paymentbtn1();
  paymentbtn2();

  //
  // if(btncheck==0)
  // {
  trasferformFunction();
  paymentformFunction();
//   }
// else {
// return;
// }
  // btncheck = 1;
  // document.getElementById('formdiv').style.display = "block";
}

function loanFunction(){

  document.getElementById('container').innerHTML = " ";
  var loansection = "<h2>Loan</h2>";
  var loanstuff = "Curabitur porttitor metus ac vehicula lacinia. Curabitur dignissim ut nisi nec maximus. Pellentesque volutpat sodales lacus, eu rutrum justo tincidunt vitae. Fusce ultricies mauris et ligula volutpat, vel mollis massa fermentum. Nam mollis lorem eu mauris volutpat, id aliquet dui luctus. Praesent non lectus congue, rhoncus mauris a, molestie tellus. Pellentesque in nunc felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum nunc sed purus dignissim rhoncus. Nunc efficitur facilisis dolor, in mollis elit dignissim eget. Nulla et massa ut sem bibendum egestas sed vel nulla. Quisque porttitor neque at arcu faucibus consequat. Phasellus sit amet lacus et sem pellentesque suscipit eu eu leo. Vestibulum non nisi vel eros venenatis porttitor nec sit amet orci. Nulla facilisi. Nam efficitur lorem sit amet est rhoncus cursus.";
  document.getElementById("pagetitle").innerHTML = loansection;
  document.getElementById('container').innerHTML = loanstuff;
  document.getElementById('formdiv').style.display = "none";
}
