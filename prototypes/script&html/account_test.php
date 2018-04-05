
    <div id="navbar" class="navbar">
    <div class="account_label">
        <span style="color:white;" id="time_expression"></span>
        <span style="color:white;" id="user">Tervetuloa</span>
    </div>
          <div class="clock_test" id="current_time"></div>
<div id="div_active">
        <button class="signout-btn">Sign Out</button>
        <button class="signout-btn" id="contact_btn" onclick="contactBankFunction()"><a>Contact Bank</a></button>
        <button class="signout-btn" id="edit_btn" onclick="editCredFunction()"><a>Edit Credentials</a></button>
        <button class="signout-btn" onclick="loanFunction()"><a>Loan</a></button>
        <button class="signout-btn" id="pay_btn" onclick="paymentFunction()" id="Payments"><a>Payments</a></button>
</div>
        <div class="dropdown">
                <button class="dropbtn" onclick="dropdownFunction()">Accounts
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content" id="navDropdown">
                    <ul id="account_ul">
                    <li><button id="li_button">Create account</button></li>
                    </ul>
                </div>
        </div>
    </div>
    <button onclick=test_account_hide()>get account(test)</button>
    <button onclick=test_user_hide()>get user(test)</button>

    <div id="pagetitle"></div>
    <div id="container"></div>
    <div style="float:right; display:none" id="test_pic"></div>
    <div style="text-align:center" id="loading"></div>
    <div style="display:block" id="formdiv"></div>
    <div style="display:block" id="formdiv0"></div>
    <div style="display:none; text-align:center" id="formdiv1"></div>
    <div style="display:none; text-align:center" id="formdiv2"></div>
    <div style="display:block; text-align:center" id="formdiv3"></div>
    <div id="hide_form"><form id="requestform">
        <div style="display:block; text-align:center" id="formdiv4"></div>
    </form></div>
    <div style="display:block; text-align:center" id="formdiv5"></div>
    <div style="display:block; text-align:center" id="formdiv6"></div>

    <div style="text-align:center" id="result"></div>

        <div style="display:none" id="test_account">loading...</div>
        <div style="display:none" id="test_user">loading...</div>
<p id="test_get1"></p>
<p id="test_get2"></p>

<div id="test"></div>




