"use strict";

const slides = document.querySelectorAll(".slide");

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

console.log(slides);

let curSlide = 0;

const maxSlide = slides.length;
const btnLeft = document.querySelector(".slide-arrow-l");
const btnRight = document.querySelector(".slide-arrow-r");
const dot = document.querySelector(".dots");

btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});

// const createDots = function () {
//   slides.forEach(function (_, i) {
//     dot.insertAdjacentHTML(
//       "beforeend",
//       `<button class='dots' data-slide='${i}'></button>`
//     );
//   });
// };

// createDots();
