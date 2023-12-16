//static methods are utility methods that don't act on the classes data(no this context)

class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	// this method is automatically defined in the prototype
	area() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}

const circle = Circle.parse('{"radius": 5}');

console.log(Circle);
console.log(circle.area());
