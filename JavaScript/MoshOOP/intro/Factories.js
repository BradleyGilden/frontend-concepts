// To avoid duplication of objects, we can create a function that returns objects with given parameters using
// a "Factory function"

function createCircle(radius, x=0, y=0, strokeColor='black', fill=false, fillColor='white') {
	return {
		radius,
		x,
		y,
		draw: function() {
		  ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2 * Math.PI);
			ctx.strokeStyle = strokeColor;
			ctx.stroke();
			if (fill) {
				ctx.fillStyle = fillColor;
				ctx.fill();
			}
			ctx.closePath();
		},
		clear: function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	};
}

// To draw the circle:
// let circ = createCircle(50, 250, 250, 'blue', true, 'red');
// circ.draw();
