$(document).ready(function () {
	const canvas_style = $('.canvas');
	const ball1_style = $('.ball1');
	const ball2_style = $('.ball2');

	class Canvas {
		constructor(width, height, num_balls, id_canvas) {
			this.width = width;
			this.height = height;
			this.num_balls = num_balls;
			this.id_canvas = id_canvas;
		}

		createCanvas() {
			$(`body`).append(`<div id=${this.id_canvas}></div>`);
			const canvas = $(`#${this.id_canvas}`);
			console.log("create", canvas);
			canvas.css({
				width: `${this.width}px`,
				height: `${this.height}px`,
				background: "rgb(2, 0, 18)",
			});
		}

		//method to add balls from no_balls
		displayBall() {
			return this.createBall();
		}
		//for loop to create divs. 
		createBall() {
			for (let i = 1; i <= this.num_balls; i++) {
				$(`#${this.id_canvas}`).append(`<div class=ball${i}>.</div>`);
			}
		}
	}

	// now, i want access the divs using the Ball class. set the style values.
	// Ball class should have access to the div id in the Canvas class. 

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

	let canvas = new Canvas(600, 400, 2, "canvas1");

	console.log({ canvas });
	canvas.createCanvas();
	canvas.displayBall();
	//console.log(canvas.displayDivs());


});




