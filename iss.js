//https://api.ipify.org?format=json

const request = require('request');

const fetchMyIP = (callback) => {
  const ipURL = "https://api.ipify.org?format=json";

  request(ipURL, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(error, ip);
  });

};

const fetchCoordsByIp = (ip, callback) => {
  request(`http://ip-api.com/json/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.status === "fail") {
      const msg = `Status ${data.status} when fetching coordinates for IP. Message: ${data.message}`;
      callback(`${msg}`, null);
      return;
    }

    const coords = {
      latitude: data.lat,
      longitude: data.lon
    };

    callback(error, coords);

  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = (coords, callback) => {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const flyOverTime = JSON.parse(body).response;
    callback(null, flyOverTime);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes };