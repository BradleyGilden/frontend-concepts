#!/usr/bin/env node

// setTimeout - asynchronous function (function that is not executed sequentially)
//              executes after specific amount of miliseconds


let delay = setTimeout(() => console.log('Here I am!'), 5000)
console.log('This is a 5 second delay')

//you can use clearTimeout(delay) to clear function while it's executing
