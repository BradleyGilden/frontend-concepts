#!/usr/bin/env node

main();

function main(){
    // this is how you define an array (similar to lists in python)
    let fruits = ['apple', 'orange', 'tomato']

    //c-like for
    for (let i = 0; i < fruits.length; i++){
        console.log(fruits[i])
    }

    //python-like for
    for (let names of fruits){
        console.log(names)
    }

    console.log("--------added---------")
    //append list
    fruits.push("banana")
    console.log(fruits[3])
    console.log("----------------------")
    //deletes end element
    fruits.pop()
    //adds element to beginning
    fruits.unshift("banana")
    console.log("unshifted:", fruits[0])
    fruits.shift("banana")
    //removes element from beginning
    console.log("shifted:", fruits[0])

    //extra
    // fruit.sort() sort in alphabetical order
    // fruit.sort().reverse() sort in reverse alphabetical order
}
