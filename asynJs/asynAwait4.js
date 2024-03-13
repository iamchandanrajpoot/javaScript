async function picnicReady() {
  // Write your code here'
  try {
    const carResult = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const carReady = Math.random() > 0.5;

        if (carReady) {
          resolve("Car is ready");
        } else {
          reject("Error: Car needs maintenance");
        }
      }, 2000);
    });

    const packForPicnicResult = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const itemsPacked = Math.random() > 0.5;

        if (itemsPacked) {
          resolve("Packed everything for picnic");
        } else {
          reject("Error: Not have some essentials");
        }
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
}

picnicReady();
