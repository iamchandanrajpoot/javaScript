async function happyMeal() {
  try {
    let orderPizzaResult = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const pizzaDelivered = Math.random() > 0.5;
        if (pizzaDelivered) {
          resolve("Pizza has been delivered!");
        } else {
          reject("Pizza delivery failed.");
        }
      }, 2000);
    });
    console.log(orderPizzaResult);
    let orderDessertResult = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const dessertDelivered = Math.random() > 0.5;
        if (dessertDelivered) {
          resolve("Dessert has been delivered!");
        } else {
          reject("Dessert delivery failed.");
        }
      }, 1000);
    });
    console.log(orderDessertResult);
  } catch (error) {
    console.error(error);
  }
}

happyMeal();
