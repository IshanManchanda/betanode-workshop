############
Control Flow
############

.. toctree::
   :maxdepth: 2
   :caption: Control Flow

Conditionals
============
Conditionals allow programmers to perform certain tasks when a particular condition is met. They are a fundamental principle of programming.
Conditionals are a usually implemented through an if...else... structure.
They control behavior in JavaScript and determine whether or not pieces of code can run.

For example in javascript,
::
    if (hour < 12) {
        greeting = "Good Morning"
    } else if (hour < 17) {
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }

Loops
=====
Loops tell the computer to perform a certain task repeatedly, a certain number of times or until a condition is met.
Very often when you write code, you want the same block of code to run over and over again in a row.
Instead of adding several almost equal lines in a script we can use loops to perform a task like this.

There are two different kinds of loops in Javascript,

**for - loops through a block of code a specified number of times**
::
    for (var = start; var <= end; var = var + increment) {
            // code that is run multiple (end - start) times.
    }

To control the behaviour of the for loop we use an increment variable, in this case its 'var'.
**while - loops through a block of code while a specified condition is true.**
::
    while (var <= end_value) {
        // code that is executed until the above condition in met
    }

**The *do...while...* loop is variant of the while loop, it contains a block of code that is executed once, then a while loop is executed.,**
::
     do {
                // code that is executed once
         } while (var <= end_value) {
                // code that is executed multiple times.
         }

There are still other variation of loops such as the 'for...in...' loop, but they all follow the same basic syntax.