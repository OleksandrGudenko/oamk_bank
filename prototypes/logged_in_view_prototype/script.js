
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

var br = document.createElement('br');


function paymentbtn1(){
  var paymentoptionbtn1 = document.createElement("input");
  paymentoptionbtn1.setAttribute('type', 'button');
  paymentoptionbtn1.setAttribute('value', 'Own Transfer');
  paymentoptionbtn1.setAttribute('id', 'payoptbtn');
  paymentoptionbtn1.setAttribute('onclick', 'trasferformFunction()');
  document.getElementById('container').appendChild(paymentoptionbtn1);
 // paymentoptionbtn1.addEventListener('click', false);
}


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
  paymentoptionbtn2.setAttribute('onclick', 'paymentformFunction()');
  document.getElementById('container').appendChild(paymentoptionbtn2);
}
}

function trasferformFunction(){
  var brele = document.getElementById('formdiv');

  document.getElementById('formdiv').innerHTML = " ";
  var sender = document.createElement("input");
  sender.setAttribute('type', 'text');
  sender.setAttribute('id', 'sender')
  sender.setAttribute('placeholder', 'your bank account')
  document.getElementById('formdiv').appendChild(sender);

  var reciever = document.createElement("input");
  reciever.setAttribute('type', 'text');
  reciever.setAttribute('id', 'reciever');
  reciever.setAttribute('placeholder', 'IBAN where money will go');
  document.getElementById('formdiv').appendChild(reciever);

  var amount = document.createElement("input");
  amount.setAttribute('type', 'number');
  amount.setAttribute('id', 'amount');
  amount.setAttribute('placeholder', 'amount to transfer');
  document.getElementById('formdiv').appendChild(amount);

  var sendbtn = document.createElement('input');
  sendbtn.setAttribute('type', 'button');
  sendbtn.setAttribute('id', 'sendbtn');
  sendbtn.setAttribute('value', 'send');
  sendbtn.innerHTML = 'Proceed';
  document.getElementById('formdiv').appendChild(sendbtn);

  fodiv.insertBefore(br, reciever.childNodes[0]);
}

function paymentformFunction(){
  document.getElementById('formdiv').innerHTML = " ";
  var sender = document.createElement("input");
  sender.setAttribute('type', 'text');
  sender.setAttribute('id', 'sender')
  sender.setAttribute('placeholder', 'your bank account')
  document.getElementById('formdiv').appendChild(sender);



  var reciever = document.createElement("input");
  reciever.setAttribute('type', 'text');
  reciever.setAttribute('id', 'reciever');
  reciever.setAttribute('placeholder', 'IBAN where money will go');
  document.getElementById('formdiv').appendChild(reciever);



  var amount = document.createElement("input");
  amount.setAttribute('type', 'number');
  amount.setAttribute('id', 'amount');
  amount.setAttribute('placeholder', 'amount to transfer');
  document.getElementById('formdiv').appendChild(amount);


  
  var refnum = document.createElement('input');
  refnum.setAttribute('type','number');
  refnum.setAttribute('id','refnum');
  refnum.setAttribute('placeholder', 'reference number')
  document.getElementById('formdiv').appendChild(refnum);



  var sendbtn = document.createElement('input');
  sendbtn.setAttribute('type', 'button');
  sendbtn.setAttribute('id', 'sendbtn');
  sendbtn.setAttribute('value', 'send');
  sendbtn.innerHTML = 'Proceed';
  document.getElementById('formdiv').appendChild(sendbtn);
} 

function paymentFunction(){
  document.getElementById('container').innerHTML = " ";

  document.getElementById('formdiv').innerHTML = " ";


  var paymentsection = "<h2>Payments</h2>";
  document.getElementById("pagetitle").innerHTML = paymentsection;

  paymentbtn1();
  paymentbtn2();

  document.getElementById('formdiv').style.display = "block";
}

function loanFunction(){

  document.getElementById('container').innerHTML = " ";
  var loansection = "<h2>Loan</h2>";
  var loanstuff = "Curabitur porttitor metus ac vehicula lacinia. Curabitur dignissim ut nisi nec maximus. Pellentesque volutpat sodales lacus, eu rutrum justo tincidunt vitae. Fusce ultricies mauris et ligula volutpat, vel mollis massa fermentum. Nam mollis lorem eu mauris volutpat, id aliquet dui luctus. Praesent non lectus congue, rhoncus mauris a, molestie tellus. Pellentesque in nunc felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum nunc sed purus dignissim rhoncus. Nunc efficitur facilisis dolor, in mollis elit dignissim eget. Nulla et massa ut sem bibendum egestas sed vel nulla. Quisque porttitor neque at arcu faucibus consequat. Phasellus sit amet lacus et sem pellentesque suscipit eu eu leo. Vestibulum non nisi vel eros venenatis porttitor nec sit amet orci. Nulla facilisi. Nam efficitur lorem sit amet est rhoncus cursus.";
  document.getElementById("pagetitle").innerHTML = loansection;
  document.getElementById('container').innerHTML = loanstuff;
  document.getElementById('formdiv').style.display = "none";
}

function editCredFunction(){

  document.getElementById('container').innerHTML = " ";


  var editCredsection = "<h2>Edit Credentials</h2>";
  var editCredstuff = "Vestibulum pharetra eget est a fringilla. Morbi eget eros ullamcorper leo venenatis feugiat nec ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras posuere lectus neque, quis viverra purus convallis vitae. Vestibulum vel erat molestie, semper eros non, pulvinar ipsum. Suspendisse vel nunc sollicitudin, vehicula justo ac, aliquam risus. Cras ipsum odio, ultricies nec egestas vel, interdum at arcu. Maecenas viverra gravida leo, nec tempus purus rutrum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu nunc eget est feugiat vulputate vel eget mi. Mauris eu nunc ullamcorper, bibendum nulla vitae, elementum arcu. Etiam quis quam sit amet turpis commodo congue a a nibh. Curabitur lobortis vitae lacus eu pretium.";
  document.getElementById("pagetitle").innerHTML = editCredsection;
  document.getElementById('container').innerHTML = editCredstuff;
  document.getElementById('formdiv').style.display = "none";
}
function contactBankFunction(){

  var contactBanksection = "<h2>Contact Bank</h2>";
  var contactBankstuff = "Proin condimentum neque eu mauris laoreet, id accumsan metus mattis. Aenean dapibus nulla ut enim tincidunt, non vehicula neque laoreet. Proin nec aliquam nibh. Cras vitae mi non lacus volutpat dignissim. Curabitur dignissim accumsan risus vitae vulputate. Cras volutpat iaculis malesuada. Ut pellentesque massa quis orci tincidunt, id tincidunt orci posuere. Phasellus consequat eleifend metus nec pulvinar. Cras ut mollis felis, nec efficitur nisl. Proin bibendum urna sed justo vestibulum, non hendrerit nibh volutpat.";
  document.getElementById("pagetitle").innerHTML = contactBanksection;
  document.getElementById("container").innerHTML = contactBankstuff;
  document.getElementById('formdiv').style.display = "none";
}