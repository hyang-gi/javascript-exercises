$(document).ready(function () {
	const b = {
		x: 50,
		y: 30,
		w: 40,
		h: 40,
		dx: 1,
		dy: 1,
		speed: 6,
		ani: {}
	}

	const b1 = {
		x: 300,
		y: 30,
		w: 40,
		h: 40,
		dx: 1,
		dy: 1,
		speed: 8,
		ani: {}
	}

	class Ball {
		constructor(x, y, speed) {
			this.x = x;
			this.y = y;
			this.speed = speed;
			this.w = 40; 
			this.h = 40;
			this.dx = 1;
			this.dy = 1;
			this.ani = {}
		}

		mover() {

		}

		collision() {

		}

		changeColor() {

		}
	}


	class Wrapper {
		constructor(width, height, background, no_balls) {

		}

		//methord to add ballss from no_balls

		//for loop to create divs. 

		//$('.main').append() //use jquery to create a div
	}


	//class for the wrapper

	let ball_1 = new Ball(50, 30, 6);
	let ball_2 = new Ball(300, 30, 8);

	console.log({ball_1, ball_2})

	const ball = $('.ball');
	ball.css({ left: `${b.x}px` });
	ball.css({ top: `${b.y}px` });

	const ball1 = $('.ball1');
	ball1.css({ left: `${b1.x}px` });
	ball1.css({ top: `${b1.y}px` });

	$(document).on('click', 'button', function (event) {
		event.preventDefault();
		b.ani = window.requestAnimationFrame(mover);
		b1.ani = window.requestAnimationFrame(mover1);
	});

	function mover() {
		b.x += b.dx * b.speed;
		b.y += b.dy * b.speed;

		// console.log("moving");

		ball.css({ left: `${b.x}px` });
		ball.css({ top: `${b.y}px` });

		if (b.x > 600 - b.w || b.x < 0) {
			b.dx *= -1;
		}

		if (b.y > 400 - b.h || b.y < 0) {
			b.dy *= -1;
		}

		b.ani = window.requestAnimationFrame(mover);

	}

	function mover1() {
		b1.x += b1.dx * b1.speed;
		b1.y += b1.dy * b1.speed;

		console.log("moving b1");

		ball1.css({ left: `${b1.x}px` });
		ball1.css({ top: `${b1.y}px` });

		if (b1.x > 600 - b1.w || b1.x < 0) {
			b1.dx *= -1;
		}

		if (b1.y > 400 - b1.h || b1.y < 0) {
			b1.dy *= -1;
		}

		b1.ani = window.requestAnimationFrame(mover1);

	}


});// end document ready




