function contactBankFunction(){
  document.getElementById('loading').style.display = "block";
  document.getElementById('container').style.display="none";
  for (var i = 0; i < 7; i++)
  {
    var name_div = "formdiv" ;
    document.getElementById(name_div + i).style.display="none";
  }

  document.getElementById('formdiv4').innerHTML = " ";
  document.getElementById('formdiv4').style.display = "block";
  document.getElementById('loading').innerHTML = "Loading...";

  // createListFunction();
  // var map_pic = document.createElement('img');
  // map_pic.setAttribute('src', 'image/pic.png');
  // map_pic.setAttribute('id', 'pic');
  // map_pic.setAttribute('width', '400');
  // map_pic.setAttribute('type', '400');
  // document.getElementById('test_pic').appendChild(map_pic);

  createListFunction4();
  var title_label = document.createElement("label");
  var title_text = document.createTextNode("Title");
  title_label.appendChild(title_text);
  document.getElementById('formdiv4').appendChild(title_label);
  createListFunction4();
  var title = document.createElement("input");
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('name', 'title');
  document.getElementById('formdiv4').appendChild(title);

  //here for text area

  createListFunction4();
  var area_label = document.createElement("label");
  var area_text = document.createTextNode("Request");
  area_label.appendChild(area_text);
  document.getElementById('formdiv4').appendChild(area_label);

  createListFunction4();
  var area = document.createElement("textarea");
  area.setAttribute('type', 'text');
  area.setAttribute('id', 'body');
  area.setAttribute('name', 'body');
  area.setAttribute('col', '80');
  area.setAttribute('rows', '10');
  document.getElementById('formdiv4').appendChild(area);

// for here hidden value as test
var id = document.createElement("input");
id.setAttribute('type', 'number');
id.setAttribute('id', 'id');
id.setAttribute('name', 'id');
id.setAttribute('value', '0');
id.setAttribute('type', 'hidden');
document.getElementById('formdiv4').appendChild(id);

var userid = document.createElement("input");
userid.setAttribute('type', 'number');
userid.setAttribute('id', 'user_id');
userid.setAttribute('name', 'user_id');
userid.setAttribute('value', '1');
userid.setAttribute('type' ,'hidden');
document.getElementById('formdiv4').appendChild(userid);

var timestamp = document.createElement("input");
timestamp.setAttribute('type', 'text');
timestamp.setAttribute('id', 'timestamp');
timestamp.setAttribute('name', 'timestamp');
timestamp.setAttribute('value', '');
timestamp.setAttribute('type', 'hidden');
document.getElementById('formdiv4').appendChild(timestamp);

createListFunction4();
var sendbtn = document.createElement('input');
sendbtn.setAttribute('type', 'button');
sendbtn.setAttribute('id', ' sendbtn');
sendbtn.setAttribute('value', 'send');
sendbtn.setAttribute('onclick', 'request_add()');
document.getElementById('formdiv4').appendChild(sendbtn);

var hidebtn = document.createElement('input');
hidebtn.setAttribute('onclick', 'hide_pic()');
hidebtn.setAttribute('type', 'button');
hidebtn.setAttribute('value', 'hide_pic');
document.getElementById('formdiv4').appendChild(hidebtn);
document.getElementById('loading').innerHTML = " ";
document.getElementById('loading').style.display = "none";

}
