function descriptions() {
    document.getElementById("descriptions").classList.remove("hidden")
    document.getElementById("welcome").classList.add("hidden")
    document.getElementById("selection").classList.add("hidden")
}

function quiz() {
    document.getElementById("quiz").classList.remove("hidden")
    document.getElementById("welcome").classList.add("hidden")
    document.getElementById("selection").classList.add("hidden")
}

function home() {
    document.getElementById("descriptions").classList.add("hidden")
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("welcome").classList.remove("hidden")
    document.getElementById("selection").classList.remove("hidden")
}