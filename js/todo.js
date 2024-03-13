const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (e) {
  let inputText = document.getElementById("fruit-to-add");
  e.preventDefault();
  console.log(inputText.value);

  const li = document.createElement("li");
  li.innerHTML =
    inputText.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">edit</button>';

  li.className = "fruit";

  fruits.append(li);
});

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    console.log("i am fire");
    const deleteElement = event.target.parentElement;
    fruits.removeChild(deleteElement);
  }
});
