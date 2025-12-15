let Body = document.querySelector("body");
let changeMode = document.querySelector(".mode");
let heroTXT = document.querySelector(".heroGreetings");
const Form = document.querySelector(".Contact form");
const sections = document.querySelectorAll(".observe");
Body.dataset.theme = localStorage.getItem("Mode");
Form.addEventListener("submit", (e) => {
  Form.reset();
});
changeMode.addEventListener("click", () => {
  Body.dataset.theme = Body.dataset.theme === "light" ? "dark" : "light";
  if (changeMode.classList.contains("fa-moon")) {
    changeMode.classList.remove("fa-moon");
    localStorage.setItem("Mode", "dark");
    changeMode.classList.add("fa-sun");
  } else {
    changeMode.classList.remove("fa-sun");
    localStorage.setItem("Mode", "light");
    changeMode.classList.add("fa-moon");
  }
});

const mainTXT = "Hi, I am Abdelrahaman";
setTimeout(() => {
  for (let i = 0; i < mainTXT.length; i++) {
    setTimeout(() => {
      heroTXT.textContent += mainTXT[i];
    }, i * 100);
  }
}, 500);
console.log("Hello World");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.3, // 30% visible
  }
);

sections.forEach((section) => observer.observe(section));
