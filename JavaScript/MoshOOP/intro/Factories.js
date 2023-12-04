// To avoid duplication of objects, we can create a function that returns objects with given parameters using
// a "Factory or constructor function"

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
