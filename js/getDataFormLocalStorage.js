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
  user.innerHTML = `${storedUserDetail.username} ${storedUserDetail.email} ${storedUserDetail.phone}`;
  userList.appendChild(user);
}

// module.exoprts = handleFormSubmit;
