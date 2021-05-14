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
