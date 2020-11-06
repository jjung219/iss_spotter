const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = passtimes => {
  for (const time of passtimes) {
    const date = new Date(time.risetime * 1000);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passtimes) => {
    printPassTimes(passtimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });