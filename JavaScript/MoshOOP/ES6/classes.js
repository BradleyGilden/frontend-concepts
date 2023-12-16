// classes declarations are not hoisted to the top like functions, ensure they are above the use case
class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	// this method is automatically defined in the prototype
	area() {
		return Math.PI * Math.pow(this.radius, 2);
	}
}

const circle = new Circle(5);

console.log("radius:", circle.radius+"\narea:", circle.area());
