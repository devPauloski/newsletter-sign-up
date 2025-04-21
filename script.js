const form = document.querySelector("form");
const email = document.getElementById("email");
const dismissButton = document.querySelector(".dismiss-btn");
const hoverStates = document.querySelectorAll(".hover-state");
const desktopImageEdges = document.getElementById("a");
const illustrationSection = document.querySelector(".illustration-section");
const successfulMessageSection = document.querySelector(".successful-message-section");
const error = document.getElementById("error");
const emailAddress = document.querySelector(".email-address");

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
    illustrationSection.classList.add("hide");
    successfulMessageSection.classList.remove("hide");
    emailAddress.textContent = email.value;
    error.textContent = "";
    error.removeAttribute("class");
    email.removeAttribute("class");
  } else {
    error.textContent = "Valid email required";
    error.setAttribute("class", "active");
    email.setAttribute("class", "invalid");
  }
});

dismissButton.addEventListener("click", () => {
  illustrationSection.classList.remove("hide");
  successfulMessageSection.classList.add("hide");
  email.value = "";
});