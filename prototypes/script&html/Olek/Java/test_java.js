function getReciever(reciever)
{

  var url = "http://localhost/oamk_bank/index.php/api/bank/accounts/accountid";
  var jsonData='';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange=function()
  {
    if(xhttp.readyState==4 && xhttp.status==200)
    {
      createListFunction();
      // var reciever = document.createElement("select");
      reciever.setAttribute('id', ' reciever');
      document.getElementById('formdiv').appendChild( reciever);

      jsonData = JSON.parse(xhttp.responseText);

      for(x in jsonData)
      {
        var option_reciever = document.createElement("option");
        option_reciever.value = jsonData[x].account_id;
        option_reciever.setAttribute('id', "recieve" + jsonData[x].account_id);
        option_reciever.text = jsonData[x].account_id;
        reciever.appendChild(option_reciever);
      }

      createListFunction();

      var amount = document.createElement("input");
      amount.setAttribute('type', 'number');
      amount.setAttribute('id', 'amount');
      amount.setAttribute('placeholder', 'amount to transfer');
      document.getElementById('formdiv').appendChild(amount);
      createListFunction();
      var  sendbtn = document.createElement('input');
      sendbtn.setAttribute('type', 'button');
      sendbtn.setAttribute('id', ' sendbtn');
      sendbtn.setAttribute('value', 'send');
      sendbtn.innerHTML = 'Proceed';
      document.getElementById('formdiv').appendChild(sendbtn);

    }
  };
  xhttp.send();

}



var nav_div = document.getElementById("div_active");
var btns = nav_div.getElementsByClassName("signout-btn");
for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener("click", function()
  {
    var current = document.getElementsByClassName("signout-btn");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });

}


//   // document.getElementById('hide_form').style.display="block";
//   setTimeout(function(){
//   // document.getElementById('result').innerHTML = " ";
//   // document.getElementById('result').style.display = "none";
//   // window.location.reload(false);
// }, 3000);
