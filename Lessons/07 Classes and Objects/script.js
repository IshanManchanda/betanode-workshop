function setup() {
	createCanvas(1000, 500);
}

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

let Dora = new Character("Dora the Explorer", "Female", 0, 100, 100)


class Ball {
	constructor(position, speed, radius, color) {
		this.position = position;
		this.speed = speed;
		this.radius = radius;
		this.color = color;
	}

	check_walls() {
		if (this.position.x >= width) {
			this.speed = -this.speed;
		}

		if (this.position.x <= 0) {
			this.speed = -this.speed;
		}
	}
}



let Ball1 = new Ball(10, 10, 10, 50, (10, 20, 30))

Ball1.check_walls()
