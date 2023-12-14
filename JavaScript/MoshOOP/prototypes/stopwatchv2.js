function StopWatch() {
	this.duration = 0;
	this.startTime = 0;
	this.endTime = 0;
	this.started = false;
}

StopWatch.prototype.start = function () {
	if (this.started) {
		throw new Error("stop watch has already started");
	}
	this.startTime = new Date();
	this.started = true;
};

StopWatch.prototype.stop = function () {
	if (!this.started) {
		throw new Error("stop watch has already stopped");
	}
	this.endTime = new Date();
	this.duration += (this.endTime - this.startTime)/ 1000;
	this.started = false;
};

StopWatch.prototype.reset = function () {
	this.duration = 0;
};

function testStopWatch() {
	const sw = new StopWatch();
	console.log('started at:', sw.duration);
	sw.start();
	//sw.start(); again will throw an error
	setTimeout(function() {
		sw.stop();
		console.log('stopped at:', sw.duration);
	}, 3000);
}

testStopWatch();
