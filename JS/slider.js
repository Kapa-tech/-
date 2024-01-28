"use strict";

// slider

const dotContainer = document.querySelector(".dots");
let currentSlide = 0;

function dotactivate(slide) {
  document
    .querySelectorAll(".dots-dot")
    .forEach((dot) => dot.classList.remove("dots-dot--active"));

  document
    .querySelector(`.dots-dot[data-slide="${slide + 1}"]`)
    .classList.add("dots-dot--active");
}
console.log(document.querySelectorAll(".dots-dot"));

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
showSlide(0);
function prevSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3;
  showSlide(currentSlide);
  dotactivate(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
  dotactivate(currentSlide);
}

const btnLeft = document.querySelector(".slide-arrow-l");
const btnRight = document.querySelector(".slide-arrow-r");

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

setInterval(nextSlide, 6000);

dotContainer.addEventListener("click", function (e) {
  showSlide(e.target.classList[1] - 1);
  dotactivate(e.target.classList[1] - 1);
  currentSlide === e.target.classList[1];
});
