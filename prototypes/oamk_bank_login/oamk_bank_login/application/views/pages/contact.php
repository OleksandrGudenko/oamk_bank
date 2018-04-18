<!-- First Section -->
<div class="contact-top">
<img src="<?php echo base_url(); ?>images/contact.png" alt="" class="" >
    <h2><span>For Your Financial Well-Being</span></h2>
  </div>
<!-- Middle + Map Section -->
<div class="mapsect">
<h2>Contact Us</h2>
<p>Customer service: 040 1000 0000 <br>
<br>
Mon - Fri: 08:00 - 16:00 <br>
<br>
email: bank@oamkbank.gp
</p>
</div>
<div id="map" style="width:400px; height:400px;background: #F2882F; position: relative; overflow: hidden; margin-left: 55%; margin-top: -10%;"></div>

<script>
    function myMap() {
    
    // var mapOptions = 
    //   {   
    //     center: new google.maps.LatLng(65.008713, 25.509568),
    //     zoom: 16,
    //     mapTypeId: google.maps.MapTypeId.TERRAIN
    //    } 
    //    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      var myCenter = new google.maps.LatLng(64.9994825, 25.509679);
      var mapCanvas = document.getElementById("map");
      var mapOptions = {center: myCenter, zoom: 16, mapTypeId: google.maps.MapTypeId.TERRAIN};
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({position:myCenter});
      marker.setMap(map);
      var name_marker = new google.maps.InfoWindow({
        content: "OAMK BANK"
      });
      name_marker.open(map,marker);
        /*  
    ROADMAP (normal, default 2D map)
    SATELLITE (photographic map)
    HYBRID (photographic map + roads and city names)
    TERRAIN (map with mountains, rivers, etc.)
        */
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-V-dKEgqXPhcKQc3HjwRl6zimSpiEygI&callback=myMap"></script>
<br>
<br>