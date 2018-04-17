 // When the user scrolls down 600px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
          document.getElementById("Bttop").style.display = "block";
      } else {
          document.getElementById("Bttop").style.display = "none";
      }
  }
  
  // When the user clicks on the button, page goes back to the top of the document
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
