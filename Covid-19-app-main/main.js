const icon = document.getElementById("icon");
const button = document.querySelector("#startButton");

button.addEventListener("click", logIn);
function logIn() {
  window.location.href = "./home/home.html";
}

icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "./assets/sun.svg";
  } else {
    icon.src = "./assets/dark-mode.png";
  }
};
