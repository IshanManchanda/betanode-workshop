class Particle {
	constructor(position, velocity, size, color) {
		this.position = position;
		this.velocity = velocity;
		this.size = size;
		this.color = color;
		this.acceleration = createVector(0, 0);
	}

	check_bounds() {
		if (this.position.x >= width - this.size ||
			this.position.x <= this.size) {
			this.velocity.x *= -1;
		}

		if (this.position.y >= height - this.size ||
			this.position.y <= this.size) {
			this.velocity.y *= -1;
		}
	}

	update() {
		// Pick a random acceleration
		this.acceleration.x = random(-0.75, 0.75);
		this.acceleration.y = random(-0.75, 0.75);

		// And add it to the velocity
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
	}

	draw() {
		fill(this.color);
		ellipse(this.position.x, this.position.y,
			 this.size * 2, this.size * 2);
	}
}

// Create an empty array which will hold out particles
let particles = [];

function setup() {
	createCanvas(1360, 600);

	// Create new particles with random properties and store references to them
	for (let i = 0; i < 10; i++) {
		particles.push(
			new Particle(
				createVector(random(100, width - 100), random(100, height - 100)),
				createVector(random(-5, 5), random(-5, 5)),
				random(20, 50),
				color(random(255), random(255), random(255))
			)
		);
	}
}

function draw() {
	background(0);

	// For each particle, update its position,
	// make sure it's without the bounds, and draw it to the screen!
	for (let p in particles) {
		particles[p].update();
		particles[p].check_bounds();
		particles[p].draw();
	}
}
