// instead of repeating the Object.create() process every time we want inherit a class, we can create a function for it

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape(color="black"){
	this.color = color;
};

Shape.prototype.default = function(){
	return 'I am a shape';
};

function Circle(radius=1, color){
	Shape.call(this, color);
	this.radius = radius;
}
function Square(side=1, color) {
	Shape.call(this, color);
	this.side = side;
}

// inheriting Shape methods
extend(Circle, Shape);
extend(Square, Shape);

Circle.prototype.area = function() {
	return 2 * Math.PI * Math.pow(this.radius, 2);
};

Square.prototype.area = function() {
	return this.side * this.side;
}
