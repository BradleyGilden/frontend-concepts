// mixins allow us to create compositions which help us avoid complex hierarchies that come from inheritance

// Define a mixin
const myMixin = {
  logMessage() {
    console.log(this.message);
  },
};

// Create a constructor function
function MyClass(message) {
  this.message = message;
}

// Use Object.assign() to mix in the properties and methods of the mixin
Object.assign(MyClass.prototype, myMixin);

// Create an instance of MyClass
const myObject = new MyClass("Hello, mixins!");

// Now myObject has the logMessage method from the mixin
myObject.logMessage();
