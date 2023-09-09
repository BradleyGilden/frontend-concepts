#!/usr/bin/env node




let currentTime = new Date()
let countDown = new Date("09/11/2023 06:00:00")

let hr = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();


let sec2;
let min2;
let hr2;
interval = setInterval(time, 1000)

document.getElementById('display').innerHTML = `${ZeroPadding(hr)}:${ZeroPadding(min)}:${ZeroPadding(sec)}`;

function time(){
    currentTime.setSeconds(currentTime.getSeconds() + 1)
    hr = currentTime.getHours();
    min = currentTime.getMinutes();
    sec = currentTime.getSeconds();

    difference = countDown - currentTime;
    let s2 = difference / 1000;
    let m2 = s2 / 60;
    let h2 =  m2 / 60;

    hr2 = Math.floor(h2);
    min2 = Math.floor((h2 - hr2) * 60);
    sec2 = Math.floor((h2 - hr2 - (min2/60)) * 60 * 60)

    document.getElementById('display').innerHTML = `${ZeroPadding(hr)}:${ZeroPadding(min)}:${ZeroPadding(sec)}`;
    document.getElementById('countdown').innerHTML = `${ZeroPadding(hr2)}:${ZeroPadding(min2)}:${ZeroPadding(sec2)}`;

    if (difference <= 0) {
        clearInterval(interval); // Stop the interval when the countdown reaches its target
}
    
}


function ZeroPadding(number){
    return String(number).padStart(2, '0');
}
