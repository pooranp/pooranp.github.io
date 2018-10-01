$(document).ready(function(){
	var win = $(this.html, this.body);
	
	var homeBtn = $("#homeBtn");
	win.scroll(function() {
		if ($(this).scrollTop() >= 60){
		homeBtn.css("display", "block");
		} else {
		homeBtn.css("display", "none");
		};
	});
	homeBtn.click(function() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}); //End Scroll-Home button
	
	if (win.height() <= 500) {
		console.log('small');
	};
	
	var distance = $("#about").offset().top;
	var toggler = $(".navbar-toggler");
	var navbar = $(".navbar");
	
	// Scroll Function
	win.scroll(function() {
    if (toggler.is(":hidden") && win.scrollTop() >= distance - navbar.height()*1.85) {
		navbar
			.removeClass("navbar-dark")
			.addClass("navbar-light")
			.css("background-color", "white")
			.css("font-weight", "bold");
    } else {
		navbar
			.removeClass("navbar-light")
			.addClass("navbar-dark")
			.css("background-color", "")
			.css("font-weight", "normal");;
	};
}); // End navbar change-on-scroll function
	
	// Navbar Toggler
	$(".navbar-toggler").click(function() {
		var menu = $("#menu");
		
		if (menu.is(":hidden")) {
			menu.slideDown('fast');
		} else if (menu.is(":visible")) {
			menu.slideUp('fast');
		};
		
		win.scroll(function() {
			if (win.scrollTop() >= 2) {
				menu.slideUp('fast');
			}
		});		
	}); // End navbar-toggler function
	
	// Smooth Scroll
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
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
        }, 350, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  }); // End smooth-scroll
	
});
