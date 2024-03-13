function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Water boiled");
    }, 2000);
  });
}
function addCoffeePowder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Added coffee powder");
    }, 5000);
  });
}
function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Brewed coffee");
    }, 1000);
  });
}
function haveCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Enjoying my coffee");
    }, 3000);
  });
}

// ------------------------
boilWater()
  .then((value) => {
    console.log(value);
    return addCoffeePowder();
  })
  .then((value) => {
    console.log(value);
    return brewCoffee();
  })
  .then((value) => {
    console.log(value);
    return haveCoffee();
  })
  .then((value) => {
    console.log(value);
  });
