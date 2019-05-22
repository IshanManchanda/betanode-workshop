function setup() {
	createCanvas(1000, 500);
}

function draw() {
	background(255);
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
}
