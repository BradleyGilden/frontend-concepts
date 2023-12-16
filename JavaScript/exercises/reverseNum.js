// code reverses a number

function reverse(num) {
	return parseInt(num.toString().split('').reverse().join(''));
}

function reverseManual(num) {
	const numList = num.toString().split('');
	const size = numList.length;

	for (let i = 0, j = size - 1; i < Math.floor(size / 2); i++, j--) {
		[numList[i], numList[j]] = [numList[j], numList[i]];
	}

	return parseInt(numList.join(''));
}

console.log(typeof reverse(1234), reverse(1234));
console.log(typeof reverseManual(1234), reverseManual(1234));
