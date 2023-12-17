// weakMaps are another way of implementing private members

const _radius = new WeakMap();
const _area = new WeakMap();

class Circle {
	constructor(radius) {
		// set private attribute for instance
		this.radius = radius;
		// we set the private function
		_area.set(this, () => {
			return Math.PI * Math.pow(radius, 2);
		})
	}

	// reveal it with a public one
	area() {
		return _area.get(this)();
	}
}

const circle = new Circle(5);

console.log("radius:", circle.radius+"\narea:", circle.area());
