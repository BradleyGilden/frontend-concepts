#!/usr/bin/env node



document.getElementById("submit").onclick = function(){
    main();
}
function main(){
    let input;

    header = document
    textbox = document.getElementById("enter")
    if (document.getElementById("ccheck").checked){
        input = textbox.value;
        input = Number(/d+/.test(input));
        input = celcius(input);
        input += "°C"
    }
    else {
        input = textbox.value;
        input = Number(/d+/.test(input));
        input = farenheight(input);
        input += "°F"
    }
    console.log(input);
    textbox.value = input;
}



function celcius(f){
    return (f - 32) * (5/9);
}

function farenheight(c){
    return (c * (9/5)) + 32
}
