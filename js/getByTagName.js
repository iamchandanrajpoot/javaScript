const liElements = document.getElementsByTagName("li");
liElements[4].style.color = "blue";

for (const li of liElements) {
  li.style.fontStyle = "italic";
}
