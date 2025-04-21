const form = document.querySelector("form");
const email = document.getElementById("email");
const dismissButton = document.querySelector(".dismiss-btn");
const hoverStates = document.querySelectorAll(".hover-state");
const desktopImageEdges = document.getElementById("a");

hoverStates.forEach((element) => {
  element.addEventListener("mouseover", () => {
    desktopImageEdges.style.rx = "0";
  });

  element.addEventListener("mouseleave", () => {
    desktopImageEdges.style.rx = "1rem";
  });
})

// Regular expression for email validation as per HTML specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value.length !== 0 && emailRegExp.test(email.value)) {

  }
});
