$(document).ready(function(){

 
 $(window).scroll(function (){
		if ($(window).scrollTop() > 700) {
			$('#upBtn').fadeIn();
		} else {
			$('#upBtn').fadeOut();
    }
});
  
  $('#upBtn').click(function(){
		$('html, body').animate({scrollTop : 0}, 300);
		return false;
	});

});
