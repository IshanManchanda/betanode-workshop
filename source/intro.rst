************
Introduction
************

.. toctree::
   :maxdepth: 2
   :caption: Introduction

What is p5.js?
==============

p5.js is a JavaScript library. That's all you need to know.

Hello World!
============

Hello world is p5js is slightly different than in most other languages.
We draw a line from the Origin (0, 0) to a point (400, 400).
Type the following into your script.js file:
::
   function setup() {
       createCanvas(1000, 500);
   }

   function draw() {
       // Draw a line
       line(0, 0, 200, 200);
   }

In this snippet, we create 2 functions (more on that later): `setup` and `draw`.
When our script is run, the function setup is called and the code inside is executed.
This means the `createCanvas` line is called, which creates a canvas of width 1000 pixels and height 500 pixels.

Then, the `draw` function is called.
Inside the draw function, the `line` function is called which draws a line from the origin (0, 0) to a point (200, 200).

Variables
=========

Variables are containers that store data.
This containers can store any type of data, be it a name, a mobile number, an Aadhar number, an email address, and so on.

The basic syntax to create a variable is:
::
   let my_varaible_name = my_variable_value;

For example,
::
   let my_number = 7678300391;
   let my_email_id = 'ishanmanchanda70@gmail.com';

In Javascript, you can also create a variable by saying `var` instead of `let`.

'main' and 'setup'
==================

`main` and `setup` are special functions.


