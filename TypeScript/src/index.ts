// main primitive types
let id: number = 5;
let company: string = 'My name is';
let isPublished: boolean = true;
console.log('ID:', id);

let ids: number[] = [1, 2, 3];

//ids.push('hey') gives an error

/******************************************** tuple ********************/
// allows us to specify exact types in array
let person: [number, string, boolean] = [1, 'one', true]


// tuple  array
let employee: [number, string] []

employee = [
    [1, "john"],
    [2, "jill"],
    [3, "jack"]
]

/************************************* Union types *************************/
// can be a string or number
let pid: string | number;
pid = 22;
pid = 'twenty two';

// Enum - useful when you have a fixed set of values that a variable can take, and you want to give those values human-readable names
enum Direction {
  Up,
  Down,
  Left,
  Right
}
// you can initialize the values as well
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

console.log(Direction.Up);
console.log(Direction.Left);

console.log(Direction2.Up);
console.log(Direction2.Left);

/****************************** Objects ******************************/
const user: { id: number, name: string } = {
  id: 1,
  name: 'my name'
}

/*********************** Custom Types *****************************/

type User = {
  id: number,
  name: string
}

const user2: User = {
  id: 1,
  name: 'my name'
}

console.log(user, '=', user2);

type Point = number | string;

const p1: Point = 1;
const p2: Point = '1.22'

/****************************** Type Assertion ********************************/
// explicitly tell compiler to treat a variable as a specific type
let cid: any = 1;
let customerId = <number>cid;
// or
// let customerId = cid as number

/******************************* functions *****************************/
//              param type             return type
function addNum(x: number, y: number): number {
  return x + y;
}
//                               no return
function greet(message: string): void {
  console.log(message);
}

/******************************** Interfaces ****************************/
// creates interfaces for *objects*

interface UserInterface {
  readonly id: number, // prevents property from being altered
  name: string,
  age?: number,   // optional property
}

const user3: UserInterface = {
  id: 1,
  name: 'my name'
}

// creates function interfact
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x + y; 

/*********************** classes *************************************/

// we can use an interface for the class (not necessary)

interface PersonInterface {
  // you can't add private and protected properties to the interface
  name: string,
  register(): string
}

class Person implements PersonInterface {
  // set to private ( can only use in class )
  private id: number
  // set to protected ( can only access in class and inherited classes )
  protected pid: number
  // default public property
  name: string

  constructor(id: number, pid: number, name: string) {
    this.id = id
    this.pid = pid
    this.name = name
  }

  register(): string {
      return `my name is ${this.name}`;
  }
}

/****************************** Generics  ***********************************/
// creates reusable components

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(['1', '2', '3', '4']);

// numArray.push('hey') will give an error because numArray was created with a number array
