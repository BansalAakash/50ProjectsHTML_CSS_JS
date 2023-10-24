const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");
const body = document.body;
const slides = document.querySelectorAll(".slide");
const total = 5;
let cur = 0,
  prev = 1;

const setImages = () => {
  body.style.backgroundImage = `url(imgs/img${cur}.jpeg)`;
  slides[cur].classList.add("active");
  slides[prev].classList.remove("active");
};
leftButton.addEventListener("click", () => {
  prev = cur;
  cur = (cur + total - 1) % total;
  setImages();
});
rightButton.addEventListener("click", () => {
  prev = cur;
  cur = (cur + 1) % total;
  setImages();
});

setImages();
