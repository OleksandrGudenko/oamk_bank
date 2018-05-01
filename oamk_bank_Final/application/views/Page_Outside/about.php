
<!-- Banner top Section -->
    <div class="ab-top">
      <img src="<?php echo base_url('img/50e.png')?>" alt="" class="aboutslide" >
      <img src="<?php echo base_url('img/frank.png')?>" alt="" class="aboutslide" >
      <img src="<?php echo base_url('img/about.png')?>" alt="" class="aboutslide" >
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
      <a href="<?php echo site_url('Page_Controller/everyBank');?>" class="btn">OUR SERVICES</a>
    </div>
    <br>
    <div class="btnonabtoa">
      <a href="<?php echo site_url('Page_Controller/openAcct');?>" class="btnoa">OPEN ACCOUNT</a>
    </div>



<!-- Back to top Section -->
<button onclick="topFunction()" id="Bttop" title="Go to top">Top</button>
