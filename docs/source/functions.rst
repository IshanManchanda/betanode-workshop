#########
Functions
#########

.. toctree::
   :maxdepth: 2
   :caption: Functions

What is a function?
====================

* A function is a subprogram designed to perform a particular task.
* Functions are executed when they are called. This is known as invoking a function.
* Values can be passed into functions and used within the function. This is done through arguments that the function may accept
* Functions can return a value. In JavaScript, if no return value is specified, the function will return `undefined`.
* Javascript contains some built-in functions, external libraries like p5 expand the set of these functions.

Defining a Function
====================

To define a function the basic syntactical structure is used,
::
    function name(parameters) {
        // code in the function
    }

Calling a Function
===================
Calling/Invoking a function asking it to run at the point at which you have called it. Think of it like excecuting a
keyboard shortcut, the function to make a new window is defined, and when the computer gets 'ctrl+N' it calls (runs) the new
window function.

Syntax,
::
    functionName(arguments);

If your function was defined without parameters,
::
    functionName();
