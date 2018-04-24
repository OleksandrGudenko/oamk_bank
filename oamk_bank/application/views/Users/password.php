<link rel="stylesheet" href="https://bootswatch.com/3/united/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="http://cdn.ckeditor.com/4.5.11/standard/ckeditor.js"></script>

<?php echo form_open('Users/banking'); ?>
<br><br><br><br><br><br>
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


<br><br><br><br><br><br>
