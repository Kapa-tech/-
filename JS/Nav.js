"use strict";

// stikcy navigaction
document.addEventListener("scroll", function () {
  const nav = document.querySelector(".navigation");
  const team = document.querySelector(".teammembers");
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
    team.classList.add("sticky2");
  } else {
    nav.classList.remove("sticky");
    team.classList.remove("sticky2");
  }
});
