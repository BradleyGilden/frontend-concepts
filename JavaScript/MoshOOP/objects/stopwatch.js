#!/usr/bin/env node

/* This exercise has the following methods:
	public methods:
	obj.start() - starts stop watch
	            - if started again without stopping first it will throw an error
	obj.stop() - stops stop watch
	            - if stopped again without starting first it will throw an error
	obj.reset() - resets elapsed time to 0
	            - if started again without stopping first it will throw an error

	properties:
	obj.duration - displays

	N.B this is my own solution without looking at the official solution
*/

function StopWatch() {
	let duration = 0;
	let startTime = 0;
	let endTime = 0;
	let started = false;

	this.start = function () {
		if (started) {
			throw Error("stop watch has already started");
		}
		startTime = new Date();
		started = true;
	};

	this.stop = function () {
		if (!started) {
			throw Error("stop watch has already stopped");
		}
		endTime = new Date();
		duration += (endTime - startTime)/ 1000;
		started = false;
	};

	this.reset = function () {
		duration = 0;
	};

	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		}
	});
}

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
