var hiragana = ["rei","ichi","ni","san","yon","go"]
var word
function toWords(num) {
  num = document.getElementById("number").value
  word = hiragana[num]
  alert(word)
  document.getElementById("number").value = ""
}

function learn() {
    document.getElementById("learn").classList.remove("hidden")
    document.getElementById("selection").classList.add("hidden")
}

function quiz() {
    document.getElementById("quiz").classList.remove("hidden")
    document.getElementById("selection").classList.add("hidden")
}

function home() {
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("learn").classList.add("hidden")
    document.getElementById("selection").classList.remove("hidden")
}

function submit() {
    var number
    number = document.getElementById("answer").value
    
}