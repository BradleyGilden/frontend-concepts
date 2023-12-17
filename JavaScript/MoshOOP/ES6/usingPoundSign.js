// The simplest implementation of private method is using pound sign

class Circle {
	//define at the class level
	#radius;

	constructor(radius) {
		this.#radius = radius;
	}

	// this method is automatically defined in the prototype
	#area() {
		return Math.PI * Math.pow(this.#radius, 2);
	}

	display() {
		return `The area of a circle of radius ${this.#radius} is ${this.#area()}`;
	}
}

const circle = new Circle(5);

console.log(circle.display());

console.log(circle);
