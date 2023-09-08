#!/usr/bin/env node

// creating an object in JavaScript:

const car = {
    model: 'Dodge Challenger',
    color: 'red',
    year: 2020,

    info : function(){  //this is a reference to a particular obj like self in Python
        console.log(this.model, this.color, this.year)
    }
}

console.log(car.model, car.color, car.year)
car.info()

// N.B if this is used outside an object it changes the windows properties
