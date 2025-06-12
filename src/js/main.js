const dropMenu = document.querySelector(".dropmenu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");
const links = document.querySelectorAll("header nav ul li");
const href = window.location.pathname;

dropMenu.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

links.forEach((el) => {
  let element = el.childNodes[0];
  element.classList.remove("active");
  let item = element.getAttribute("data-type");
  item == "/"
    ? href == item && element.classList.add("active")
    : href.includes(item) && element.classList.add("active");
});
