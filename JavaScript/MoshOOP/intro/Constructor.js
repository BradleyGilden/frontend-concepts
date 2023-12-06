// This is an alternative to factory functions, mimicking class's more traditionally than factory functions
function Circle(radius, x=0, y=0, strokeColor='black', fill=false, fillColor='white') {
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.draw = function() {
		  ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2 * Math.PI);
			ctx.strokeStyle = strokeColor;
			ctx.stroke();
			if (fill) {
				ctx.fillStyle = fillColor;
				ctx.fill();
			}
			ctx.closePath();
		};
		this.clear = function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		};
}

// To draw the circle:
// let circ = new Circle(50, 250, 250, 'blue', true, 'red');
// circ.draw
