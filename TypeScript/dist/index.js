"use strict";
// main primitive types
let id = 5;
let company = 'My name is';
let isPublished = true;
console.log('ID:', id);
let ids = [1, 2, 3];
//ids.push('hey') gives an error
/******************************************** tuple ********************/
// allows us to specify exact types in array
let person = [1, 'one', true];
// tuple  array
let employee;
employee = [
    [1, "john"],
    [2, "jill"],
    [3, "jack"]
];
/************************************* Union types *************************/
// can be a string or number
let pid;
pid = 22;
pid = 'twenty two';
// Enum - useful when you have a fixed set of values that a variable can take, and you want to give those values human-readable names
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// you can initialize the values as well
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction.Up);
console.log(Direction.Left);
console.log(Direction2.Up);
console.log(Direction2.Left);
/****************************** Objects ******************************/
const user = {
    id: 1,
    name: 'my name'
};
const user2 = {
    id: 1,
    name: 'my name'
};
console.log(user, '=', user2);
const p1 = 1;
const p2 = '1.22';
/****************************** Type Assertion ********************************/
// explicitly tell compiler to treat a variable as a specific type
let cid = 1;
let customerId = cid;
// or
// let customerId = cid as number
/******************************* functions *****************************/
//              param type             return type
function addNum(x, y) {
    return x + y;
}
//                               no return
function greet(message) {
    console.log(message);
}
const user3 = {
    id: 1,
    name: 'my name'
};
const add = (x, y) => x + y;
class Person {
    constructor(id, pid, name) {
        this.id = id;
        this.pid = pid;
        this.name = name;
    }
    register() {
        return `my name is ${this.name}`;
    }
}
/****************************** Generics  ***********************************/
// creates reusable components
