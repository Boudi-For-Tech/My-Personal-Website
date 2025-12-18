let Body = document.querySelector("body");
const changeMode = document.querySelector("#themeToggle");
let heroTXT = document.querySelector(".heroGreetings");
const Form = document.querySelector(".Contact form");
const sections = document.querySelectorAll(".observe");
Body.dataset.theme = localStorage.getItem("theme");
Form.addEventListener("submit", (e) => {
  Form.reset();
});
changeMode.addEventListener("click", () => {
  const nextTheme = Body.dataset.theme === "dark" ? "light" : "dark";

  Body.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
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
