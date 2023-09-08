#!/usr/bin/env node

//iheritence - allows classes to build upon other classes behaviour and properties

class Animal {

    alive = true;
    name = this.constructor.name;

    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

//Fish inherits Animal
class Fish extends Animal {

    swim(){
        console.log(`this ${this.name} is swimming`);
    }
}

const a1 = new Animal();
const f1 = new Fish();

a1.sleep();
console.log()
f1.sleep();
f1.swim();
