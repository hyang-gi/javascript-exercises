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
		displayDivs() {
			return this.createDiv();
		}
		//for loop to create divs. 
		createDiv() {
			for (let i = 1; i <= this.num_balls; i++) {
				$(`#${this.id_canvas}`).append(`<div class=ball${i}>.</div>`);
			}
		}
	}


	//created the divs - balls
	// now, i want access the divs using the Ball class. set the values.

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
	let ball1 = new Ball(50, 30, 6);
	let ball2 = new Ball(300, 30, 8);

	console.log({ ball1, ball2, canvas });
	canvas.createCanvas();
	canvas.displayDivs();
	//console.log(canvas.displayDivs());


});




