#!/usr/bin/env node

document.getElementById("mybutton").onclick = function(){

    if (document.getElementById("checkme").checked)
        console.log("you are subbed")
    else
        console.log("you are not subbed")
}
