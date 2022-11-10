$(document).ready(function () {

    class Canvas {


        constructor(width, height, balls, id_canvas) {
            this.width = width;
            this.height = height;
            this.balls = balls;
            this.id_canvas = id_canvas;
        }

        createCanvas() {
            $(`body`).append(`<div id=${this.id_canvas}></div>`);

            const canvas = $(`#${this.id_canvas}`);
            console.log("canvas", canvas);

            canvas.css({
                width: `${this.width}px`,
                height: `${this.height}px`,
                background: "rgb(2, 0, 18)",
            });
        }

        //method to add balls from no_balls
        displayBalls() {
            for (let i = 0; i < balls.length; i++) {
                $(`#${this.id_canvas}`).append(`<div id="ball${balls[i].index}" class="ball">.</div>`);
                const ball = $(`#ball${balls[i].index}`);
                ball.css({
                    width: `40px`,
                    height: `30px`,
                    background: "blue",
                    "border-radius": "50%",
                   // position: "relative",
                });
            }
        }


    }

    // now, i want access the divs using the Ball class. set the style values.
    // Ball class should have access to the div id in the Canvas class. 

    class Ball {
        constructor(x, y, speed, index) {
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.w = 40;
            this.h = 40;
            this.dx = 1;
            this.dy = 1;
            this.ani = {};
            this.index = index;
        }

        setStyle() {
            const ball = $(`#ball${this.index}`);
            console.log(this.width)
            //console.log("setStyle", ball)
            ball.css({
                left: `${this.x}px`,
                top: `${this.y}px`,
                width: `${this.w}px`,
                height: `${this.h}px`,
                background: "blue",
                "border-radius": "50%",
               // position: "relative",
            });
        }


        mover() {

        }

        collision() {

        }

        changeColor() {

        }
    }


    //generate a number of balls between 2 and 10
    const numberOfBalls = Math.floor(Math.random() * 10) + 2;

    //create an array to "hold" the balls 
    let balls = [];

    for (i = 0; i < numberOfBalls; i++) {
        let ball = new Ball(10, 10, 5, i);
        balls.push(ball);
    }

    //create a canvas with the balls
    let canvas = new Canvas(600, 400, balls, "canvas1");
    canvas.createCanvas();
    canvas.displayBalls();

    //set styles to divs/balls created

    // for (let j = 0; j < balls.length; j++) {
    //     const id = balls.map(ball => ball.setStyle());
    // }
    //console.log("balls", canvas.balls);
    //  console.log({ canvas, balls});

});
