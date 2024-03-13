function concertPassPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Pass received");
      } else {
        reject("Pass not received");
      }
    }, 3000);
  });
}

concertPassPromise()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
