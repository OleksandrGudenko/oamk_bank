
    <div id="navbar" class="navbar">
    <div class="account_label">
        <span style="color:white;" id="time_expression"></span>
        <span style="color:white;" id="user">Tervetuloa</span>
        <input id="user_id" value="<?php echo $this->session->userdata('firstname');?>" type="hidden">
    </div>
<div id="div_active">
        <a href="<?php echo base_url(); ?>"><button class="signout-btn">Sign Out</button></a>
        <button class="signout-btn" id="contact_btn" onclick="contact_show()">Contact Bank</button>
        <button class="signout-btn" id="edit_btn" onclick="edit_show()">Edit Credentials</button>
        <button class="signout-btn" id="loan_btn" onclick="loan_show()">Loan</button>
        <button class="signout-btn" id="pay_btn" onclick="payment_show()" id="Payments">Payments</button>
</div>
        <div class="dropdown">
                <button class="dropbtn" onclick="dropdownFunction()">Accounts
                </button>
                <div class="dropdown-content" id="navDropdown">
                    <ul id="account_ul">
                    <li><button id="li_button">Create account</button></li>
                    </ul>
                </div>
        </div>
    </div>
    <div id="pagetitle"></div>
    <div id="container"></div>
    <div style="text-align:center" id="loading"></div>
    <div style="display:block; text-align:center" id="formdiv"></div>
    <div style="display:block; text-align:center" id="formdiv0"></div>
    <div style="display:none; text-align:center" id="formdiv1"></div>
    <div style="display:none; text-align:center" id="formdiv2"></div>
    <div style="display:block; text-align:center" id="formdiv3"></div>
    <div style="display:block; text-align:center" id="formdiv4">
        <form id="requestForm">

        </form>
    </div>
    <div style="display:block; text-align:center" id="formdiv5">
        <form id="Payment">

        </form>
    </div>
    <div id="hide_form"><form id="requestform">
    <div style="display:block; text-align:center" id="formdiv6"></div>
    <div style="display:none; text-align:center" id="formdiv7"></div>
    </form></div>

    <div style="text-align:center" id="result"></div>