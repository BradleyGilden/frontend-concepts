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
  const error = true;
  if (!error) {
    resolve('Yes! resolved the promsie.');
  } else {
    reject('No! rejected the promise.');
  }
});

console.log(myPromise);

myPromise.then(value => {
  return value + 1; // returns to new value
})
  .then(newValue => {
    console.log(newValue); // chained thenables
  })
  .catch(error => {
    console.log(error);
  });
