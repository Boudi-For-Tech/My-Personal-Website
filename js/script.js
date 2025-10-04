let Body = document.querySelector("body");
let changeMode = document.querySelector(".mode");
let menuBar = document.querySelector(".menu");
let sideBar = document.querySelector(".sideBar");
changeMode.addEventListener("click", () => {
  Body.dataset.theme = Body.dataset.theme === "light" ? "dark" : "light";
  if (changeMode.classList.contains("fa-moon")) {
    changeMode.classList.remove("fa-moon");
    changeMode.classList.add("fa-sun");
  } else {
    changeMode.classList.remove("fa-sun");
    changeMode.classList.add("fa-moon");
  }
});

menuBar.addEventListener("click", () => {
  sideBar.style.display = "flex";
});
