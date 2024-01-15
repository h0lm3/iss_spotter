// index2.js
const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(body => console.log(body))
  .catch(error => console.log("It didn't work: ", error.message));
// index2.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body))
  .catch(error => console.log("It didn't work: ", error.message));
