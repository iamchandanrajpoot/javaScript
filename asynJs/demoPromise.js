console.log("start"); //line 1

const promise1 = new Promise((resolve, reject) => {
  console.log(1); //line2
});

promise1.then((res) => {
  console.log(2); //line3
});

console.log("end"); //line4
