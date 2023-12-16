/*
Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year.
Include a method to display vehicle details.
Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an ...
additional property for the number of doors.
Override the display method to include the number of doors.
 */

function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
};

Vehicle.prototype.display = function() {
	console.log(`
		Vehicle Description:
		\tmake: ${this.make}
		\tmodel: ${this.model}
		\tyear: ${this.year}
	`);
};

function Car(make, model, year, doors) {
	Vehicle.call(this, make, model, year);
	this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.display = function() {
	console.log(`
		Vehicle Description:
		\tmake: ${this.make}
		\tmodel: ${this.model}
		\tyear: ${this.year}
		\tdoors: ${this.doors}
	`);
};

const car = new Car('535I', 'BMW', '2011', 4);

car.display();
