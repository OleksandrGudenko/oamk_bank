
    <div class="navbar">
    <div class="account_label">
        <span style="color:white;" id="time_expression"></span>
        <span style="color:white;" id="user">Welcome</span>
    </div>

          <!-- <div class="dropdown">
              <div class="dropbtn" onclick=test_account_hide()>get account(test)</div>
          </div>
          <div class="dropdown">
              <div class="dropbtn" onclick=test_user_hide()>get user(test)</div>
          </div> -->

          <div class="clock_test" id="current_time"></div>

        <button class="signout-btn">Sign Out</button>
        <button class="signout-btn" onclick="contactBankFunction()">Contact Bank</button>
        <button class="signout-btn" onclick="editCredFunction()">Edit Credentials</button>
        <button class="signout-btn" onclick="loanFunction()">Loan</button>
        <button class="signout-btn" onclick="paymentFunction()" id="Payments">Payments</button>
        <div class="dropdown">
                <button class="dropbtn" onclick="dropdownFunction()">Accounts
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content" id="navDropdown">
                    <ul id="account_ul"></ul>
                </div>
          </div>

    </div>
    <div id="pagetitle"></div>
    <div id="container"></div>
    <div style="float:right; display:none" id="test_pic"></div>
    <div id="hide_form"><form id="requestform">
    <div style="text-align:center" id="loading"></div>
    <div style="display:block" id="formdiv">
    <div style="display:block" id="formdiv0">
    </div>
    </form></div>
    <div style="display:block; text-align:center" id="formdiv1"></div>
    <div style="display:block; text-align:center" id="formdiv2"></div>
    <div style="display:block; text-align:center" id="formdiv3"></div>
    <div style="display:block; text-align:center" id="formdiv4"></div>
    <div style="display:block; text-align:center" id="formdiv5"></div>
    <div style="display:block; text-align:center" id="formdiv6"></div>
<br>
    


    <div style="text-align:center" id="result"></div>
        <div style="display:none" id="test_account">loading...</div>
        <div style="display:none" id="test_user">loading...</div>

<p id="test_get1"></p>
<p id="test_get2"></p>

<div id="test"></div>
