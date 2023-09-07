#!/usr/bin/env node

// function expressions (arrow) - compact, alternative to function expression


const greeting = (message) => {
    console.log(message)
}
greeting("Better Call Saul");


let i = 0;
main();
function main(){
    arr = [23, 4, 34, 6, 64, 543, 3];
    arr2 = arr.slice();  // creating a copy of arr
    asc = arr.sort((a, b) => a - b);
    desc = arr2.sort((a, b) => b - a);
    console.log("Ascending Order:")
    asc.forEach(item => {
        console.log(`item[${i}]: ${item}`);
        i++;
    });
    i = 0;
    console.log("\nDescending Order:");
    desc.forEach(item => {
        console.log(`item[${i}]: ${item}`);
        i++;
    });
}
