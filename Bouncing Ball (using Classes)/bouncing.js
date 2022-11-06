$(document).ready(function () {
	const canvas_style = $('.canvas');

	class Canvas {
		constructor(width, height, background, num_balls) {
			this.width = width;
			this.height = height;
			this.background = background;
			this.num_balls = num_balls;
		}

		//method to add balls from no_balls
		displayDivs() {
			return this.createDiv();
		}
		//for loop to create divs. 
		createDiv() {
			for (let i = 0; i < this.num_balls; i++) {
				$('.canvas').append(`<div class=ball_${i}>.</div>`);
			}
		}
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

	let canvas = new Canvas(600, 400, "rgb(2,0,18)", 2);
	let ball_1 = new Ball(50, 30, 6);
	let ball_2 = new Ball(300, 30, 8);

	canvas_style.css({
		width: `${canvas.width}px`,
		height: `${canvas.height}px`,
		background: `${canvas.background}`,
	});



	console.log({ ball_1, ball_2, canvas });
	console.log(canvas.displayDivs());


});




