#!/usr/bin/env node

/**
 * returns relative path of icon depending on WMO code.
 * Author: Bradley Dillion Gilden
 * Date: 14-10-2023
 */

export default function (wmo, isDay) {
  const pCloudy = 2;
  const cloudy = 3;
  const fog = [45, 48];
  const drizzle = [51, 53, 55, 56, 57];
  const rain = [61, 63, 65, 66, 67, 80, 81, 82, 85, 86];
  const snow = [71, 73, 75, 77];
  const thunder = [95, 96, 99];

  if (wmo == pCloudy) {
    if (isDay) {
      return '../imgs/wicons/p_cloudy2.png';
    } else {
      return '../imgs/wicons/mooncloud.png';
    }
  } else if (wmo == cloudy) {
    if (isDay) {
      return '../imgs/wicons/cloudy.png';
    } else {
      return '../imgs/wicons/mooncloud.png';
    }
  } else if (fog.includes(wmo)) {
    return '../imgs/wicons/fog.png';
  } else if (drizzle.includes(wmo)) {
    return '../imgs/wicons/drizzle.png';
  } else if (rain.includes(wmo)) {
    return '../imgs/wicons/rain.png';
  } else if (snow.includes(wmo)) {
    return '../imgs/wicons/snow.png';
  } else if (thunder.includes(wmo)) {
    return '../imgs/wicons/lightning.png';
  } else {
    if (isDay) {
      return '../imgs/wicons/sunny.png';
    } else {
      return '../imgs/wicons/moon.png';
    }
  }
}
