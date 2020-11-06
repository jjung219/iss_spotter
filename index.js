const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

// });

// fetchCoordsByIp("99.240.122.189", (error, coords) => {
//   if (error) {
//     console.log("It didn't work! No coordinates found.", error);
//     return;
//   }

//   console.log('It worked! Returned Coords:', coords);
// });

fetchISSFlyOverTimes({ latitude: 43.7687, longitude: -79.4109 }, (error, flyOverTime) => {
  if (error) {
    console.log("It didn't work! No fly over times found.", error);
    return;
  }

  console.log('It worked! Fly over times:', flyOverTime);
});