<html>
	<head>
    <title>OAMK BANK</title>
    <link rel="icon" href="<?php echo base_url(); ?>assets/images/logo.png">
		<link rel="stylesheet" href="https://bootswatch.com/3/united/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="http://cdn.ckeditor.com/4.5.11/standard/ckeditor.js"></script>
	</head>
	<body>
	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="<?php echo base_url(); ?>">OAMK-BANK</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
          <?php if(!$this->session->userdata('logged_in')) : ?>
            <li><a href="<?php echo base_url(); ?>">Home</a></li>
            <li><a href="<?php echo base_url(); ?>about">About</a></li>
          <?php endif; ?>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Blog <span class="caret"></span></a>
              <ul id="myDropdown" class="dropdown-menu" role="menu">
                <li><a href="<?php echo base_url(); ?>posts">Latest Posts</a></li>
                <li><a href="<?php echo base_url(); ?>categories">Categories</a></li>
                <li><a href="<?php echo base_url(); ?>posts/create">Create Post</a></li>
              </ul>
            </li>
            <?php if($this->session->userdata('logged_in')) : ?>
              <p class="navbar-text">Welcome,  <a href="#" style="color:white"><?php echo $this->session->userdata('name'); ?></a>!</p>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Payments <span class="caret"></span></a>
                <ul id="myDropdown" class="dropdown-menu" role="menu">
                  <li><a href="<?php echo base_url(); ?>payments/create">New Payment</a></li>
                  <li><a href="<?php echo base_url(); ?>accounts/transfer">Transfer among account</a></li>
                </ul>
              </li>
              <li><a href="<?php echo base_url(); ?>accounts">Accounts</a></li>
            <?php endif; ?>
          </ul>
          <ul class="nav navbar-nav navbar-right">
          <?php if(!$this->session->userdata('logged_in')) : ?>
            <li><a href="<?php echo base_url(); ?>users/login"><span class="glyphicon glyphicon-log-in"> Login</a></li>
            <li><a href="<?php echo base_url(); ?>users/register"><span class="glyphicon glyphicon-user"></span> Register</a></li>
          <?php endif; ?>
          <?php if($this->session->userdata('logged_in')) : ?>
            <li><a href="<?php echo base_url(); ?>users/manager">User Manager</a></li>
            <li><a href="<?php echo base_url(); ?>users/logout"><span class="glyphicon glyphicon-log-out"> Logout</a></li>
          <?php endif; ?>
          </ul>
        </div>
      </div>
    </nav>
    <hr><hr>
    <div class="container">
      <!-- Flash messages -->
      <?php if($this->session->flashdata('user_registered')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('user_registered').'</p>'; ?>
      <?php endif; ?>

      <?php if($this->session->flashdata('post_created')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('post_created').'</p>'; ?>
      <?php endif; ?>

      <?php if($this->session->flashdata('post_updated')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('post_updated').'</p>'; ?>
      <?php endif; ?>

      <?php if($this->session->flashdata('category_created')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('category_created').'</p>'; ?>
      <?php endif; ?>

      <?php if($this->session->flashdata('post_deleted')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('post_deleted').'</p>'; ?>
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

      <?php if($this->session->flashdata('category_deleted')): ?>
        <?php echo '<p class="alert alert-success">'.$this->session->flashdata('category_deleted').'</p>'; ?>
      <?php endif; ?>