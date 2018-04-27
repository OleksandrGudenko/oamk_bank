<div id="navbar" class="navbar">
    <div class="account_label">
        <span style="color:white;" id="time_expression"></span>
        <span style="color:white;" id="user"><?php if ($this->session->userdata('admin')) : ?>Admin<?php endif;?></span>
        <input id="user_id_from_login" value="<?php echo $this->session->userdata('user_id');?>" type="hidden">
    </div>
    <div id="div_active">
        <a href="<?php echo base_url(); ?>"><button class="signout-btn">Sign Out</button></a>
        <?php if ($this->session->userdata('admin')) : ?>
            <button class="signout-btn" id="loan_btn" onclick="show_phpinfo()">Php Info</button>
            <button class="signout-btn" id="loan_btn" onclick="show_userinfo()">User Info</button>
            <button class="signout-btn" id="loan_btn" onclick="show_requestMsg()">Request Messages</button>
        <?php endif;?>
        <?php if (!$this->session->userdata('admin')) : ?>
        <button class="signout-btn" id="contact_btn" onclick="contact_show()">Contact Bank</button>
        <button class="signout-btn" id="edit_btn" onclick="edit_show()">Edit Credentials</button>
        <button class="signout-btn" id="loan_btn" onclick="loan_show()">Loan</button>
        <button class="signout-btn" id="pay_btn" onclick="payment_show()" id="Payments">Payments</button>
        <?php endif;?>

        <?php if (!$this->session->userdata('admin')) : ?>
        <button class="signout-btn" id="accounts_btn" onclick="show_accounts()">Accounts</button>
        <?php endif;?>
      </div>
</div>
    <?php if (!$this->session->userdata('admin')) : ?>
    <div id="container"></div>
    <div id="container1"></div>
    <div id="pagetitle"></div>
    <div style="text-align:center" id="loading"></div>
    <div style="display:block; text-align:center" id="formdiv"></div>
    <div style="display:block; text-align:center" id="formdiv0">
        <ul><li></li></ul>
        <button id="li_button" onclick="terms_conditions()">Create New Account</button>
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
    <div style="display:none; text-align:center" id="formdiv8"></div>
    </form></div>
    <div style="display:none; text-align:center" id="formdiv8"></div>
    <div style="text-align:center" id="result"></div>
    <?php endif;?>

    <?php if ($this->session->userdata('admin')) : ?>
    <div style="text-align:center" id="result_in_admin"></div>
    <div id="user_info" style="display:none">
      <?php $this->load->view('Admin/userinfo') ; ?>
    </div>
    <div id="request_msg" style="display:none">
      <?php $this->load->view('Admin/requestMsg') ; ?>
    </div>
    <div id="info_page" style="display:none">
      <?php $this->load->view('Admin/info') ; ?>
    </div>
    <?php endif;?>
