$(document).ready(function () {
	const canvas = $('.canvas');

	class Canvas {
		constructor(width, height, background, num_balls) {
			this.width = width;
			this.height = height;
			this.background = background;
			this.num_balls = num_balls;
		}

		//method to add balls from no_balls

		//for loop to create divs. 

		//$('.main').append() //use jquery to create a div
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

	let canvas_val = new Canvas(600, 400, "rgb(2,0,18)", 2); 
	let ball_1 = new Ball(50, 30, 6);
	let ball_2 = new Ball(300, 30, 8);
	
	canvas.css({ width: `${canvas_val.width}px` })


	console.log({ ball_1, ball_2, canvas_val });


});// end document ready




