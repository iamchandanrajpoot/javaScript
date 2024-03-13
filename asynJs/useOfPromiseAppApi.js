const projectorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Projector rented successfully");
    } else {
      reject("Error: Projectors out of stock");
    }
  }, 1000);
});
const pizzasPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Pizzas delivered at time");
    } else {
      reject("Error: Pizzas not delivered on time");
    }
  }, 1000);
});
const friendsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Both friends available");
    } else {
      reject("Error: Both friends not available");
    }
  }, 1000);
});

Promise.any([projectorPromise, pizzasPromise, friendsPromise])
  .then((results) => {
    console.log(results);
    // for (let result of results) {
    //   console.log(result);
    // }
  })
  .catch((err) => {
    console.error(err);
  });
