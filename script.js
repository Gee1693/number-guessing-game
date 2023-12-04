"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let attempts = 20;
let highScore = 0;
let resetBtn = document.querySelector(".reset");

checkBtn.addEventListener("click", guessCheck);
resetBtn.addEventListener("click", resetGame);

function guessCheck() {
  let guess = Number(document.querySelector(".guess").value);
  // No number entered
  if (!guess) {
    msg.textContent = "No number entered";
  }
  // Guess is wrong
  else if (guess !== secretNum) {
    document.querySelector(".guess").value = guess;
    attempts--;
    document.querySelector(".attempts").textContent = attempts;

    if (guess < secretNum) {
      msg.textContent = `📉 ${guess} is too low!`;
    } else if (guess > secretNum) {
      msg.textContent = `📈 ${guess} is too high!`;
    }
  }
  // Player wins
  else if (guess === secretNum) {
    msg.textContent = "🎉 You win!";
    document.querySelector("body").style.backgroundColor = "#22c55e";
    document.querySelector(".number").textContent = secretNum;

    if (attempts > highScore) {
      highScore = attempts;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // Player loses the game
  if (attempts < 1) {
    msg.textContent = "You lose!";
    document.querySelector("body").style.backgroundColor = "#dc2626";
    document.querySelector(".number").textContent = ":(";
  }
}

function resetGame() {
  attempts = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".attempts").textContent = attempts;
  msg.textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  console.log(secretNum);
}
