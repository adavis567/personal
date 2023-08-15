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
    }
  else if (choice === 'paper') {
    alert('loser')
  }
  else if (choice === 'scissors') {
   alert('winner')
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
    }
  else if (choice === 'paper') {
    alert('tie')
  }
  else if (choice === 'scissors') {
   alert('loser')
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
    }
  else if (choice === 'paper') {
    alert('winner')
  }
  else if (choice === 'scissors') {
   alert('tie')
  }
}