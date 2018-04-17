<h1>Test OAMK BANK</h1>
<div id='results'></div>


<button onclick="GetUsers()">Get All Users</button>
<button onclick="GetAccount()">Show accounts</button>

<h2>Transfer</h2>
<label for="">from_account</label> <br>
<input type="text" id='idaccount1'>
<br>
<label for="">to_account</label> <br>
<input type="text" id='idaccount2'> <br>
<label for="">amount</label> <br>
<input type="number" id='amount'> <br>
<button onclick="test_account()">Transfer</button>


<p>
  <div id="test_account"></div>
  <div id="test_account2"></div>
  <div id="test_account3"></div>
  <div id="test_account4"></div>
  <div id="test_account5"></div>
  <button onclick=account_gene()>Generate Account</button>
</p>


<form id='test_form'>
  <input hidden type="text" name="idaccount" value="">

  <input hidden type="text" name="iduser" value="2">

  <input hidden type="number" name="balance" value="0">

  <input hidden type="number" name="credit" value="100">

  <input hidden type="number" name="loan" value="0">
</form>
