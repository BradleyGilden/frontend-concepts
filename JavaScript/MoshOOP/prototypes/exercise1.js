function HtmlElement() {
	this.click = function() {
		return 'clicked';
	};

};

HtmlElement.prototype.focus = function() {
	return 'focused';
};

// const element = new HtmlElement();

// console.log(element);
// console.log(element.focus());
// console.log(element.click());

function HtmlSelectElement() {
	this.items = [];
	this.addItem = function(item) {
		this.items.push(item);
	}
	this.removeItem = function(item) {
		this.items.splice(this.items.lastIndexOf(item), 1);
	}
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
