/*
Classical Inheritance:

Class-Based:
	Uses classes as blueprints for objects.
	Objects are instances of classes.

Hierarchical Structure:
	Organized in a tree-like hierarchy.
	Subclasses inherit from superclasses.

Instances:
	Objects are instances of classes.
	Inheritance is typically achieved through keywords like extends in languages like Java or C++.

Multiple Inheritance:
	Supports multiple inheritance in some languages.

------------------------------------------------------------------------------

Prototypal Inheritance (JavaScript):

Object-Based:
	Based on objects, not classes.
	Objects can inherit directly from other objects.

Chain of Prototypes:
	Each object has a prototype.
	Objects inherit properties and behaviors from their prototypes, forming a chain.

Dynamic:
	Objects can be extended or modified at runtime.
	Properties and methods can be added or removed.

No Classes (Pre-ES6):
	JavaScript does not have native class support (prior to ES6).
	Uses constructor functions and prototypes for inheritance.
 */

// N.B think of prototype as the parent object

// circle = new Cirlcle() and cirlce.__proto__ = Circle.prototype ........ but __proto__ is deprecated

function Circle(radius=1) {
	this.radius = radius;
  this.area = function() {
		return 2 * Math.PI * Math.pow(this.radius, 2);
	};
};

// prototype members vs instance members

// In the class above, if you have 1000 objects of Circle() we will have 1000 copies of the area() function, to avoid this:

function Circle2(radius=1) {
	// instance members
	this.radius = radius;
};
// this avoids multiple copies of the same function being inherited
// prototype members
Circle2.prototype.area = function() {
	return 2 * Math.PI * Math.pow(this.radius, 2);
};
