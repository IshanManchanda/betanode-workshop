class Character {
	constructor(name, sex, level, max_health, current_health, max_speed, current_speed) {
		this.name = name;
		this.sex = sex;
		this.level = level;
		this.max_health = max_health;
		this.current_health = current_health;
		this.max_speed = max_speed;    // we could also use a ps.Vector object to represent velocity here
		this.current_speed = current_speed;
	}

	sprint() {
		this.current_speed += 25
	}

	take_damage() {
		this.current_health -= 25
	}
}


class Ball {
	constructor(position, speed, radius, color) {
		this.position = position;
		this.speed = speed;
		this.radius = radius;
		this.color = color;
	}

	update() {
		this.position += this.speed;
	}

	draw() {
		fill(this.color);
		ellipse(this.position, 100, this.radius, this.radius);
	}

	check_walls() {
		if (this.position >= width || this.position <= 0) {
			this.speed = -this.speed;
		}
	}
}


let width = 1000, height = 500;
let Ball1, Ball2;

function setup() {
	createCanvas(width, height);

	let Dora = new Character(
		"Dora the Explorer", "Female", 0, 100, 100
	);
	Ball1 = new Ball(
		10, 10, 100,
		color(100, 255, 255)
	);

	Ball2 = new Ball(
		100, 20, 60,
		color(255, 100, 100)
	);
}

function draw() {
	background(0);

	Ball1.update();
	Ball1.check_walls()
	Ball1.draw();

	Ball2.update();
	Ball2.check_walls()
	Ball2.draw();
}
