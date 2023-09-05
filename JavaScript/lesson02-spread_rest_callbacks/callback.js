#!/usr/bin/env node

//callback - function passed as an argument to another function
// similar to function pointers in c

main();

function main(){
    sum(displayConsole, 2, 3)
}

function sum(callBack, ...args){
    let sum = 0;
    for (let num of args)
        sum += num;
    callBack(sum);
}

function displayConsole(output){
    console.log("This is the sum: ", output)
}
