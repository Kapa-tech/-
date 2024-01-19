const btn1 = document.querySelector(".btns");
const btn2 = document.querySelector(".btns2");
const btn3 = document.querySelector(".btns3");
const text1 = document.querySelector(".text");
btn1.addEventListener("click", function () {
  text1.classList.toggle("hidden");
});
btn2.addEventListener("click", function () {
  text1.classList.toggle("hidden");
});
btn3.addEventListener("click", function () {
  text1.classList.toggle("hidden");
});
