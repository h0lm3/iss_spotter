const request = require('request');

// Function to fetch the IP address
const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

// Function to fetch coordinates by IP
const fetchCoordsByIP = function(ip, callback) {
  const url = `https://ipwho.is/${ip}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const parsedBody = JSON.parse(body);
    if (!parsedBody.success) {
      const msg = `Success status was false. Server message says: ${parsedBody.message} when fetching for IP ${ip}`;
      return callback(Error(msg), null);
    }

    const { latitude, longitude } = parsedBody;
    callback(null, { latitude, longitude });
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
