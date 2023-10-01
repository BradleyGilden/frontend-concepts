#!/usr/bin/env node

/**
 * request types GET/POST?PUT etc
 * Author: Bradley Dillion Gilden
 * Date: 01-10-2023
 */

const postToWebPage = (data) => {
  console.log(data);
}
const getAllUserEmails = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  const jsonJokeData = await response.json();
  // console.log(userEmailData);
  postToWebPage(jsonJokeData);
  return jsonJokeData;
};

getAllUserEmails();
