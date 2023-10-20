"use strict";
console.log("HelloWorld!");
const init = document.querySelector(".init");
const container = document.querySelector(".container");
const eventKey = document.querySelector(".eventKey");
const eventKeyCode = document.querySelector(".eventKeyCode");
const eventCode = document.querySelector(".eventCode");
window.addEventListener("keydown", (e) => {
  container.style.display = "flex";
  init.style.display = "none";
  eventKey.innerText = e.key === " " ? "Space" : e.key;
  eventKeyCode.innerText = e.keyCode;
  eventCode.innerText = e.code;
});
