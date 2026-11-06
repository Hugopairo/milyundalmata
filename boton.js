const svg = document.querySelector(".botonmenu");
const menu = document.querySelector(".menumovil");

svg.addEventListener("click", () => {
  menu.classList.toggle("reveal");
});
