// How far can the particles go from the center
let amplitude = 100;

// How fast does the wave travel
let rate_of_change_of_phase = 0.02;

// Initial phase
let phase = 0.0;

// Difference in phase between adjacent particles
let phase_difference = 0.15;

function setup() {
	createCanvas(1360, 600);
}

function draw() {
	background(0);

	// Increment phase each iteration
	phase += rate_of_change_of_phase;

	for (let i = 0; i < 68; i++) {

		// Calculate y = A sin(kx - phi)
		// A is the amplitude, k is the phase difference,
		// x is the position of our particle, and phi is the phase.
		y = amplitude * Math.sin(phase_difference * i - phase);

		// Draw particles
		ellipse(10 + 20 * i, 250 + y, 20, 20);
	}
}
