function GetUserByName() {
  var choose = document.getElementById('s_name').value;
  var url = 'http://localhost/oamk_bank/index.php/api/bank/users';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
  var data = '<table border="1">';
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        if (jsonData[x].name == choose) {
          data +=
            '<tr><td>' +
            jsonData[x].name +
            '</td><td> ' +
            jsonData[x].email +
            '</td></tr>';
        }
      }
      data += '</table>';
      document.getElementById('results').innerHTML = data;
    }
  };
  xhttp.send();
}
function NamesEmails() {
  var url = 'http://localhost/oamk_bank/index.php/api/bank/users';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
  var data = '<table border="1">';
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        data +=
          '<tr><td>' +
          jsonData[x].name +
          '</td><td> ' +
          jsonData[x].email +
          '</td></tr>';
      }
      data += '</table>';
      document.getElementById('results').innerHTML = data;
    }
  };
  xhttp.send();
}
function AddUser() {
  var url = 'http://localhost/oamk_bank/index.php/api/bank/users';
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', url, true);
  var form = document.getElementById('UserForm');
  var formData = new FormData(form);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 201) {
      document.getElementById('results').innerHTML = 'User added succesfully';
    } else {
      document.getElementById('results').innerHTML = 'Something went wrong';
    }
  };
  xhttp.send(formData);
}
function UpdateUser() {
  var url = 'http://localhost/oamk_bank/index.php/api/bank/users';
  var xhttp = new XMLHttpRequest();
  xhttp.open('PUT', url, true);
  var data = {};
  data.id = parseInt(document.getElementById('update_id').value);
  data.name = document.getElementById('update_name').value;
  data.email = document.getElementById('update_email').value;
  data.fact = document.getElementById('update_fact').value;

  var jsonData = JSON.stringify(data);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 201) {
      document.getElementById('results').innerHTML = 'User updated succesfully';
    } else {
      document.getElementById('results').innerHTML = 'Something went wrong';
    }
  };
  xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhttp.send(jsonData);
}
