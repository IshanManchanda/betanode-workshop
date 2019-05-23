##############
Data Structures
##############

.. toctree::
   :maxdepth: 2
   :caption: Data Structures

Arrays
######

Arrays are a type of data structure in javascript. They are used to store multiple values into a single variable.
Eg,
::
    var array_name = [item1, item2, ...];

To access items in an array,
::
    let item1_value = array_name[0];
    // Here we put the index of the value we want to access in square brackets.

Using the same syntax to access items in an array, we are also able to change items.
::
    array_name[0] = 'some value'


Objects
#########

In the above context objects are a more general form of an array, the major difference is, instead of using index
values to get items, objects use the following syntax,
::
    // defining the object
    var person = {firstName: "John", lastName: "Doe"; age:34};

   // accessing items
   let fullName = person.firstName + person.lastName

Vectors
########

p5 has a builtin function that allows the definition of vectors. (An entity that has both, direction and magnitude,
which can be accessed with the mag() and heading() methods respectively.)
These are especially useful when one is simulating motion.
To create a vector,
::
    createVector([x], [y], [z])

Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc.
Instead, we'll need to do some "vector" math, which is made easy by the methods inside the p5.Vector class.

The p5.vector has many useful methods that we will use frequently.
Here are some listed

* toString()
* copy()
* add()  //to perform vector addition
* sub()
* mult()  //multiply the vector by a scalar
* div()
* mag()   // calculates magnitude of the vector
* magSq()  // xx + yy + zz
* dot()  // dot product
* cross  //cross product
* dist()
* normalize()
* heading()
* rotate()
* angleBetween()
* equals()
* random2D()
* random3D()
