<?php
// the message
$msg = "test";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("t7haki01@students.oamk.fi","My subject",$msg);
?>
