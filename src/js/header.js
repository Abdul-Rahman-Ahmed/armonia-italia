const dropMenu = document.querySelector(".dropmenu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

dropMenu.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
