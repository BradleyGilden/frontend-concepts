#!/usr/bin/env node

//sort - returns sorted array
//     in sort(func) and func(a, b) returns (-), then a should become before b
//     else a should come after b

let i = 0;
main();
function main(){
    arr = [23, 4, 34, 6, 64, 543, 3];
    arr2 = arr.slice();  // creating a copy of arr
    asc = arr.sort(ascendOrd);
    desc = arr2.sort(descendOrd);
    console.log("Ascending Order:")
    asc.forEach(print);
    i = 0;
    console.log("\nDescending Order:");
    desc.forEach(print);
}

function ascendOrd(a, b){
    return a - b;
}

function descendOrd(a, b){
    return b - a;
}

function print(item){
    console.log(`item[${i}]: ${item}`);
    i++;
}
