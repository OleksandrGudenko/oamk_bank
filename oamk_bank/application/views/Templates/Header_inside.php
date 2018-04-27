<html>
<head>
    <title>OAMK Bank OYJ</title>
    <link rel="icon" href="<?php echo base_url('img/logo.png'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('css/style_account.css'); ?>">
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_loan.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_transaction.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_global.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_edit_info.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_payment.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_contact.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_account.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/script_payback.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>Java/create_account.js"></script>
    <?php if($this->session->userdata('admin')) : ?>
      <script type="text/javascript" src="<?php echo base_url(); ?>Java/user_info_admin.js"></script>
    <?php endif;?>
</head>
<body onload="time_greet();real_time();<?php if(!$this->session->userdata('admin')) : ?>for_onload();<?php endif;?>">
