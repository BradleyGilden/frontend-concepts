#!/usr/bin/env node

/**
 * Async and Await
 * Author: Bradley Dillion Gilden
 * Date: 01-10-2023
 */

const postToWebPage = (data) => {
  console.log(data);
}
const getAllUserEmails = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonUserData = await response.json();
  const userEmailData = jsonUserData.map((user) => {
    return user.email;
  })
  // console.log(userEmailData);
  postToWebPage(userEmailData);
  return userEmailData;
};


getAllUserEmails();
