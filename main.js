"use strict";

const main = document.querySelector("#main");
const mainHeight = main.getBoundingClientRect().height;

// Give the navbar transparent effect
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("nav--dark");
  } else {
    navbar.classList.remove("nav--dark");
  }
});

// Scroll to section
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Show more toggle button
const showMoreBtn = document.querySelector(".button__more");
const showMore = document.querySelector(".show__more");
showMoreBtn.addEventListener("click", () => {
  const buttonText = showMoreBtn.innerText;
  showMore.classList.toggle("hide");
  showMoreBtn.innerText = buttonText == "Hide" ? "Show more" : "Hide";
});

// Contact button
const contactBtn = document.querySelector(".button__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Submit button
const submitBtn = document.querySelector(".submit__btn");
const submitMessage = document.querySelector(".submit__message");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  submitMessage.classList.remove("hide");
});

// Show arrow up + message bubble
const arrowUp = document.querySelector(".arrow-up");
const messageBubble = document.querySelector(".message-bubble");
document.addEventListener("scroll", () => {
  if (window.scrollY > mainHeight / 2) {
    arrowUp.classList.add("visible");
    messageBubble.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
    messageBubble.classList.remove("visible");
  }
});

//  Handle arrow up button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#main");
});

// Handle message bubble button
messageBubble.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Hide the navbar menu when click the navbar items
const toggleNavItems = document.querySelector(".navbar-nav");
const collapse = document.querySelector("#mainNav");
toggleNavItems.addEventListener("click", () => {
  collapse.classList.remove("show");
});

// Add scroll animation to special section
const specialIcons = document.querySelectorAll(".special__icon");

const options = {
  root: document.querySelector("special__icon"),
  rootMargin: "0px",
  threshold: 1,
};

const specialCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("darker");
    } else {
      entry.target.classList.remove("darker");
    }
  });
};

const observer = new IntersectionObserver(specialCallback, options);
specialIcons.forEach((item) => observer.observe(item));
