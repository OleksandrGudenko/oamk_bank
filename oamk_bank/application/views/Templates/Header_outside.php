<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OAMK Bank OYJ</title>
    <!-- Fonts used -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <!-- Scripts  -->
  <script type="text/javascript" src="<?php echo base_url('java/top.js')?>"></script>
  <script type="text/javascript" src="<?php echo base_url('java/registration.js')?>"></script>
    <!-- CSS Stylesheet  -->
    <link rel="stylesheet" href="<?php echo base_url('css/style.css')?>">

    <!-- Favicon used -->
    <link rel="icon" href="<?php echo base_url('img/favicon-16x16.png')?>" sizes="16x16" type="image/png">

    <!-- Nav section starts from here -->
  </head>
  <body>
<div class="content">
    <div class="nav-bar">
      <div id="nav-container">
        <a href="<?php echo base_url()?>">
        <img class="logo" src="<?php echo base_url('img/oamkb-logo-transp.png')?>"/></a>
        <ul>
          <li><a href="<?php echo site_url('Page_Controller/openAcct');?>">OPEN ACCOUNT</a></li>
          <li><a href="<?php echo site_url('Page_Controller/everyBank');?>">EVERYDAY BANKING</a></li>
          <li><a href="<?php echo site_url('Page_Controller/loan');?>">LOANS</a></li>
          <li><a href="<?php echo site_url('Page_Controller/About');?>">ABOUT</a></li>
          <li><a href="<?php echo site_url('Page_Controller/Contact');?>">CONTACT</a></li>
        </ul>
        <div class="divlogin-btn">
          <a href="<?php echo site_url('Users/login'); ?>">
            <input type="button" class="login-btn" name="" value="LOGIN">
          </a>
        </div>
      </div>
    </div>
    <div id = "flash_message" class="container">
      <!-- Flash messages -->
      <?php if($this->session->flashdata('id_invalid')): ?>
        <?php echo '<p class="alert alert-danger">'.$this->session->flashdata('id_invalid').'</p>'; ?>
      <?php endif; ?>
    </div>
