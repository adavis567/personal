var score = 0
var computerScore = 0
var ties = 0
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
}
