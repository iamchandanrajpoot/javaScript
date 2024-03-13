function handleFormSubmit(e) {
  e.preventDefault();

  userDat = {
    username: e.target.username.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
  };
  console.log(JSON.stringify(userDat));

  localStorage.setItem("User Details", JSON.stringify(userDat));
}
