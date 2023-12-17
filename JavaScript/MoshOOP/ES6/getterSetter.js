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

	get radius() {
		return this.#radius;
	}

	set radius(value) {
		if (typeof value === 'number') {
			this.#radius = value;
		} else {
			throw new Error('A radius value must be of type Number');
		}
	}

	display() {
		return `The area of a circle of radius ${this.#radius} is ${this.#area()}`;
	}
}

const circle = new Circle(5);

try {
	console.log(circle.display());
	circle.radius = 10;
	console.log(circle.display());
	circle.radius = "hey";
} catch (err) {
	console.log(err);
}
