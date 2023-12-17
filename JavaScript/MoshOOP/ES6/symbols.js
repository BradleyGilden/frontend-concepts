// to mimic private properties and methods we can use the primitive type Symbol
// A Symbol generates a unique identifier that is not easily accessed

const _radius = Symbol();
const _area = Symbol();
class Circle {
	constructor(radius) {
		this[_radius] = radius;
	}
	[_area]() {
		return Math.PI * Math.pow(this[_radius], 2);
	}
  display() {
    return `The area of a circle of radius ${this[_radius]} is ${this[_area]()}`;
  }
}

const circle = new Circle(5);

// get list of uniqe identifiers (values of _radius and _area)
const keys = Object.getOwnPropertySymbols(circle);

// show hidden
console.log(circle)
console.log(keys);
console.log(circle[keys[0]])
console.log(circle.display())
