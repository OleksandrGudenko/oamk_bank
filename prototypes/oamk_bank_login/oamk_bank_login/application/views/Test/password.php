<?php echo form_open('users/banking'); ?>
 <div class="row">
   <div class="col-md-4 col-md-offset-4 text-center">
     <h1 class="text-center"> <?php echo 'Username: '.$user; ?></h1>
     <h1 class="text-center"><?php echo ($msg); ?></h1>
     <div class="form-group">
       <input type="password" id="password" name="password" class="form-control" placeholder="password" required autofocus>
       <input type="hidden" id="user" name="user" class="form-control" value="<?php echo $user;?>">
     </div>
     <button class="btn btn-success">Sign In</button>
   </div>
 </div> 
<?php echo form_close(); ?>
