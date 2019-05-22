let radius = 60;

// Temporarily assign values
let x = 0, y = 0, velocity_x = 0, velocity_y = 0;


function setup() {
	createCanvas(1360, 600);

	// Assign a random initial position and velocity
	// random(lower, upper) returns a value in [lower, upper]
	x = random(20, width - 20);
	y = random(20, height - 20);

	velocity_x = random(width / 200, width / 40);
	velocity_y = random(height / 200, height / 40);
}


function draw() {
	x += velocity_x;
	y += velocity_y;

	// Check if particle has crossed the left or right walls
	if (x >= width - radius || x <= radius) {
		// If it has, then reverse it's velocity - Bounce it back
		velocity_x *= -1;
	}

	if (y >= height - radius || y <= radius) {
		velocity_y *= -1;
	}

	background(0);
	ellipse(x, y, radius * 2, radius * 2);
}
