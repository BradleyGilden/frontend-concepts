#!/usr/bin/env node

// function expressions - a function expression is a way to define a function as a
// value and assign it to a variable. This allows you to treat functions as
// first-class citizens in the language, just like any other data type.
// Function expressions are often used for creating anonymous functions or
// passing functions as arguments to other functions.

const add = function(x, y) {
    return x + y;
};

const result = add(2, 3)

console.log(result)
