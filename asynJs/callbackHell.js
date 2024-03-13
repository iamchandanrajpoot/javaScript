function buyBike(callback1, callback2, callback3) {
  setTimeout(function () {
    console.log("Bought Royal Enfield Himalayan");

    callback1(callback2, callback3);
  }, 2000);
}

function planTrip(callback1, callback2) {
  setTimeout(function () {
    console.log("Trip to Ladakh planned");

    callback1(callback2);
  }, 1000);
}

function reachLadakh(callback) {
  setTimeout(function () {
    console.log("Reached Ladakh");

    callback();
  }, 1000);
}

function visitPangongLake() {
  setTimeout(function () {
    console.log("Visited Pangong Lake");
  }, 500);
}

buyBike(planTrip, reachLadakh, visitPangongLake);
