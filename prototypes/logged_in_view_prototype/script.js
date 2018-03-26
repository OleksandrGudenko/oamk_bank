
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


function paymentFunction(){
  var paymentsection = "<h2>Payments</h2>";
  var paymentstuff = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis lobortis commodo. Aenean nec neque magna. Mauris scelerisque vel augue vel varius. Donec et placerat ex. Aliquam ut nisl velit. Praesent orci ligula, ultricies ut iaculis et, vulputate fringilla libero. Donec volutpat convallis venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis commodo ultrices augue, eu egestas nisi placerat at. Nam pellentesque ultrices lacus, eu consectetur ipsum semper eu. Mauris enim urna, euismod sit amet diam ut, eleifend pellentesque justo. Vivamus cursus turpis risus, et aliquet sapien vehicula ut. Aliquam eget tortor aliquam, lacinia mauris ut, lobortis urna. Morbi arcu mauris, condimentum id felis non, commodo scelerisque libero.";
  document.getElementById("container").innerHTML = paymentsection+paymentstuff;
}

function loanFunction(){
  var loansection = "<h2>Loan</h2>";
  var loantuff = "Curabitur porttitor metus ac vehicula lacinia. Curabitur dignissim ut nisi nec maximus. Pellentesque volutpat sodales lacus, eu rutrum justo tincidunt vitae. Fusce ultricies mauris et ligula volutpat, vel mollis massa fermentum. Nam mollis lorem eu mauris volutpat, id aliquet dui luctus. Praesent non lectus congue, rhoncus mauris a, molestie tellus. Pellentesque in nunc felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum nunc sed purus dignissim rhoncus. Nunc efficitur facilisis dolor, in mollis elit dignissim eget. Nulla et massa ut sem bibendum egestas sed vel nulla. Quisque porttitor neque at arcu faucibus consequat. Phasellus sit amet lacus et sem pellentesque suscipit eu eu leo. Vestibulum non nisi vel eros venenatis porttitor nec sit amet orci. Nulla facilisi. Nam efficitur lorem sit amet est rhoncus cursus.";
  document.getElementById("container").innerHTML = loansection+loantuff;
}

function editCredFunction(){
  var editCredsection = "<h2>Edit Credentials</h2>";
  var editCredstuff = "Vestibulum pharetra eget est a fringilla. Morbi eget eros ullamcorper leo venenatis feugiat nec ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras posuere lectus neque, quis viverra purus convallis vitae. Vestibulum vel erat molestie, semper eros non, pulvinar ipsum. Suspendisse vel nunc sollicitudin, vehicula justo ac, aliquam risus. Cras ipsum odio, ultricies nec egestas vel, interdum at arcu. Maecenas viverra gravida leo, nec tempus purus rutrum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu nunc eget est feugiat vulputate vel eget mi. Mauris eu nunc ullamcorper, bibendum nulla vitae, elementum arcu. Etiam quis quam sit amet turpis commodo congue a a nibh. Curabitur lobortis vitae lacus eu pretium.";
  document.getElementById("container").innerHTML = editCredsection+editCredstuff;
}
function contactBankFunction(){
  var contactBanksection = "<h2>Contact Bank</h2>";
  var contactBankstuff = "Proin condimentum neque eu mauris laoreet, id accumsan metus mattis. Aenean dapibus nulla ut enim tincidunt, non vehicula neque laoreet. Proin nec aliquam nibh. Cras vitae mi non lacus volutpat dignissim. Curabitur dignissim accumsan risus vitae vulputate. Cras volutpat iaculis malesuada. Ut pellentesque massa quis orci tincidunt, id tincidunt orci posuere. Phasellus consequat eleifend metus nec pulvinar. Cras ut mollis felis, nec efficitur nisl. Proin bibendum urna sed justo vestibulum, non hendrerit nibh volutpat.";
  document.getElementById("container").innerHTML = contactBanksection+contactBankstuff;
}