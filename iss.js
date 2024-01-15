
const request = require('request');

const fetchMyIP = function(callback) {
  // ... implementation of fetchMyIP ...
};

const fetchCoordsByIP = function(ip, callback) {
  // ... implementation of fetchCoordsByIP ...
};

const fetchISSFlyOverTimes = function(coords, callback) {
  // ... implementation of fetchISSFlyOverTimes ...
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(coords, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, nextPasses);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };
