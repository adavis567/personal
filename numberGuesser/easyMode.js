let tries = 0;
const maxTries = 3;

document.getElementById('tries').innerHTML = tries;

function rand() {
  const randNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById("randNum").innerHTML = randNum;
}

function guess() {
  const randNum = parseInt(document.getElementById('randNum').innerHTML, 10);
  const guess = parseInt(document.getElementById('guess').value, 10);

  if (guess === randNum) {
    showWinnerScreen();
  } else {
    tries++;
    document.getElementById('tries').innerHTML = tries;
    if (tries === maxTries) {
      showLoserScreen(randNum);
    } else {
      showMessage('Try again.');
    }
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
}

function showLoserScreen(correctNumber) {
  document.getElementById('loser-screen').classList.remove('hidden');
  document.getElementById('correct-number').textContent = correctNumber;
}function resetGame() {
  // Reset tries, hide screens, and clear messages and input
  tries = 0;
 location.reload();

  
  // Reset or regenerate random number if needed
  rand();
}
