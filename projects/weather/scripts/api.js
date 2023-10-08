#!/usr/bin/env node

/**
 * Processes Api Calls
 * Author: Bradley Dillion Gilden
 * Date: 07-10-2023
 */

const getJson = async () => {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-29.8579&longitude=31.0292&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto');
  const data = await response.json();https://.open-meteo.com/v1/forecast?latitude=-29.8579&lo
  return data;
};

const proData = async() => {
  const jsonData = await getJson();
  console.log(jsonData.current_weather)

  setTimeout(() => {
    proData();
  }, 3000)
}
