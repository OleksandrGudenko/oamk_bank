function timeStamp() {
  var now = new Date();
  var dd = now.getDate();
  var mm = now.getMonth() + 1;
  var yy = now.getFullYear();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  if ( m < 10 ) {
    m = "0" + m;
  }
  if ( s < 10 ) {
    s = "0" + s;
  }
  var t = setTimeout(timeStamp, 500);
document.getElementById("real_time").innerHTML = "Now: "+ dd +"/"+ mm +"/"+ yy +" "+ h +":"+ m +":"+ s;
}
