function checkWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Let us go for picnic");
      } else {
        reject("Error: It is cloudy");
      }
    }, 3000);
  });
}

checkWeather()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
