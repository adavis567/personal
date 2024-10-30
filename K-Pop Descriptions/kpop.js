function home() {
    document.getElementById("newjeans").classList.add("hidden")
    document.getElementById("groups").classList.remove("hidden")

}

function newJeans() {
    document.getElementById("groups").classList.add("hidden")
    document.getElementById("newjeans").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
}

function njInfo() {
    document.getElementById("njInfo").classList.remove("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
}

function njMembers() {
    document.getElementById("njMembers").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
}

function njSongs() {
    document.getElementById("njSongs").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
}