#!/usr/bin/env node

function Circle(radius) {
	// private
	let location = {x: 0, y: 0};
	// public
	this.radius = radius;
	this.area = Math.PI * Math.pow(this.radius, 2);


	// define getter and setter
	Object.defineProperty(this, 'location', {
		get: function() {
			return location;
		},
		set: function(value) {
			location = value;
		}
	});
}

const circle = new Circle(5);
console.log(circle.area);
console.log(circle.location);
circle.location = {x: 1, y: 1}
console.log(circle.location);
