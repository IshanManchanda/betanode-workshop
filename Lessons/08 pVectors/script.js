let myVector;

function setup() {
	createCanvas(1000, 500);
	myVector = createVector(30, 20);
	myVector.mag()
}

let x = 0;
let y = 255;
let radius = 20;

function draw() {
	background(0);
	ellipse(x, y, radius, radius);
	x = x + 3;
	myVector.x += 2;
	myVector.y += 2;

	line(myVector.x, myVector.y, 85, 75);
	stroke(1000);

	// Background allows us to set a background color
	// background(255);
	// ellipse(x, y, radius, radius);
	// x = x + 2;


	// We can also change colors using variables
	// background(255);
	// fill(x, y - x, 0);
	// ellipse(x, y, radius, radius);
	// x = x + 1;
}
