  $(document).ready(function() {
	  
	  
	  
  /*-------------------------------------------------------------------------------
    Navigation section
  -------------------------------------------------------------------------------*/
	  
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
	  
    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });
	  
	  
	  
  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/
	  
    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#specialty').parallax("100%", 0.3);
    $('#hobby').parallax("100%", 0.3);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    wow js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();
	  
	  
	  
  });

