###################
Classes and Objects
###################

.. toctree::
   :maxdepth: 2
   :caption: Classes and Objects

Object Oriented Programming
############################

OOP is a programming paradigm to make complicated code easier to write and understand,
this will be a very brief description of OOP.

OOP is a programming paradigm based on the concept of objects, which may contain contain data(characteristics) and
code in the form of procedures(behaviours) known as methods.

OOP contains two major parts,
* classes
* objects

A **class**, in object-oriented programing, is a code template for creating objects.
The template contains some basic characteristics/intial values and implementations of behaviour of an object.

An **object** refers to a particular instance of a class, where the oject can be a combination of Variables,
functions(methods) and data structures.
Really an object is just a data type with Polymorphism and Inheritance (Wikipedia them)

For all intensive purposes, we can understand **methods** as functions that perform certain instructions on an object,
the way to allow us the modify the behaviour of the object.

This will become the Wikipedia article on OOP soon, so this is all the theory.

*Imagine creating a video game character in code*

We could keep making variable to represent each characteristic, but that will get very cumbersome and unintuitive
once there is more than one character.

**So**, we use a class to create a structure for the definition of the character.
::
    class Character {
		constructor(name, level, max_health, current_health, max_speed, current_speed) {
			this.name = name;
			this.level = level;
			this.max_health = max_health;
			this.current_health = current_health;
			this.max_speed = max_speed;  // We could also use a ps.Vector object to represent velocity here
			this.current_speed = current_speed;
		}
	}

A constructor function initializes all the required characteristics of the class.

Continuing with our example,
::

    class Character {
		constructor(name, level, max_health, current_health, max_speed, current_speed) {
			this.name = name;
			this.level = level;
			this.max_health = max_health;
			this.current_health = current_health;
			this.max_speed = max_speed;  // We could also use a ps.Vector object to represent velocity here
			this.current_speed = current_speed;
		}

	    sprint() {
	        this.current_speed += 25
	    }

	    take_damage() {
	        this.current_health -= 25
	    }
	}
