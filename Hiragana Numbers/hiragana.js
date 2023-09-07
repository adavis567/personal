var hiragana = ["'Rei'", "'Ichi'", "'Ni'", "'San'", "'Yon'", "'Go'","'Roku'","'Nana'","'Hachi'","'Kyu'","'Juu'",
"'Juu Ichi'","'Juu Ni'","'Juu San'","'Juu Yon'","'Juu Go'","'Juu Roku'","'Juu Nana'","'Juu Hachi'","'Juu Kyu'","'Ni Juu'"]
var word
function toWords(num) {
    num = document.getElementById("number").value
    word = hiragana[num]
    document.getElementById("response").classList.remove("hidden")
    document.getElementById("response").innerHTML = num + " in Japanese is " + word
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
    document.getElementById("response").innerHTML = ""
}

function submit() {
    var number
    number = document.getElementById("answer").value

}