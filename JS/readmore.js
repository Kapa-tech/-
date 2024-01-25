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
  if (text1.classList.contains("active-readmore")) {
    text1.classList.remove("active-readmore");
  } else {
    text1.classList.add("active-readmore");
  }
  text2.classList.remove("active-readmore");
  text3.classList.remove("active-readmore");
  img1.classList.remove("rotate180");
  img2.classList.remove("rotate180");
  img.classList.toggle("rotate180");
});

btn2.addEventListener("click", function () {
  if (text2.classList.contains("active-readmore")) {
    text2.classList.remove("active-readmore");
  } else {
    text2.classList.add("active-readmore");
  }
  text1.classList.remove("active-readmore");
  text3.classList.remove("active-readmore");
  img1.classList.toggle("rotate180");
  img.classList.remove("rotate180");
  img2.classList.remove("rotate180");
});
btn3.addEventListener("click", function () {
  if (text3.classList.contains("active-readmore")) {
    text3.classList.remove("active-readmore");
  } else {
    text3.classList.add("active-readmore");
  }
  text1.classList.remove("active-readmore");
  text2.classList.remove("active-readmore");
  img2.classList.toggle("rotate180");
  img.classList.remove("rotate180");
  img1.classList.remove("rotate180");
});
