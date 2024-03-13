const mainHeading = document.getElementById("main-heading");
mainHeading.innerHTML = "Fruit World";
mainHeading.style.color = "orange";

const headingWrapper = document.getElementById("header");
headingWrapper.style.backgroundColor = "green";

headingWrapper.style.borderBottom = "4px solid orange";

const fruitsInBasketHeading = document.getElementById("basket-heading");
fruitsInBasketHeading.style.color = "green";

const thanks = document.getElementById("thanks");

const paragraph = document.createElement("p");
paragraph.innerHTML = "Please visit us again";

thanks.append(paragraph);
