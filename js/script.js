let Body = document.querySelector("body");
let changeMode = document.querySelector(".mode");
let menuBar = document.querySelector(".menu");
let sideBar = document.querySelector(".sideBar");
let heroTXT = document.querySelector(".heroGreetings");
let menuBarAnchors = document.querySelectorAll(".sideBar ul li");

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
  if (
    sideBar.classList.contains("hiding") ||
    sideBar.style.display === "none"
  ) {
    sideBar.style.display = "flex";
    sideBar.classList.remove("hiding");
    sideBar.classList.add("showing");
  } else {
    sideBar.classList.remove("showing");
    sideBar.classList.add("hiding");
    sideBar.addEventListener(
      "animationend",
      () => {
        sideBar.style.display = "none";
      },
      { once: true },
    );
  }
});

menuBarAnchors.forEach((anchor) =>
  anchor.addEventListener("click", () => {
    sideBar.classList.remove("showing");
    sideBar.style.display === "none";
    sideBar.classList.add("hiding");
  }),
);

const mainTXT = "Hi, I am Abdelrahaman";
setTimeout(() => {
  for (let i = 0; i < mainTXT.length; i++) {
    setTimeout(() => {
      heroTXT.textContent += mainTXT[i];
    }, i * 100);
  }
}, 500);
console.log("Hello World");
