
function Shape(){
};

Shape.prototype.default = function(){
	return 'I am a shape';
};

function Circle(radius=1){
	this.radius = radius;
}

// in the situation we want Circle to inherit from Shape:
Circle.prototype = Object.create(Shape.prototype);
// it overwrites the Circle constructor in prototype so we set it back
Circle.prototype.constructor = Circle;

// we then add circles custom prototypes
Circle.prototype.area = function() {
	return 2 * Math.PI * Math.pow(this.radius, 2);
};
