"use strict";
const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const minStep = 1,
  maxStep = circles.length;
let step = 1;

const updateUI = () => {
  prevButton.disabled = step === minStep;
  nextButton.disabled = step === maxStep;
  progress.style.width = (100 * (step - 1)) / (maxStep - 1) + "%";
};

prevButton.addEventListener("click", () => {
  circles[step - 1].classList.remove("active");
  step = Math.max(minStep, step - 1);
  updateUI();
});
nextButton.addEventListener("click", () => {
  step = Math.min(maxStep, step + 1);
  circles[step - 1].classList.add("active");
  updateUI();
});
