// instead of worrying about passing on prototype objects to a sublclass we can use extends keyword

class Shape {
	constructor(color='black') {
		this.color = color;
	}
	default() {
		return 'I am a shape!';
	}
}

class Circle extends Shape {
	//define at the class level
	#radius;

	constructor(radius=1, color) {
		super(color);
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
		return `The area of this ${this.color} circle of radius ${this.#radius} is ${this.#area()}`;
	}
}

const circle = new Circle(5, 'blue');

console.log(circle);
console.log(circle.default());
console.log(circle.display());
