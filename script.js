"use strict";
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
const score1 = document.getElementById("score--1");
const score2 = document.getElementById("score--2");
const name1 = document.getElementById("name--1");
const name2 = document.getElementById("name--2 ");
const hold1 = document.querySelector(".btn--hold--1");
const roll1 = document.querySelector(".btn--roll--1");
const hold2 = document.querySelector(".btn--hold--2");
const roll2 = document.querySelector(".btn--roll--2");
const dice1 = document.getElementById("dice--1");
const dice2 = document.getElementById("dice--2");

let playing = true;
score1.textContent = 0;
score2.textContent = 0;

let currentScore1 = 0;
let currentScore2 = 0;

roll1.addEventListener("click", function () {
  if (playing) {
    let ranBtnRoll = Math.ceil(Math.random() * 6);
    dice1.src = `dice-${ranBtnRoll}.png`;

    if (ranBtnRoll !== 1) {
      currentScore1 += ranBtnRoll;
      score1.textContent = currentScore1;
    } else {
      dice1.classList.add("hidden");
    }
  }

  //   console.log(ranBtnRoll);
});
roll2.addEventListener("click", function () {
  if (playing) {
    let ranBtnRoll = Math.ceil(Math.random() * 6);
    dice2.src = `dice-${ranBtnRoll}.png`;
  }
});
// // const body = document.body;
// body.onload = fadeOutEffect;

// function fadeOutEffect() {
//   var fadeTarget = document.getElementById("target");
//   var fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//       fadeTarget.style.opacity = 1;
//     }
//     if (fadeTarget.style.opacity > 0) {
//       fadeTarget.style.opacity -= 0.1;
//     } else {
//       clearInterval(fadeEffect);
//     }
//   }, 10);
// }

// // document.getElementById("target").addEventListener("click", fadeOutEffect);
