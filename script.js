"use strict";

const btn1 = document.querySelector(".listitem ");
const btn2 = document.querySelector(".listitem2 ");
const btn3 = document.querySelector(".listitem3");
const text1 = document.querySelector(".text");
const text2 = document.querySelector(".text1");
const text3 = document.querySelector(".text2");
const box = document.querySelector(".box5");
const img = document.querySelector(".moreinfoimg");
const img1 = document.querySelector(".moreinfoimg1");
const img2 = document.querySelector(".moreinfoimg2");

btn1.addEventListener("click", function () {
  text1.classList.toggle("hidden");

  img.classList.toggle("rotate180");
});
btn2.addEventListener("click", function () {
  text2.classList.toggle("hidden");
  img1.classList.toggle("rotate180");
});
btn3.addEventListener("click", function () {
  text3.classList.toggle("hidden");
  img2.classList.toggle("rotate180");
});

const nav = document.querySelector(".navigation");
const main = document.querySelector(".courses");
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.Intersecting) nav.classList.add("sticky-color");
  else nav.classList.remove("sticky-color");
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.02,
});
navObserver.observe(main);
