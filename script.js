"use strict";

let btnCheck = document.querySelector(".check");
let btnAgain = document.querySelector(".again");
let body = document.querySelector("body");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let clHighScore = document.querySelector(".highscore");
let clScore = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //!   console.log(typeof guess, guess);

  if (!guess) {
    message.textContent = "No number";
  } else if (guess === secretNumber) {
    message.textContent = "Correct number!";
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      clHighScore.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too high" : "Too low";
      score--;
      clScore.textContent = score;
    } else {
      message.textContent = "You lost the game!";
      clScore.textContent = 0;
    }
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  clScore.textContent = score;
  number.textContent = "?";
  guess.value = "";
  body.style.backgroundColor = "#222";
});
