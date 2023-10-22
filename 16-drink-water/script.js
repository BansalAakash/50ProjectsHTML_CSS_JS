const glasses = document.querySelectorAll(".glass");
const target = document.querySelector(".target");
const remaining = document.querySelector(".remaining");
const filled = document.querySelector(".filled");
const totalGlasses = 8;
let alreadyFilled = 0;

const fillGlasses = (glassNum) => {
  for (let i = 0; i < glassNum; i++) {
    glasses[i].classList.add("drank");
  }
  if (glassNum > alreadyFilled) {
    alreadyFilled = glassNum;
    fillTarget(glassNum);
  }
};

const fillTarget = (glassNum) => {
  const percentFilled = (glassNum / totalGlasses) * 100;
  const percentRemaining = 100 - percentFilled;
  filled.innerText = percentFilled + "%";
  remaining.innerText = (2 * percentRemaining) / 100 + "L Remained";
  target.style.gridTemplateRows = `${percentRemaining}% ${percentFilled}%`;
};

glasses.forEach((glass) =>
  glass.addEventListener("click", function () {
    fillGlasses(this.dataset.glassnum);
  })
);
