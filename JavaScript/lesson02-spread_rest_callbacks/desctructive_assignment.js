#!/usr/bin/env node

/**
 * <module docstring>
 * Author: Bradley Dillion Gilden
 * Date: 23-09-2023
 */

let arr = [1, 2, 3, 4, 5, 6, 7];
let [arg1, arg2, ...arglist] = arr;

console.log(arg1, arg2, arglist)

console.log(arg1, arg2, arglist.reduce((v1, v2) => {return v1+v2;}))
