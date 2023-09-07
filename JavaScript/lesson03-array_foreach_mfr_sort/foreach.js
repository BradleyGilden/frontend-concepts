#!/usr/bin/env node

//forEach - applies callback function for each element in array

main();
function main(){
    array = ["The", "big", "brown", "fox", "jumped", "over", "the", "moon"];
    console.log(array);
    array.forEach(seperate)
}

function seperate(item){
    item = item.split('')
    item = item.join(' ')
    console.log(item);
}
