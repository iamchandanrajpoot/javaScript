// Write your code here:

async function boardingBus() {
  try {
    let result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Board the bus");
        } else {
          reject("Error: Bus is late.");
        }
      }, 3000);
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

boardingBus();

// Do not touch the code below:
//   module.exports = { boardingBus };
