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
///read more
btn1.addEventListener("click", function () {
  text1.classList.toggle("active-readmore");
  img1.classList.remove("rotate180");
  img2.classList.remove("rotate180");
  img.classList.toggle("rotate180");
  text2.classList.add("active-readmore");
  text3.classList.add("active-readmore");
});

btn2.addEventListener("click", function () {
  text2.classList.toggle("active-readmore");
  img1.classList.toggle("rotate180");
  img.classList.remove("rotate180");
  img2.classList.remove("rotate180");
  text1.classList.add("active-readmore");
  text3.classList.add("active-readmore");
});
btn3.addEventListener("click", function () {
  text3.classList.toggle("active-readmore");
  img2.classList.toggle("rotate180");
  img.classList.remove("rotate180");
  img1.classList.remove("rotate180");
  text1.classList.add("active-readmore");
  text2.classList.add("active-readmore");
});
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
