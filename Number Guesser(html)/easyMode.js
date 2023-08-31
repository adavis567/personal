let tries = 0;
const maxTries = 3;

document.getElementById('tries').innerHTML = tries;

function rand() {
  const randNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById("randNum").innerHTML = randNum;
  document.getElementById('rand').classList.add('hidden')
}

function guess() {
  const randNum = parseInt(document.getElementById('randNum').innerHTML, 10);
  const guess = parseInt(document.getElementById('guess').value, 10);

  if (guess < randNum) {
    alert("Lol too low")
    tries++
    document.getElementById('tries').innerHTML = tries;
    if (tries === maxTries) {
      showLoserScreen(randNum);
    } else {
      showMessage('Try again.');
    }
  }
  else if (guess > randNum) {
    alert('Woah that is way too high bruh')
    tries++;
    document.getElementById('tries').innerHTML = tries;
    if (tries === maxTries) {
      showLoserScreen(randNum);
    } else {
      showMessage('Try again.');
    }
  }
  else if (guess === randNum) {
    showWinnerScreen();
  }
  // Clear the input field after guess
  document.getElementById('guess').value = '';
}

function showMessage(message) {
  const messageDiv = document.getElementById('message');
  messageDiv.innerHTML = message;
}

function showWinnerScreen() {
  document.getElementById('winner-screen').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden')
}

function showLoserScreen(correctNumber) {
  document.getElementById('loser-screen').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden')
  document.getElementById('correct-number').textContent = correctNumber;
} function resetGame() {
  // Relods entire game
  location.reload();



}