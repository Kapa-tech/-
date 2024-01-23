"use strict";

const slides = document.querySelectorAll(".slide");

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

console.log(slides);

let curSlide = 0;

const maxSlide = slides.length;
const btnLeft = document.querySelector(".slide-arrow-l");
const btnRight = document.querySelector(".slide-arrow-r");

const dot = document.querySelector(".dots-dot");
const dot2 = document.querySelector(".dots-dot1");
const dot3 = document.querySelector(".dots-dot2");

const nextsslide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};

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

dot3.addEventListener("click", function () {
  slides[0].style.transform = `translateX(-200%)`;
  slides[1].style.transform = `translateX(-100%)`;
  slides[2].style.transform = `translateX(0)`;
});

dot2.addEventListener("click", function () {
  slides[0].style.transform = `translateX(-100%)`;
  slides[1].style.transform = `translateX(0)`;
  slides[2].style.transform = `translateX(100%)`;
});

dot.addEventListener("click", function () {
  slides[0].style.transform = `translateX(0)`;
  slides[1].style.transform = `translateX(100%)`;
  slides[2].style.transform = `translateX(200%)`;
});

setInterval(nextsslide, 3000);
