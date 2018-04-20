

<!-- Top Banner Section -->
      <div class="ab-top">
        <img src="<?php echo base_url('img/daddaughter.png');?>" alt="" class="aboutslide" >
        <img src="<?php echo base_url('img/kiss.png');?>" alt="" class="aboutslide" >
        <img src="<?php echo base_url('img/hands.png');?>" alt="" class="aboutslide" >
        <img src="<?php echo base_url('img/babyfinger.png');?>" alt="" class="aboutslide" >
      </div>

      <script>
        var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("aboutslide");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}
            x[myIndex-1].style.display = "block";
            setTimeout(carousel, 5000); // Change image every 5 seconds
        }
        </script>

<!-- Content Section -->

<div class="evrybk-cont">
  <div class="evrybk-img">
    <img src="<?php echo base_url('img/transfer.png');?>" class="trns" alt="">
    <div class="evrybk-tx">
        <p>
      Are you tired of conventional banks that charge you for keeping your hard-earned cash
      with them? Do you want to be able to send money to friends and family all over the world for a
      low fee?</p>
       <h2><b>If you answered yes, then OAMK Bank is the right bank for you!</b></h2> <br>
      <p>You can start banking with us in just few minutes! As soon as you register, you will
        immediately be able to enjoy all the account features including a
      bank account, instant transfer to friends & family, payments to other accounts,
      as well as sending money worldwide with ZERO fees! <br><br>

      At OAMK bank, we aim to assist our customers in achieving financial security by removing fees from all
      our services.

    </p>
    </div>
  </div>
</div>
<div>
  <h1 class="get5">Get your bank account in 5 minutes</h1>
  <p class="get5p">Open a new OAMK bank account from your phone or computer <br> in an easy, paperless signup process</p>
</div>
<div class="evrybk-open">
  <a href="/openAcct.html" class="evrybtnoa">OPEN ACCOUNT</a>
</div>
<div class="stepshead">
  <img src="<?php echo base_url('img/megaphone_oamkob.png');?>" alt="">
</div>

    <h2 class="howitworks">How it works</h2>

<div class="steprow">
  <div class="stepcol" style="background-color:#ffb34b;">
    <img style="display:inline-block; margin-left:15%; margin-right:15%" src="<?php echo base_url('img/1.png');?>" class="1st" alt="">
    <h2>Open Account</h2>
    <p style="text-align:center;">Regsiter online for an account</p>
  </div>
  <div class="stepcol" style="background-color:#ffa01e;">
    <img style="display:inline-block; margin-left:15%; margin-right:15%" src="<?php echo base_url('img/2.png');?>" class="2nd" alt="">
    <h2>Verify Account</h2>
    <p style="text-align:center;">Verify and log in with OTP</p>
  </div>
  <div class="stepcol" style="background-color:#ff9400;">
    <img style="display:inline-block; margin-left:15%; margin-right:15%" src="<?php echo base_url('img/3.png');?>" class="3rd" alt="">
    <h2>Online Banking</h2>
    <p style="text-align:center;">Instantly have access to your account</p>
  </div>
</div>




<!-- <div class="stepevrybk">
  <div class="first">
    <img src="img/1.png" class="1st" alt="">
    <img src="img/2.png" class="2nd" alt="">
    <img src="img/3.png" class="3rd" alt="">
    <h1><b><u>Open Account</u></b> br <b><u>Verify</u></b></h1>
    <p>Complete open account formVerify account using verification email</p>
</div>
  <div class="second">
<h1>&nbsp;</h1>
      <p>&nbsp;</p>
    </div>
</div> -->




<!-- Back to top Section -->
<button onclick="topFunction()" id="Bttop" title="Go to top">Top</button>
