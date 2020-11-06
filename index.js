const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

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

// fetchISSFlyOverTimes({ latitude: 43.7687, longitude: -79.4109 }, (error, flyOverTime) => {
//   if (error) {
//     console.log("It didn't work! No fly over times found.", error);
//     return;
//   }

//   console.log('It worked! Fly over times:', flyOverTime);
// });

const printPassTimes = flyOverTimes => {
  for (const time of flyOverTimes) {
    const date = new Date(time.risetime * 1000);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`)
  }

}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});