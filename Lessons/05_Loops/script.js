function setup() {
	createCanvas(1000, 600);
}

// function ell(a) {
// 	ellipse(100 * a, 100, 50, 50);
// }
//
// function add(a, b) {
// 	let answer = a + b;
// 	return answer;
// }
//
// let sum = add(10, 5);
//



// let xchange = 10;
// let ychange = 10;
// let x = 100;
// let y = 100;
// let r = 50;
// function draw() {
// 	background(0);
// 	ellipse(x, y, r*2, r*2);
// 	x = x + xchange;
// 	y = y + ychange;
//
// 	fill(255);
// 	if (x >= 1000 || x < r) {
// 		xchange = -xchange
// 	}
// 	if (y >= 600 || y < r) {
// 		ychange = -ychange
// 	}
// 	if (mouseIsPressed) {
// 		x = mouseX;
// 		y = mouseY;
// 	}
//
// }


let change = 5;
let x = 0;
function draw() {
	background(0);
	if (x >= 1000) {
		change = -5;
	}
	else if (x <= 0) {
		change = 5;
	}
	x = x + change;

	ellipse(x, 100, 100, 100);
}





//
//
//
//
//
//
// let i = 10;
//
// while (i < 20) {
// 	ellipse(10, 10, 10, 10);
// }
//
//
//
// let i = 11;
//
// if (i > 5) {
// 	if (i > 10) {
// 		ellipse(100, 100, 100, 100);
// 	}
// 	else if (i > 6) {
// 		ellipse(50, 50, 50, 50);
// 	}
// 	else {
// 		ellipse(25, 25, 25, 25);
// 	}
// }
//
// let j = 9;
// for (let i = 0; j < 10; i++) {
// 	ellipse(50, 50, 50, 50);
// }
//
//
//
// let i = 0;
// let j = 0;
// for (; i < 10; j++) {
// 	ellipse(50, 50, 50, 50);
// }
//
//
// let i = 10;
// let j = i;
//
// i = i + 10;
// // What is j right now?
//
// j = j + 5
// // What is j right now?
//
// j = i
// // What is j now?
//
//
//
//
//
//
