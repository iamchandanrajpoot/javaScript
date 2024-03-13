const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const submitBtn = document.getElementById("submit-btn");

// creating description element and added before submit button
const inputDesc = document.createElement("input");
inputDesc.setAttribute("type", "text");
inputDesc.setAttribute("placeholder", "Enter description");
form.insertBefore(inputDesc, submitBtn);
// -----------------------------

// listening event lister on submit todos
form.addEventListener("submit", function (e) {
  let inputText = document.getElementById("fruit-to-add");
  e.preventDefault();
  console.log(inputText.value);
  const li = document.createElement("li");
  //   const descPara = document.createElement("p");
  //   descPara.innerHTML = inputDesc.value;
  li.innerHTML =
    inputText.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">edit</button>' +
    `<p>${inputDesc.value}</p>`;

  li.className = "fruit";

  fruits.append(li);
});
// -----------------------------------------------

// handle delete todos here
fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    console.log("i am fire");
    const deleteElement = event.target.parentElement;
    fruits.removeChild(deleteElement);
  }
});

// -----------------------------------------

//   filtering functionality is implementd here

const filterElement = document.getElementById("filter");

filterElement.addEventListener("keyup", function (event) {
  const searchingText = event.target.value;

  console.log(searchingText.toLowerCase());
  const allFruits = document.getElementsByClassName("fruit");
  console.log(allFruits);

  for (const element of allFruits) {
    const elementText = element.textContent;

    if (!elementText.toLowerCase().includes(searchingText.toLowerCase())) {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  }
});
