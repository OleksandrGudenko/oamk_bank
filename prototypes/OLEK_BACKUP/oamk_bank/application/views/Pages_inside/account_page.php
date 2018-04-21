
    <div id="navbar" class="navbar">
    <div class="account_label">
        <span style="color:white;" id="time_expression"></span>
        <span style="color:white;" id="user">Tervetuloa</span>
        <input id="user_id_from_login" value="<?php echo $this->session->userdata('user_id');?>" type="hidden">
    </div>
<div id="div_active">
        <a href="<?php echo base_url(); ?>"><button class="signout-btn">Sign Out</button></a>
        <button class="signout-btn" id="contact_btn" onclick="contact_show()">Contact Bank</button>
        <button class="signout-btn" id="edit_btn" onclick="edit_show()">Edit Credentials</button>
        <button class="signout-btn" id="loan_btn" onclick="loan_show()">Loan</button>
        <button class="signout-btn" id="pay_btn" onclick="payment_show()" id="Payments">Payments</button>
        <button class="signout-btn" id="accounts_btn" onclick="show_accounts()">Accounts</button>
</div>

    </div>
    <div id="container"></div>
    <div style="text-align:center" id="loading"></div>
    <div id="pagetitle"></div>
    <div style="display:block; text-align:center" id="formdiv"></div>
    <div style="display:block; text-align:center" id="formdiv0">
        <ul><li></li></ul>
        <button id="li_button">Create New Account</button>
    </div>
    <div style="display:none; text-align:center" id="formdiv1"></div>
    <div style="display:none; text-align:center" id="formdiv2"></div>
    <div style="display:block; text-align:center" id="formdiv3"></div>
    <div style="display:block; text-align:center" id="formdiv4">
        <form id="requestForm"></form>
    </div>
    <div style="display:block; text-align:center" id="formdiv5">
        <form id="Payment"></form>
    </div>
    <div id="hide_form"><form id="requestform">
    <div style="display:block; text-align:center" id="formdiv6"></div>
    <div style="display:none; text-align:center" id="formdiv7"></div>
    </form></div>

    <div style="text-align:center" id="result"></div>
