function checkCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Car is ready");
      } else {
        reject("Error: Car needs maintenance");
      }
    }, 2000);
  });
}

function packForPicnic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Packed everything for picnic");
      } else {
        reject("Error: Not have some essentials");
      }
    }, 1000);
  });
}

checkCar()
  .then((value) => {
    console.log(value);
    return packForPicnic();
  })
  .then((value) => {
    console.log(value);
    console.log("Go for picnic");
  })
  .catch((error) => {
    console.log(error);
    console.log("Picnic cancelled");
  });
