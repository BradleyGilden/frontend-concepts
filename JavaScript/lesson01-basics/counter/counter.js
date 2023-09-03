#!/usr/bin/env node

let count=0

//get's onlick event of button
document.getElementById("decrease").onclick = function(){
    if (count != 0)
        count--;
    document.getElementById("number").innerHTML = count;

    if (count < 10)
        document.getElementById("number").style.color = "rgb(60, 168, 58)"
    else if (count >= 10 && count < 25)
        document.getElementById("number").style.color = "yellow"
    else if (count >= 25 && count < 50)
        document.getElementById("number").style.color = "orange"
    else
        document.getElementById("number").style.color = "red"
}

document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("number").innerHTML = count;

    if (count < 10)
        document.getElementById("number").style.color = "rgb(60, 168, 58)"
    else if (count >= 10 && count < 25)
        document.getElementById("number").style.color = "yellow"
    else if (count >= 25 && count < 50)
        document.getElementById("number").style.color = "orange"
    else
        document.getElementById("number").style.color = "red"
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("number").innerHTML = count;
    document.getElementById("number").style.color = "rgb(60, 168, 58)"
}

document.getElementById("reset").oncl
