#!/usr/bin/env node

// setInterval - asynchronous function, executes every defined time interval

let count = 0;
interval = setInterval(() => {
        if (count == 10) {
            clearInterval(interval);
        }
        console.log(count);
        count++;
}, 1000)
