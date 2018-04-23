var user_id = document.getElementById('user_id').value;
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
           if(jsonData[x].user_id == user_id)
             {
               var li_account = document.createElement("LI");
               var li_button = document.createElement("input");
               li_button.setAttribute('type', 'button');
               li_button.setAttribute('id', 'li_button');
               li_button.setAttribute('onclick','getaccountinfo("'+jsonData[x].account_id+'","'+jsonData[x].Balance+'","'+jsonData[x].credit+'")');
               li_button.setAttribute('value', jsonData[x].account_id);
               li_account.appendChild(li_button);
               document.getElementById('account_ul').insertBefore(li_account, document.getElementById('account_ul').childNodes[0]);
             }
         }
       }
     };
     xhttp.send();
}

function getaccountinfo(account_id,Balance,credit){
    document.getElementById('pagetitle').innerHTML = '<h2>' + account_id + '</h2>';
    document.getElementById('formdiv0').innerHTML = 'Balance: ' + Balance + '€';
    document.getElementById('formdiv0').style.display = 'block';

    document.getElementById('formdiv1').innerHTML = 'Credit Limit: ' + credit + '€';
    document.getElementById('formdiv1').style.display = 'block';

    for (var i = 0; i < 8; i++)
    {
      var name_div = "formdiv" ;
      document.getElementById(name_div + i).style.display="none";
    }
    document.getElementById('formdiv0').style.display = 'block';
    document.getElementById('formdiv1').style.display = 'block';
}

function createaccount(){
    document.getElementById('pagetitle').innerHTML = '<h2>Create New Account</h2>'
    var place = document.getElementById('test1');
    var create = document.createElement('input');
    create.setAttribute('type', 'button');
    create.setAttribute('id', 'sendbtn');
    create.setAttribute('onclick', '');
    create.setAttribute('value','Generate')
    place.appendChild(create);
    location.reload();
}
