$(window).load(function() {
	$('.preloader').fadeOut(1000);
});

$(document).ready(function() {

	$('.navbar-collapse a').click(function() {
		$(".navbar-collapse").collapse('hide');
	});

	$(window).scroll(function() {
		if($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	function initParallax() {
		$('#home').parallax("100%", 0.1);
		$('#specialty').parallax("100%", 0.3);
		$('#hobby').parallax("100%", 0.3);
		$('footer').parallax("100%", 0.2);

	}
	initParallax();

	$(function() {
		$('.custom-navbar a, #home a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 49
			}, 1000);
			event.preventDefault();
		});
	});

	new WOW({
		mobile: false
	}).init();

	$(function() {
		$('#GoTop').hide();
		$(function() {
			$(window).scroll(function() {
				if($(window).scrollTop() > 50) {
					$('#GoTop').fadeIn(200);
				} else {
					$('#GoTop').fadeOut(200);
				}
			});
		});
	});

});