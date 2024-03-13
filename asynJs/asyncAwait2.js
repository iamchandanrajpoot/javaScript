// Write your code here:

async function checkWeather() {
  try {
    let result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSunny = Math.random() > 0.5;
        if (isSunny) {
          resolve("Let us go for picnic");
        } else {
          reject("Error: It is cloudy");
        }
      }, 3000);
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkWeather();
