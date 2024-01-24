"use strict";

// const slides = document.querySelectorAll(".slide");

// let curSlide = 0;

// const maxSlide = slides.length;
// const btnLeft = document.querySelector(".slide-arrow-l");
// const btnRight = document.querySelector(".slide-arrow-r");
// const dotContainer = document.querySelector(".dots");
// const dot = document.querySelector(".dots-dot");
// const dot2 = document.querySelector(".dots-dot1");
// const dot3 = document.querySelector(".dots-dot2");

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };

// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   goToSlide(curSlide);
//   // activateDot(curSlide);
// };

// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else {
//     curSlide--;
//   }

//   goToSlide(curSlide);
// };

// goToSlide(0);

// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);

// dotContainer.addEventListener("click", function (e) {
//   goToSlide(e.target.classList[1] - 1);
// });
// setInterval(nextSlide, 10000);

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
  currentSlide = (currentSlide - 1 + 3) % 3; // Adjust the modulus based on the number of slides
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3; // Adjust the modulus based on the number of slides
  showSlide(currentSlide);
}

const btnLeft = document.querySelector(".slide-arrow-l");
const btnRight = document.querySelector(".slide-arrow-r");

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

setInterval(nextSlide, 6000);

dotContainer.addEventListener("click", function (e) {
  showSlide(e.target.classList[1] - 1);
});
