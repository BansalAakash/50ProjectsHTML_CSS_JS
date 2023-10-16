const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let percent = 0;
const load = setInterval(() => {
  loadingText.innerHTML = percent++ + "%";
  loadingText.style.opacity = 1 - percent / 100;
  bg.style.filter = `blur(${100 - percent}px)`;
  if (percent > 100) clearInterval(load);
}, 30);
