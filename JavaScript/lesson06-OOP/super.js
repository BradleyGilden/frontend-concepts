#!/usr/bin/env node

// super - used to invoke the constructor of a parent class

//custom print function that allows seperators
function print(sep, ...args){
    list = [];

    list.push(...args)

    for (let i = 0; i < list.length; i++)
    {
        if (i == list.length - 1){
            console.log(list[i]);
            break;
        }
        process.stdout.write(`${list[i]}${sep}`);
    }

}

class Student {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Junior extends Student {

    constructor(name, age, subjects){
        super(name, age);
        this.subjects = subjects;
    }
}

class Senior extends Junior {

    constructor(name, age, subjects, year){
        super(name, age, subjects);
        this.year = year;
    }
}

let subjects = ['physics', 'calculus', 'applied math', 'theology'];
const s1 = new Senior(`Gordan`, 22, subjects, 3);

print('\n', s1.name, s1.age, s1.subjects, s1.year)
