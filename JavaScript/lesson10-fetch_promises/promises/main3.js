#!/usr/bin/env node

/**
 * Pending state of promises
 * Author: Bradley Dillion Gilden
 * Date: 01-10-2023
 */

const users = fetch('https://jsonplaceholder.typicode.com/todos/1');

// pending

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      console.log(user);
    });
  });

console.log(users);
