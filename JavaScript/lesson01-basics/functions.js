#!/usr/bin/env node

main();

function main(){
    greet();
    count(10);
}


function greet(){
    console.log("hello")
}

function count(num){
    for (let i = 0; i <= num; i++)
        console.log(i)
}
