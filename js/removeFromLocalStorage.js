const userList = document.getElementById("users");

function handleFormSubmit(event) {
  event.preventDefault();
  userDat = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  localStorage.setItem("User Details", JSON.stringify(userDat));

  const storedUserDetail = JSON.parse(localStorage.getItem("User Details"));
  const user = document.createElement("li");

  const textNode = document.createTextNode(
    `${storedUserDetail.username} ${storedUserDetail.email} ${storedUserDetail.phone}`
  );
  user.append(textNode);
  userList.appendChild(user);
  const btn = document.createElement("button");
  btn.className = "delete";
  //   btn.setAttribute("type", "submit");
  btn.innerHTML = "delete";
  user.appendChild(btn);
}

userList.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentElement.style.display = "none";
  }
});
// module.exoprts = handleFormSubmit;
