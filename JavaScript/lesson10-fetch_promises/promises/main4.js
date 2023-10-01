#!/usr/bin/env node

/**
 * Async and Await
 * Author: Bradley Dillion Gilden
 * Date: 01-10-2023
 */

const myUsers = {
  userList: []
};

const myCoolFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const JsonUserData = await response.json();
  return JsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
