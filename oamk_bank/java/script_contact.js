function contact_show()
{
  document.getElementById('hide_form').style.display="block";

  // document.getElementById('contact_btn').disabled = true;
  // document.getElementById('edit_btn').disabled = false;
  // document.getElementById('pay_btn').disabled = false;
  // document.getElementById('loan_btn').disabled = false;



  document.getElementById('container').style.display = 'none';
  document.getElementById('container1').style.display = 'none';

  for (var i = 0; i < 8; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";

    document.getElementById('contact_btn').style.color = '#F2882F';
    document.getElementById('contact_btn').style.backgroundColor = 'white';
    
    
    document.getElementById('edit_btn').style.color = 'white';
    document.getElementById('edit_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('loan_btn').style.color = 'white';
    document.getElementById('loan_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('pay_btn').style.color = 'white';
    document.getElementById('pay_btn').style.backgroundColor = '#F2882F';
    
    document.getElementById('accounts_btn').style.color = 'white';
    document.getElementById('accounts_btn').style.backgroundColor = '#F2882F';
  }
  document.getElementById('result').innerHTML = " ";
  document.getElementById('result').style.display = "none";
  document.getElementById('formdiv6').style.display = "block";

}

function contactBankFunction(){


  createListFunction(6);
  var title_label = document.createElement("label");
  var title_text = document.createTextNode("Title");
  title_label.appendChild(title_text);
  document.getElementById('formdiv6').appendChild(title_label);
  createListFunction(6);
  var title = document.createElement("input");
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('name', 'title');
  document.getElementById('formdiv6').appendChild(title);

  //here for text area
createListFunction(6);
var test_label = document.createElement("label");
var test_text = document.createTextNode("Characters remaining: ");
test_label.appendChild(test_text);
document.getElementById('formdiv6').appendChild(test_label);

  var counter = document.createElement('input');
  counter.disabled = true;
  counter.size = "1";
  counter.value = "300";
  counter.id = "textcounter";
  document.getElementById('formdiv6').appendChild(counter);


  createListFunction(6);
  var area_label = document.createElement("label");
  var area_text = document.createTextNode("Message");
  area_label.appendChild(area_text);
  document.getElementById('formdiv6').appendChild(area_label);

  createListFunction(6);

  var area = document.createElement("textarea");
  area.setAttribute('type', 'text');
  area.setAttribute('id', 'body');
  area.setAttribute('onkeyup', 'counter_text(this,\'textcounter\',299)');
  area.setAttribute('name', 'body');
  area.cols = 100;
  area.rows = 20;
  area.maxLength = "300";
  document.getElementById('formdiv6').appendChild(area);



// for here hidden value as test

var userid = document.createElement("input");
userid.setAttribute('type', 'number');
userid.setAttribute('id', 'user_id_contact');
userid.setAttribute('name', 'user_id');
userid.setAttribute('value', "");
userid.setAttribute('type' ,'hidden');
document.getElementById('formdiv6').appendChild(userid);

var timestamp = document.createElement("input");
timestamp.setAttribute('type', 'text');
timestamp.setAttribute('id', 'timestamp');
timestamp.setAttribute('name', 'timestamp');
timestamp.setAttribute('value', '');
timestamp.setAttribute('type', 'hidden');
document.getElementById('formdiv6').appendChild(timestamp);

createListFunction(6);
var sendbtn = document.createElement('input');
sendbtn.setAttribute('type', 'button');
sendbtn.setAttribute('id', 'sendbtn');
sendbtn.setAttribute('value', 'send');
sendbtn.setAttribute('onclick', 'request_add()');
document.getElementById('formdiv6').appendChild(sendbtn);

document.getElementById('loading').innerHTML = " ";
document.getElementById('loading').style.display = "none";

}


function request_add()
{
      var id_for_msg = document.getElementById('user_id_from_login').value;
      document.getElementById('user_id_contact').value = id_for_msg ;
      var date_request = new Date();
      date_request.getFullYear(); // 2018
      var month = date_request.getMonth() + 1 ;// 04
      date_request.getDate();// 02
      date_request.getHours();
      date_request.getMinutes();
      date_request.getSeconds();

      document.getElementById('timestamp').value =
      date_request.getFullYear() + "-" + month + "-" +
      date_request.getDate() + "-" + date_request.getHours() + "-" +
      date_request.getMinutes() + "-" + date_request.getSeconds() ;


      document.getElementById('result').style.display = "block";
      document.getElementById('result').innerHTML = "Loading...";
      var form = document.getElementById('requestform');
      document.getElementById('hide_form').style.display="none";

      document.getElementById('body').required=true;
      var url = "http://localhost/oamk_bank/index.php/api/bank/requests/";
      var xhttp = new XMLHttpRequest();
      xhttp.open('POST', url, true);

      var formData = new FormData(form);
if(!document.getElementById('body').value == false)
{
      xhttp.onreadystatechange=function()
      {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
          document.getElementById('result').innerHTML = "Thank you for your message";
          document.getElementById('hide_form').style.display="none";
        }
        else
        {
            document.getElementById('result').innerHTML = "Something went wrong";
            document.getElementById('hide_form').style.display="block";
        }
      };
      xhttp.send(formData);
}
else
{
  document.getElementById('result').innerHTML = "Something went wrong";
  document.getElementById('hide_form').style.display="block";
}
}//here is end of function


function counter_text(textarea,id,max)
{
 var count_show = document.getElementById(id);
 if ( textarea.value.length > max )
 {
  textarea.value = textarea.value.substring( 0, max );
  alert("Sorry, you reached the limit.");
 }
 else
 {
  count_show.value = max - textarea.value.length;
 }
}
