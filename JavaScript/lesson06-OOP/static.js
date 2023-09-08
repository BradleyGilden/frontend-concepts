#!/usr/bin/env node

//static variable - allows us to create class variables that can only be accessed
//                  by the class

class Car {
    static carCount = 0;

    constructor(){
        Car.carCount++;
    }
}

c1 = new Car();
c2 = new Car();
c3 = new Car();

console.log(Car.carCount)
