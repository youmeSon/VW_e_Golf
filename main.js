"use strict";

const navbar = document.querySelector(".navbar");
const main = document.querySelector("#main");
const mainHeight = main.getBoundingClientRect().height;

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
// Show arrow up
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > mainHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//  Handle arrow up button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#main");
});

// Hide the navbar menu when click the navbar items
const navItems = document.querySelector(".navbar-nav");
const collapse = document.querySelector("#mainNav");
navItems.addEventListener("click", () => {
  collapse.classList.remove("show");
});
