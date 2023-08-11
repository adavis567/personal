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
    alert(false)
  }
}
