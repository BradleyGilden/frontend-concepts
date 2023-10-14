#!/usr/bin/env node

/**
 * Processes Api Calls
 * Author: Bradley Dillion Gilden
 * Date: 07-10-2023
 */
import WMO from './wmo.json' assert {type: 'json'};

const getJson = async () => {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-29.8579&longitude=31.0292&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto');
  const data = await response.json()
  if (data.error) {
    console.log(data.reason);
  }
  return data;
};

const currentData = async () => {
  const date = new Date();
  let temp = document.querySelector(".widget__text-temp");
  let feel = document.querySelector(".widget__text-feel");
  let updated = document.querySelector(".stats__date-value");
  let comment = document.querySelector(".widget__text-description");
  let prec = document.querySelector(".stats__prec-value");
  let wind = document.querySelector(".stats__wind-value");
  let timeout = (15 - (date.getMinutes() % 15)) * 60000;
  let current;
  let ctime;

  const jsonData = await getJson();
  console.log(jsonData.current)
  current = jsonData.current
  ctime = new Date(current.time);
  temp.textContent = Math.round(current.temperature_2m).toString() + "°C";
  feel.textContent = "feels like " + Math.round(current.apparent_temperature).toString() + "°C";
  prec.textContent = "precipitation: " + Math.round(current.precipitation).toString() + "mm";
  updated.textContent = `updated at: ${ctime.getHours().toString().padStart(2, '0')}:${ctime.getMinutes().toString().padStart(2, '0')}`;
  comment.textContent = WMO[current.weathercode];
  wind.textContent = "wind speed: " + Math.round(current.windspeed_10m).toString() + "kn";

  setTimeout(() => {
    currentData();
  }, timeout)
}

currentData();
