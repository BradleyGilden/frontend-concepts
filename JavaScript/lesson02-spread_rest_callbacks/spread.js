#!/usr/bin/env node

main();

function main(){
    // spread operator - expands interable(array, string) into arguments
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(...numbers);
    console.log(`sum of ${numbers.join(' ')}: `, addvar(...numbers));
}

// adds variable number of arguments
function addvar(...args){
    let sum = 0;
    for (let num of args)
        sum += num;
    return sum;
}
