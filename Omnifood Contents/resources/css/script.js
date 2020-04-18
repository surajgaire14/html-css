$(document).ready(function() {
    // for sticky navigation

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
        $('nav').addClass('sticky');	
                } else {
                    $('nav').removeClass('sticky');
                }
           
        }, {
            offset:'60px;'
        });


        //scroll on buttons
        // $('.js--scroll-to-plans').click(function() {
        //     $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

        // });

        // $('.js--scroll-to-start').click(function() {
        //     $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

        // });


        // $(function() {
        //   $('.js--section-plans').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

        //   });


        //Navigation scrolls 
        $funcion() {
             $('a[href*=#]:not[href=#]').click(function() {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                    && 
                    location.hostname == this.hostname
                  ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                      // Only prevent default if animation is actually gonna happen
                      event.preventDefault();
                      $('html, body').animate({
                        scrollTop: target.offset().top
                      }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                          return false;
                        }
                    }
                });
           });

          //  animation on scroll
          // $('.js--wp-1').waypoint(function(direction) {
          //   $('.js--wp-1').addClass('animated fadeIn');

          // }, {
          //   offset:'50%'
          // });

          $(function() {
            $('.js--wp-1').fadeIn(1000);

          });
        
          $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');

          }, {
            offset:'50%'
          });
        
          $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');

          }, {
            offset:'50%'
          });
        
          $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');

          }, {
            offset:'50%'
          });
        

        
});

