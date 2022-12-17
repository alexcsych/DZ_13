"use strict";

const imgDog = document.createElement("img");
const pCat = document.createElement("p");
const btn = document.createElement("button");

document.body.append(imgDog, pCat, btn);
btn.textContent = "UPDATE";

btn.addEventListener("click", getContent);

function getContent() {
  getRandomDog();
  getRandomCat();
}
function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      imgDog.src = data.message;
    })
    .catch((err) => console.log(err));
}

function getRandomCat() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      pCat.textContent = data.fact;
    })
    .catch((err) => console.log(err));
}
