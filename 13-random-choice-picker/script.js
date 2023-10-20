const textarea = document.querySelector(".input");
const choices = document.querySelector(".choices");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    setTimeout(reset, 1000);
    randomize();
  } else {
    createTags();
  }
});

const createTags = () => {
  const html = textarea.value
    .split(",")
    .filter((choice) => choice.trim().length > 0)
    .map((choice) => `<div class="choice">${choice.trim()}</div>`)
    .join("");
  choices.innerHTML = html;
};

const randomize = () => {
  const choiceElems = document.querySelectorAll(".choice");
  const len = choiceElems.length;
  let counter = 50;
  let prev = null;
  const int = setInterval(() => {
    if (counter-- == 0) clearInterval(int);
    if (prev !== null) prev.classList.remove("highlight");
    const rand = Math.floor(Math.random() * len);
    prev = choiceElems[rand];
    prev.classList.add("highlight");
  }, 50);
};

const reset = () => {
  textarea.value = "";
  textarea.focus();
};
