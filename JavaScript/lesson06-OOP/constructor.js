#!/usr/bin/env node

//constructor - accepts class arguments and is often used for initialization since
//              it is the first operation of the class


class Student {

    constructor(age, name, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    info(){
        console.log(`${this.name}, age ${this.age}, has a gpa of ${this.gpa.toFixed(1)}`)
    }
}

const james = new Student(18, 'James', 4.0)
james.info()
