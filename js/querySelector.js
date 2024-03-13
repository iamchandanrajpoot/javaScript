const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";
mainHeading.style.marginRight = "30px";

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";
basketHeading.style.marginLeft = "30px";

const fruitWrapper = document.querySelector(".fruits");
fruitWrapper.style.backgroundColor = "grey";
fruitWrapper.style.margin = "30px";
fruitWrapper.style.padding = "30px";
fruitWrapper.style.listStyle = "none";
fruitWrapper.style.borderRadius = "4px";

const fruits = document.querySelectorAll(".fruit");
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.backgroundColor = "red";
  fruits[i].style.margin = "5px";
  fruits[i].style.padding = "5px";
  fruits[i].style.borderRadius = "4px";

  if (i % 2 !== 0) {
    fruits[i].style.color = "white";
    fruits[i].style.backgroundColor = "red";
  } else {
    fruits[i].style.backgroundColor = "white";
  }
}
