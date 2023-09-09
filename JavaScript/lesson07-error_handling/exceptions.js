#!/usr/bin/env node

// exceptions: are a way to handle unexpected and expected errors in your code
// without it terminating by default

//custom exception
class DivisionByZero extends Error {
    //this class creates an error when a number exceeds 99
    constructor(message){
        super(message);
        this.name = 'DivisionByZero';
    }
}

try {
    let x = 5 / 0;
    if (x == Infinity || x == -Infinity)
        throw new DivisionByZero('dividing by zero is not permitted');
}

catch (error) {
    console.error(`${error.name}: ${error.message}`)
}

// try {
//     // Code that may throw an exception
// } catch (error) {
//     if (error instanceof TypeError) {
//       // Handle TypeError
//     } else if (error instanceof ReferenceError) {
//       // Handle ReferenceError
//     } else {
//       // Handle other errors
//     }
// }
