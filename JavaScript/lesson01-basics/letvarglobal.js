#!/usr/bin/env node

/*
| VARIABLE |                          SCOPE                           |
|----------|----------------------------------------------------------|
|   let    | variables limited to block {}                            |
|   var    | variables limitied to function(){}                       |
|  global  | declared outside function (if it's a var, it will change |
|----------| a windows properties)                                    |
*/

let i; //global i

count(10);
count2(20);

function count(num){
    for (i = 0; i < num;)
        i++;
}

console.log(i)

// for (let j = 0; j < 10;)
// {
//     j++;
// }
// console.log(j) // j is not defined outside the for loop

for (var j = 0; j < 10;)
    j++;

console.log(j)

function count2(num){
    for (var i = 0; i < num;)
        i++;
}

console.log(i) //still is 10 since var i does not exist outside function scope
