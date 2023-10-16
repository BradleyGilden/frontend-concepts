#!/usr/bin/env node

/**
 * Processes Api Calls
 * Author: Bradley Dillion Gilden
 * Date: 07-10-2023
 */
import WMO from './wmo.json' assert {type: 'json'};
import getIconPath from './icon_path.js';

/******* Returns JSON data as an object {data} ********/
const getJson = async () => {
  const response = await fetch(
  'https://api.open-meteo.com/v1/forecast?'+
  'latitude=-29.8579&longitude=31.0292'+
  '&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode,windspeed_10m,precipitation_probability'+
  '&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m'+
  '&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_mean,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant,sunrise,sunset'+
  '&timezone=auto'
  );
  const data = await response.json();
  if (data.error) {
    console.log(data.reason);
  }
  console.log('current', data.current);
  console.log('daily', data.daily);
  return data;
};

/******* Processes Json Data for current weather data *************/
const todayData = async () => {
  const date = new Date();
  const maxTemp = document.querySelector('.widget__temp-max');
  const minTemp = document.querySelector('.widget__temp-min');
  const sunrise = document.querySelector('.stats__date-sunrise');
  const sunset = document.querySelector('.stats__date-sunset')
  const comment = document.querySelector('.widget__description2');
  const prec = document.querySelector('.stats__prec-value2');
  const prec_hrs = document.querySelector('.stats__prec-hours');
  const wind = document.querySelector('.stats__wind-value2');
  const wind_dir = document.querySelector('.stats__wind-direct');
  const icon = document.querySelector('.widget__icon2');

  //time until next api call, data updates every 15 mins on open-meteo
  let timeout;
  let daily;
  let rise_hrs;
  let set_hrs;

  if (date.getHours()) {
    timeout = (23 - (date.getMinutes() % 23)) * 3600000 + 3600000;
  } else {
    timeout = 24 * 3600000;
  }

  const jsonData = await getJson();
  daily = jsonData.daily;

  rise_hrs = new Date(daily.sunrise[0]);
  set_hrs = new Date(daily.sunset[0]);

  icon.style.backgroundImage = `url('${getIconPath(daily.weathercode[0], 1)}')`
  maxTemp.textContent = Math.round(daily.temperature_2m_max[0]).toString() + '°C';
  minTemp.textContent = Math.round(daily.temperature_2m_min[0]).toString() + '°C';
  prec.textContent = 'precipitation: ' + Math.round(daily.precipitation_probability_mean[0]).toString() + '%';
  prec_hrs.textContent = 'duration: ' + Math.round(daily.precipitation_hours[0]).toString() + 'hr/s';
  sunrise.textContent = `sunrise: ${rise_hrs.getHours().toString().padStart(2, '0')}:${rise_hrs.getMinutes().toString().padStart(2, '0')}`;
  sunset.textContent = `sunset: ${set_hrs.getHours().toString().padStart(2, '0')}:${set_hrs.getMinutes().toString().padStart(2, '0')}`;
  comment.textContent = WMO[daily.weathercode[0]];
  wind.textContent = 'wind speed: ' + Math.round(daily.windspeed_10m_max[0]).toString() + 'kn';
  wind_dir.textContent = 'direction: ' + Math.round(daily.winddirection_10m_dominant[0]).toString() + '°';

  setTimeout(() => {
    todayData();
  }, timeout);
};

/******* Processes Json Data for current weather data *************/
const currentData = async () => {
  const date = new Date();
  const temp = document.querySelector('.widget__text-temp');
  const feel = document.querySelector('.widget__text-feel');
  const updated = document.querySelector('.stats__date-value');
  const comment = document.querySelector('.widget__text-description');
  const prec = document.querySelector('.stats__prec-value');
  const wind = document.querySelector('.stats__wind-value');
  const icon = document.querySelector('.widget__icon');

  //time until next api call, data updates every 15 mins on open-meteo
  const timeout = (15 - (date.getMinutes() % 15)) * 60000;
  let current;
  let ctime;

  const jsonData = await getJson();
  current = jsonData.current;
  // get time of data recording from json data
  ctime = new Date(current.time);
  icon.style.backgroundImage = `url('${getIconPath(current.weathercode, current.is_day)}')`
  temp.textContent = Math.round(current.temperature_2m).toString() + '°C';
  feel.textContent = 'RealFeel ' + Math.round(current.apparent_temperature).toString() + '°C';
  prec.textContent = 'precipitation: ' + Math.round(current.precipitation_probability).toString() + '%';
  updated.textContent = `updated at: ${ctime.getHours().toString().padStart(2, '0')}:${ctime.getMinutes().toString().padStart(2, '0')}`;
  comment.textContent = WMO[current.weathercode];
  wind.textContent = 'wind speed: ' + Math.round(current.windspeed_10m).toString() + 'kn';

  setTimeout(() => {
    currentData();
  }, timeout);
};

currentData();
todayData();
