// Jquery has been added to this example
$("#mob-nav").click(function(){
 
    if( $(".mobile-nav-container").hasClass("mobile-nav-window-active")) {
          $(".mobile-nav-container").removeClass("mobile-nav-window-active");
   
    } else {
    
      $(".mobile-nav-container").addClass("mobile-nav-window-active");
     }
  
  });