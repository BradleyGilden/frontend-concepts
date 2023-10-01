#!/usr/bin/env node

/**
 * Fetch API requires: Callbacks(convered), Promises, Thenables and Async/Await
 *
 * PROMISES:
 * 3 states -> Pending, Fulfilled, Rejected
 *
 * Author: Bradley Dillion Gilden
 * Date: 01-10-2023
 */

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve('Yes! resolved the promsie.');
  } else {
    reject('No! rejected the promise.');
  }
});

console.log(myPromise);

const nextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('My next promise: resolved!');
  }, 3000);
});

nextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  console.log(value);
});
