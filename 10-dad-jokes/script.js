"use strict";
const joke = document.querySelector(".joke");
const button = document.querySelector(".container button");
const metadata = { methods: "GET", headers: { Accept: "application/json" } };

const getJoke = async () => {
  const jokeData = await fetch("https://icanhazdadjoke.com/", metadata);
  joke.innerText = (await jokeData.json()).joke;
};
button.addEventListener("click", getJoke);
getJoke();
