
<!-- First Section -->
<div class="contact-top">
    <img src="<?php echo base_url('img/contact.png');?>" alt="" class="" >
</div>
<!-- Middle + Map Section -->
<div class="mapsect">
<h2>Contact Us</h2>
<p>Customer service: 040 1000 0000 <br>
<br>
Mon - Fri: 08:00 - 16:00 <br>
<br>
email: oamkbank@din17sp.com
</p>
</div>
<div id="map" ></div>

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

<!-- Back to top Section -->
<button onclick="topFunction()" id="Bttop" title="Go to top">Top</button>
  
