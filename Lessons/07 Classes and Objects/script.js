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

function draw() {

}
