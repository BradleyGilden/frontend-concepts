// implement a stack using ES6 classes

class Stack {
	#list;
	#count;
	constructor() {
		this.#count = 0;
		this.#list = [];
	}

	get count() {
		return this.#count;
	}

	push(obj) {
		this.#list.push(obj);
		this.#count++;
	}

	peek() {
		if (this.#count === 0) {
			throw new Error('Stack is Empty');
		} else {
			return this.#list[this.count - 1];
		}
	}

	pop() {
		if (this.#count === 0) {
			throw new Error('Stack is Empty');
		} else {
			this.#count--;
			return this.#list.pop();
		}
	}
}

const s = new Stack();

try {
	s.push('a');
	console.log(s.count);
	s.push('b');
	console.log(s.count);
	console.log(s.peek());
	s.pop()
	console.log(s.peek());
	s.pop();
	s.peek();

} catch (err) {
	console.log(err);
}
