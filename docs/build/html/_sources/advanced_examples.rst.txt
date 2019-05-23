#############
More Examples
#############

.. toctree::
   :maxdepth: 2
   :caption: More Examples

Example 1: Sine Wave
====================

y = A * sin(kx - phi),

A = Amplitude,
k = Phase Difference between adjacent particles,
x = Position of the particle,
phi = Phase


Example 2: Brownian Motion
==========================

Brownian motion is random motion of particles.
We will simulate random motion by giving particles an a random initial velocity.
After that, each time draw is called, we will apply a random acceleration to the particle.

We will use pVectors to represent both:
::
   velocity.add(acceleration);


Other Examples
==============
* Patterns: *image to draw with a software tool which responds to the speed of the mouse.*
* Simulating the solar system.
* Making a simple pendulum.
* Colliding Spheres.
* Simulating free fall in different materials.
* **Snake**
