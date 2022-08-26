"use strict";

//Random Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//score
let score = 20;
let highSore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("⛔️ No Number!");
    document.querySelector("body").style.backgroundColor = "#af0d1a";
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.color = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    //Implementing HighScore
    if (score > highSore) {
      highSore = score;
      document.querySelector(".highscore").textContent = highSore;
    }
  } //When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You Lost The Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#5dbed6";
  document.querySelector(".number").style.color = "#222";
});
