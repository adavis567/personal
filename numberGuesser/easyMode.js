var tries = 0
document.getElementById('tries').innerHTML = tries
function rand() {
  var randNum = Math.ceil(Math.random() * 10)
  document.getElementById("randNum").innerHTML = randNum;;

}
function guess() {
  randNum = document.getElementById('randNum').innerHTML
  var guess = document.getElementById('guess').value
  if (guess === randNum) {
    alert(true)
  }
  else {
    tries = tries + 1
    document.getElementById('tries').innerHTML = tries
    if (tries === 3) {
  alert('loser')
}
else {
  alert('try again')
}
  }
}


