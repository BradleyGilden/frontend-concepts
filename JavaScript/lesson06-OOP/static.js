#!/usr/bin/env node

//static - allows us to create class variables/methods that can only be accessed
//         by the class

class Car {
    //class attribute
    static carCount = 0;

    constructor(){
        Car.carCount++;
    }

    //class method
    static displayNum(){
        console.log(Car.carCount)
    }
}

const c1 = new Car();
const c2 = new Car();
const c3 = new Car();

console.log(Car.carCount)
Car.displayNum()
