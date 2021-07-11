"use strict";
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");

const score1 = document.getElementById("score--1--roll");
const score1hold = document.getElementById("score--1--hold");
const score2 = document.getElementById("score--2--roll");
const score2hold = document.getElementById("score--2--hold");

const name1 = document.getElementById("name--1");
const name2 = document.getElementById("name--2");
// BUTTONS
const hold1 = document.querySelector(".btn--hold--1");
const roll1 = document.querySelector(".btn--roll--1");
const hold2 = document.querySelector(".btn--hold--2");
const roll2 = document.querySelector(".btn--roll--2");
const btnNew = document.querySelector(".btn--new--game");
// DICE IMAGE
const dice1 = document.getElementById("dice--1");
const dice2 = document.getElementById("dice--2");
// MODAL
const okBtn = document.querySelector(".btn--ok");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//TEST
const playerOneInput = document.querySelector(".player1--name");
const playerTwoInput = document.querySelector(".player2--name");

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

const switchPlayer1 = function () {
  currentScore1 = 0;
  score1.textContent = currentScore1;

  dice1.classList.add("hidden");
  dice2.classList.remove("hidden"); // removing the hidden class here immediately makes the dice visible, as compared to the button being clicked by the other user and then the dice becoming visible.
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(activePlayer);
  player2.style.transform = "scale(1.06)"; // Zoom-in shows control shift
  player1.style.transform = "scale(0.96) rotate(180deg)";
};

const switchPlayer2 = function () {
  currentScore2 = 0;
  score2.textContent = currentScore2;
  dice2.classList.add("hidden");
  dice1.classList.remove("hidden"); // removing the hidden class here immediately makes the dice visible, as compared to the button being clicked by the other user and then the dice becoming visible.
  activePlayer = activePlayer === 1 ? 0 : 1;
  player1.style.transform = "scale(1.06) rotate(180deg)"; // Zoom-in shows control shift
  player2.style.transform = "scale(0.96)";
};

roll1.addEventListener("click", function () {
  // When activePlayer is 0, player 1 is disabled.
  if (playing && activePlayer === 0) {
    let ranBtnRoll = Math.ceil(Math.random() * 6);
    dice1.src = `dice-${ranBtnRoll}.png`;

    if (ranBtnRoll !== 1) {
      currentScore1 += ranBtnRoll;
      score1.textContent = currentScore1;
    } else {
      switchPlayer1();
    }
  }

  //   console.log(ranBtnRoll);
});
hold1.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore1;
    score1hold.textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      dice1.classList.add("hidden");
      playing = false;
      console.log(`player ${activePlayer} wins.`);
      player1.classList.toggle("player--winner");
      // Feature to add score limit to be set later
    } else {
      switchPlayer1();
    }
  }
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
      switchPlayer2();
    }
  }
});
hold2.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore2;
    score2hold.textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      dice2.classList.add("hidden");
      playing = false;
      console.log(`Player ${activePlayer} wins!`);
      player2.classList.toggle("player--winner");
    } else {
      switchPlayer2();
    }
  }
});

btnNew.addEventListener("click", function () {
  scores = [0, 0];
  currentScore1 = 0;
  currentScore2 = 0;

  score1.textContent = currentScore1;
  score2.textContent = currentScore2;

  score1hold.textContent = scores[0];
  score2hold.textContent = scores[1];
  dice1.classList.remove("hidden");
  dice2.classList.remove("hidden");

  if (activePlayer === 0) {
    player1.classList.remove("player--winner");

    player1.style.transform = "scale(1.06) rotate(180deg)"; // Zoom-in shows control shift
    player2.style.transform = "scale(0.96)";
  } else if (activePlayer === 1) {
    player2.classList.remove("player--winner");

    player1.style.transform = "scale(1.06) rotate(180deg)"; // Zoom-in shows control shift
    player2.style.transform = "scale(0.96)";

    activePlayer = 0;
  }
  playing = true;
});

// MODAL V1.2

okBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  if (playerOneInput.value === "" && playerTwoInput.value === "") {
    name1.textContent = "Player 1";
    name2.textContent = "Player 2";
  } else if (playerOneInput.value === "" && playerTwoInput.vlaue !== "") {
    name1.textContent = "Player 1";
    name2.textContent = playerTwoInput.value;
  } else if (playerOneInput.value !== "" && playerTwoInput.value === "") {
    name1.textContent = playerOneInput.value;
    name2.textContent = "Player 2";
  } else {
    name1.textContent = playerOneInput.value;
    name2.textContent = playerTwoInput.value;
  }

  // Zoom-in occurs after 500 mili-seconds.
  setTimeout(animation, 500);
});
