$(document).ready(function () {
    document.addEventListener('keyup', function() {
		$('.paddle').animate({
		'top' : "+=5px" //moves down
		});
	});
	document.addEventListener('keydown', function() {
		$('.paddle').animate({
		'top' : "-=5px" //moves up
		});
	});
})
