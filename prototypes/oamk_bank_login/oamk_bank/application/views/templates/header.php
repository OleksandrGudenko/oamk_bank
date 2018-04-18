<html>
	<head>
    <title>OAMK Bank OYJ</title>
    <link rel="icon" href="<?php echo base_url(); ?>images/logo.png">
    <link rel="stylesheet" href="<?php echo base_url(); ?>css/home_style.css">
    <link rel="stylesheet" href="https://bootswatch.com/3/united/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="http://cdn.ckeditor.com/4.5.11/standard/ckeditor.js"></script>
	</head> 
	<body>
  <div class="nav-bar navbar-fixed-top">
    <div id="nav-container">
        <a href="<?php echo base_url(); ?>">
        <img class="logo" src="<?php echo base_url(); ?>images/nav_logo.png"/></a>
        <ul>
            <li><a href="<?php echo base_url(); ?>users/register">OPEN ACCOUNT</a></li>
            <li><a href="<?php echo base_url(); ?>everyday_banking">EVERYDAY BANKING</a></li>
            <li><a href="<?php echo base_url(); ?>loans">LOANS</a></li>
            <li><a href="<?php echo base_url(); ?>about">ABOUT</a></li>
            <li><a href="<?php echo base_url(); ?>contact">CONTACT</a></li>
        </ul>
        <div class="divlogin-btn">
          <a href="<?php echo base_url(); ?>users/login">
            <input type="button" class="login-btn" name="" value="LOGIN">
          </a>
        </div>
    </div>
  </div>
  <div class="content">
    <hr><hr>
    <div class="container">
      <!-- Flash messages -->
      <?php if($this->session->flashdata('user_registered')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('user_registered').'</p>'; ?>
      <?php endif; ?>

      <?php if($this->session->flashdata('login_failed')): ?>
        <?php echo '<p class="alert alert-danger">'.$this->session->flashdata('login_failed').'</p>'; ?>
      <?php endif; ?>

      <?php if($this->session->flashdata('user_loggedin')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('user_loggedin').'</p>'; ?>
      <?php endif; ?>

       <?php if($this->session->flashdata('user_loggedout')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('user_loggedout').'</p>'; ?>
      <?php endif; ?>

    </div>