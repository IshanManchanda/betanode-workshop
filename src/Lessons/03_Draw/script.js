function setup() {
	createCanvas(1000, 500);
}

let x = 0;
let y = 255;
let radius = 250;

function draw() {
	//background(0);
	//ellipse(x, y, radius, radius);
	// Every time draw is called, x is updated to 2 + its initial value
	//	x = x + 2;


	// Background allows us to set a background color
	// background(255);
	// ellipse(x, y, radius, radius);
	// x = x + 2;


	// We can also change colors using variables
	background(255);
	fill(x, y - x, x);
	ellipse(x, y, radius, radius);
	x = x + 1;
}
