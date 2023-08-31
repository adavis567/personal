//These are the starting variables
var score = 0;
var computerScore = 0;
var ties = 0;
var games;
var finalScore;
var finalScomp;
//This function gets the number of rounds from the user and then shows the game when a button is pressed
function rounds() {
  games = parseInt(document.getElementById('answer').value);
  document.getElementById('rounds').innerHTML = "Rounds: " + games;
  document.getElementById('startUp').classList.add('hidden');
  document.getElementById("games").classList.remove("hidden");
  updateScores();
}
//After every round, this function is run which updates the scores
function updateScores() {
  document.getElementById('score').innerHTML = "Player Score: " + score;
  document.getElementById('compScore').innerHTML = "Computer Score: " + computerScore;
  document.getElementById('ties').innerHTML = "Ties: " + ties;
  document.getElementById("rounds").innerHTML = "Rounds: " + games;
}
//This function allows the computer to choose either rock, paper, or scissors
function getComputerChoice() {
  var choices = ['rock', 'paper', 'scissors'];
  var randNum = Math.floor(Math.random() * choices.length);
  return choices[randNum];
}
//This function is ran to see if the computer won or the user won
function playGame(userChoice) {
  var computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    // Tie
    ties++;
    document.getElementById("result").innerHTML = "Tie"
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    // User wins
    score++;
    document.getElementById("result").innerHTML = "You Won"
  } else {
    // Computer wins
    computerScore++;
    document.getElementById("result").innerHTML = "You Lost"
  }

  games--;
  updateScores();

  if (games === 0) {
    gameOver();
  }
}


//This runs once the game is over and it displays if the user won or if the computer won
function gameOver() {
  finalScore = score
  finalScomp = computerScore
  document.getElementById("games").classList.add("hidden")
  document.getElementById("gameOverScreen").classList.remove("hidden")
  document.getElementById("finalPlayer").innerHTML = "Player Score: " + finalScore
  document.getElementById("finalComp").innerHTML = "Computer Score: " + finalScomp

  if (finalScore > finalScomp) {
    document.getElementById("message").innerHTML = "You Won!"
  }
  else if (finalScore < finalScomp) {
    document.getElementById("message").innerHTML = "You Lost!"

  }
  else if (finalScore === finalScomp) {
    document.getElementById("message").innerHTML = "Its a Tie!"
  }
}
//This function allows the user to play again by reloading the page
function playAgain() {
  location.reload()
}