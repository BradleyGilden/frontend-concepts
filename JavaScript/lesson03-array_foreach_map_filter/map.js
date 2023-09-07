#!/usr/bin/env node

//map - applies callback function for each element in array
    //  AND returns a new array


main();

function main(){
    array = [1, 2, 3]
    sqarray = array.map(square)
    console.log(sqarray)
    console.log(array)
}

function square(num){
    return Math.pow(num, 2)
}
