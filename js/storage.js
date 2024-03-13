const form = document.getElementsByTagName("form");
form[0].addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("Username", e.target.username.value);
  localStorage.setItem("Email", e.target.email.value);
  localStorage.setItem("Phone", e.target.phone.value);
});
