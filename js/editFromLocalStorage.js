const userList = document.getElementById("users");

// handle sumbit form action ------------------------------------
function handleFormSubmit(event) {
  event.preventDefault();
  userDat = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  // set user data on local storage
  localStorage.setItem(userDat.email, JSON.stringify(userDat));

  //   getting data form local storage
  const storedUserDetail = JSON.parse(localStorage.getItem(userDat.email));

  //   adding user data taking from local storage to the dom
  const user = document.createElement("li");
  user.setAttribute("key", userDat.email);
  const textNode = document.createTextNode(
    `${storedUserDetail.username} ${storedUserDetail.email} ${storedUserDetail.phone}`
  );
  user.append(textNode);
  userList.appendChild(user);

  // creating delete button when adding user data on dom
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "delete";
  user.appendChild(deleteBtn);

  // creating edit button when adding user data on dom
  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = "edit";
  user.appendChild(editBtn);
}

// --------------------------------------------------------------

// handling delete functionalites
userList.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentElement.style.display = "none";
    console.log(e.target.parentElement.textContent);
    localStorage.removeItem(e.target.parentElement.getAttribute("key"));
  }
});

// handling edit functionalites
userList.addEventListener("click", (e) => {
  if (e.target.className == "edit") {
    e.target.parentElement.style.display = "none";
    console.log(e.target.parentElement.textContent);

    // setting local storage values to input boxes
    const unserInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const { username, email, phone } = JSON.parse(
      localStorage.getItem(e.target.parentElement.getAttribute("key"))
    );

    unserInput.value = username;
    emailInput.value = email;
    phoneInput.value = phone;

    localStorage.removeItem(e.target.parentElement.getAttribute("key"));
  }
});

// module.exoprts = handleFormSubmit;
