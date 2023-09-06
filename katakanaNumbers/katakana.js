const katakana = {
    "one":"ichi"
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