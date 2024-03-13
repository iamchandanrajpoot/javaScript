const divs = document.querySelectorAll("div");

const subHeading = document.createElement("h3");
const textNode = document.createTextNode(
  "Buy high quality organic fruits online"
);
subHeading.appendChild(textNode);
subHeading.style.fontStyle = "italic";

document
  .getElementById("main-heading")
  .insertAdjacentElement("afterend", subHeading);

const para = document.createElement("p");
para.innerHTML = "Total fruits: 4";

para.id = "fruits-total";

document
  .getElementsByClassName("fruits")[0]
  .insertAdjacentElement("beforebegin", para);
