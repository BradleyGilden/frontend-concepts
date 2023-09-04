#!/usr/bin/env node

//useful methods
let myname="Bradley Gilden"

console.log("length: ", myname.length)
console.log("charAt(0): ", myname.charAt(0)); //charAt returns "" when out of bounds
console.log("last index of l: ", myname.lastIndexOf("l"));
console.log("uppercase: ", myname.toUpperCase())
console.log("lowercase: ", myname.toLowerCase())

myname = "    Bradley Gilden    "
console.log("trimmed: ", myname.trim())
console.log("replace ' ' with '-': ", myname.replace(/\s+/g, '-'))

//change cool -> pool
word = "cool"
console.log("before: ", word)
word = word.split('')
word[0] = 'p'
word = word.join('')
console.log("afer: ", word)

word = "Barry Chopsticks"

//slicing
console.log(word.slice(6))
console.log(word.slice(0, 5))

//method chaining (calling method one after the other)

console.log(word.charAt(4).toUpperCase())

//if statements are same as c,c++, java

//toLocaleString() - returns language sensitive representation of data

let num = 123456.789

console.log(`${num} represented with en-US: `, num.toLocaleString("en-US"))
console.log(`${num} represented with hi-IN: `, num.toLocaleString("hi-IN"))
console.log(`${num} represented with de-DE: `, num.toLocaleString("de-DE"))

console.log(`${num} en-US style: `, num.toLocaleString("en-US", {style: "currency", currency: "USD"}))

