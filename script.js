"use strict";
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
const score1 = document.getElementById("score--1");
const score2 = document.getElementById("score--2");
const name1 = document.getElementById("name--1");
const name2 = document.getElementById("name--2 ");
// BUTTONS
const hold1 = document.querySelector(".btn--hold--1");
const roll1 = document.querySelector(".btn--roll--1");
const hold2 = document.querySelector(".btn--hold--2");
const roll2 = document.querySelector(".btn--roll--2");
// DICE IMAGE
const dice1 = document.getElementById("dice--1");
const dice2 = document.getElementById("dice--2");

let playing = true;
score1.textContent = 0;
score2.textContent = 0;

let scores = [0, 0];
let activePlayer = 0;

let currentScore1 = 0;
let currentScore2 = 0;

// Default zoom-in on player-1 when game starts.
const animation = function () {
  player1.style.transform = "scale(1.06) rotate(180deg)";
  player2.style.transform = "scale(0.96)";
};
// Zoom-in occurs after 500 mili-seconds.
setTimeout(animation, 500);

roll1.addEventListener("click", function () {
  // When activePlayer is 0, player 1 is disabled.
  if (playing && activePlayer === 0) {
    let ranBtnRoll = Math.ceil(Math.random() * 6);
    dice1.src = `dice-${ranBtnRoll}.png`;

    if (ranBtnRoll !== 1) {
      currentScore1 += ranBtnRoll;
      score1.textContent = currentScore1;
    } else {
      dice1.classList.add("hidden");
      dice2.classList.remove("hidden"); // removing the hidden class here immediately makes the dice visible, as compared to the button being clicked by the other user and then the dice becoming visible.
      activePlayer = activePlayer === 0 ? 1 : 0;
      console.log(activePlayer);
      // Zoom-in shows control shift
      player2.style.transform = "scale(1.06)";
      player1.style.transform = "scale(0.96) rotate(180deg)";
    }
  }

  //   console.log(ranBtnRoll);
});
roll2.addEventListener("click", function () {
  if (playing && activePlayer === 1) {
    player2.style.transform = "scale(1.06)";
    player1.style.transform = "scale(0.96) rotate(180deg)";
    let ranBtnRoll = Math.ceil(Math.random() * 6);
    dice2.src = `dice-${ranBtnRoll}.png`;

    if (ranBtnRoll !== 1) {
      currentScore2 += ranBtnRoll;
      score2.textContent = currentScore2;
    } else {
      dice2.classList.add("hidden");
      dice1.classList.remove("hidden"); // removing the hidden class here immediately makes the dice visible, as compared to the button being clicked by the other user and then the dice becoming visible.
      activePlayer = activePlayer === 1 ? 0 : 1;
      console.log(activePlayer);
      // Zoom-in shows control shift
      player1.style.transform = "scale(1.06) rotate(180deg)";
      player2.style.transform = "scale(0.96)";
    }
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
