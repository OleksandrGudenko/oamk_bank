    
<!-- Banner top Section -->
<div class="ab-top">
    <img src="<?php echo base_url(); ?>images/50e.png" alt="" class="aboutslide" >
    <img src="<?php echo base_url(); ?>images/frank.png" alt="" class="aboutslide" >
    <img src="<?php echo base_url(); ?>images/about.png" alt="" class="aboutslide" >
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
        setTimeout(carousel, 5000); // Change image every 4 seconds
    }
</script>
<!-- First Content Section -->
<div class="abthistory">
    <h2>OAMK BANK</h2>
    <p>
        OAMK Bank was founded in 2045 by four DIN17SP students as a project for the end of first academic year. 
        <br><br> OAMK Bank is a privately owned Finnish bank that provides quality retail financial solutions and
        first-class customized personal services. <br> <br> We have established our niche in the market and grown
        to be one of Europe's largest financial service companies. Customers from all over the world are served 
        from our online bank without any physical branch. Due to the nature of the bank, services are fully automated.<br>
        <br>OAMK Bank is controlled by 4 professionals and our customers have transacted over €25 billion through our 
        expanding financial network.
    </p>
</div>

<div class="abthistory">
    <h2>Mission</h2>
    <p>
        Become the leading financial provider to retail customers by providing zero-cost financial products and 
        unique customer service.
    </p>
</div>
<div class="btnonabtcontainer">
      <a href="<?php echo base_url(); ?>/everyday_banking" class="btnos">OUR SERVICES</a>
</div>
<div class="btnonabtoa">
    <a<?php echo base_url(); ?>images/"<?php echo base_url(); ?>users/register" class="btnoa">OPEN ACCOUNT</a>
</div>