"use strict";

const dotContainer = document.querySelector(".dots");
let currentSlide = 0;

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
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}

const btnLeft = document.querySelector(".slide-arrow-l");
const btnRight = document.querySelector(".slide-arrow-r");

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

setInterval(nextSlide, 6000);

dotContainer.addEventListener("click", function (e) {
  showSlide(e.target.classList[1] - 1);
  currentSlide === e.target.classList[1];
});
