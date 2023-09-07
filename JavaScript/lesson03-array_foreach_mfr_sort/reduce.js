#!/usr/bin/env node

//reduce - similar to python reduce(), reduces iterable to single value
// similar to function pointers in c

main();

function main(){
    let nums = [2, 43, 53, 2, 34, 4];
    let total = nums.reduce(count);
    console.log(total)
}

function count(total, num){
    return total + num;
}
