$(document).ready(function () {
	
	$(document).keyup(function (event) {
		if (event.keyCode == 38) {
			$('.paddle').animate({
				'top': "-=15px" //moves up
			}, "fast");
		}
		if (event.keyCode == 40) {
			$('.paddle').animate({
				'top': "+=15px" //moves up
			}, "fast");
		}
	});
})
