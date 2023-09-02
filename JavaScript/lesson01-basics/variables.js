#!/usr/bin/env node
/**
 * long formed comment
 */

//short comment

console.log('First log on browser'); //see output in console
console.log("tying", "seperators");
console.log("Test " + 3 + ", trying concatenation");

// window.alert('SURPRISE!'); //pop up message

/**
 * variables
 * let: block-scope
 * const: block-scope
 * var: function-scope
 */

let name="Magne";
let age=18;
let sage="21"
let height=5.9;
let student=true;

console.log(`${name} ${age} ${height}ft, student=${student}`); //using format
console.log()

sage = sage + 1 //contcatenates 1 instead of adds
console.log(sage)
sage++  //converts to int and increments
console.log(sage)

//display output in DOM (Document object model)
document.getElementById("p1").innerHTML = "Hello from JS"
