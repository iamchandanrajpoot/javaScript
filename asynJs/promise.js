function bookSearchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Book found");
      } else {
        reject("Book not found");
      }
    }, 3000);
  });
}

bookSearchPromise()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
