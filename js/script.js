const bannerBtn = document.querySelector("#bannerBtn");
const bannerTitle = document.querySelector(".banner h1");
const bannerP = document.querySelector(".banner p");
const containerLogin = document.querySelector(".container-login");
const containerRegister = document.querySelector(".container-register");
const banner = document.querySelector(".banner");
const circle = document.querySelector(".circle");
const theme = document.querySelector(".btn-theme");


const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark-theme") {
  circle.classList.toggle("move-select");
  body.classList.add("dark-theme");
} else {
  body.classList.add("light-theme");
}
console.log(body.className);
function move() {
  banner.classList.toggle("move");

  containerRegister.classList.toggle("hide");
  containerLogin.classList.toggle("hide");

  if (banner.className.includes("move")) {
    bannerTitle.innerHTML = "Ola Usuario";
    bannerP.innerHTML = "Se você não possui uma conta se cadastre";
    bannerBtn.innerHTML = "Cadastrar";
  } else {
    bannerTitle.innerHTML = "Seja Bem Vindo";
    bannerP.innerHTML = "Se voce ja possui conta fala login";
    bannerBtn.innerHTML = "Login";
  }
}

function setTheme() {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme", "move-select");
  } else {
    localStorage.setItem("theme", "light-theme");
  }
}

bannerBtn.addEventListener("click", () => {
  move();
});

theme.addEventListener("click", () => {
  circle.classList.toggle("move-select");
  setTheme();
});
