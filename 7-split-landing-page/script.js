"use strict";
console.log("HelloWorld!");
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const container = document.querySelector(".container");

leftDiv.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);

rightDiv.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);

leftDiv.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

rightDiv.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
