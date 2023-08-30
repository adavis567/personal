var score = 0
var computerScore = 0
var ties = 0
var games
var finalScore
var finalScomp
function rounds() {
  games = document.getElementById('answer').value
  document.getElementById('rounds').innerHTML = games
  document.getElementById('startUp').classList.add('hidden')
  document.getElementById("games").classList.remove("hidden")

}
document.getElementById('score').innerHTML = score
document.getElementById('compScore').innerHTML = computerScore
document.getElementById('ties').innerHTML = ties
function rock() {
  var randNum = Math.ceil(Math.random() * 3)
  var choice
  if (randNum === 1) {
    choice = 'rock'
  }
  else if (randNum === 2) {
    choice = 'paper'
  }
  else if (randNum === 3) {
    choice = 'scissors'
  }
  if (choice === 'rock') {
    alert('tie')
    ties = ties + 1
    document.getElementById('ties').innerHTML = ties
  }
  else if (choice === 'paper') {
    alert('loser')
    computerScore = computerScore + 1
    document.getElementById('compScore').innerHTML = computerScore
  }
  else if (choice === 'scissors') {
    alert('winner')
    score = score + 1
    document.getElementById('score').innerHTML = score

  }
  games = games - 1
  document.getElementById("rounds").innerHTML = games
  if (games === 0) {
    gameOver()
  }
}
function paper() {
  var randNum = Math.ceil(Math.random() * 3)
  var choice
  if (randNum === 1) {
    choice = 'rock'
  }
  else if (randNum === 2) {
    choice = 'paper'
  }
  else if (randNum === 3) {
    choice = 'scissors'
  }
  if (choice === 'rock') {
    alert('winner')
    score = score + 1
    document.getElementById('score').innerHTML = score

  }
  else if (choice === 'paper') {
    alert('tie')
    ties = ties + 1
    document.getElementById('ties').innerHTML = ties
  }
  else if (choice === 'scissors') {
    alert('loser')
    computerScore = computerScore + 1
    document.getElementById('compScore').innerHTML = computerScore
  }
  games = games - 1
  document.getElementById("rounds").innerHTML = games
  if (games === 0) {
    gameOver()
  }
}
function scissors() {
  var randNum = Math.ceil(Math.random() * 3)
  var choice
  if (randNum === 1) {
    choice = 'rock'
  }
  else if (randNum === 2) {
    choice = 'paper'
  }
  else if (randNum === 3) {
    choice = 'scissors'
  }
  if (choice === 'rock') {
    alert('loser')
    computerScore = computerScore + 1
    document.getElementById('compScore').innerHTML = computerScore
  }
  else if (choice === 'paper') {
    alert('winner')
    score = score + 1
    document.getElementById('score').innerHTML = score

  }
  else if (choice === 'scissors') {
    alert('tie')
    ties = ties + 1
    document.getElementById('ties').innerHTML = ties
  }
  games = games - 1
  document.getElementById("rounds").innerHTML = games
}



function gameOver() {
  finalScore = score
  finalScomp = computerScore
  console.log(finalScore)
  console.log(finalScomp)
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
function playAgain() {
  location.reload()
}