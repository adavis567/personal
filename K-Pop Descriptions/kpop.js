function home() {
    document.getElementById("newJeans").classList.add("hidden")
    document.getElementById("njBackBut").classList.add("hidden")
    document.getElementById("groups").classList.remove("hidden")
}

function njBack() {
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njMemBut").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njInfoBut").classList.remove("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njSongsBut").classList.remove("hidden")
    document.getElementById("njBackBut").classList.add("hidden")
}

function newJeans() {
    document.getElementById("groups").classList.add("hidden")
    document.getElementById("newJeans").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njMemBut").classList.remove("hidden")
    document.getElementById("njInfoBut").classList.remove("hidden")
    document.getElementById("njSongsBut").classList.remove("hidden")
}

function njMembers() {
    document.getElementById("njMembers").classList.remove("hidden")
    document.getElementById("njBackBut").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njMemBut").classList.add("hidden")
    document.getElementById("njInfoBut").classList.add("hidden")
    document.getElementById("njSongsBut").classList.add("hidden")
    document.getElementById("njMemBack").classList.add("hidden")
    document.getElementById("minji").classList.add("hidden")
    document.getElementById("minjiBut").classList.remove("hidden")
    document.getElementById("hanni").classList.add("hidden")
    document.getElementById("hanniBut").classList.remove("hidden")
}

function njMemBack() {
    document.getElementById("njMemBack").classList.add("hidden")
    document.getElementById("njBackBut").classList.remove("hidden")
    document.getElementById("minji").classList.add("hidden")
    document.getElementById("hanni").classList.add("hidden")
    document.getElementById("minjiBut").classList.remove("hidden")
    document.getElementById("hanniBut").classList.remove("hidden")
}


function minji() {
    document.getElementById("njBackBut").classList.add("hidden")
    document.getElementById("njMemBack").classList.remove("hidden")
    document.getElementById("minjiBut").classList.add("hidden")
    document.getElementById("minji").classList.remove("hidden")
    document.getElementById("hanniBut").classList.add("hidden")
    document.getElementById("hanni").classList.add("hidden")
}

function njInfo() {
    document.getElementById("njInfo").classList.remove("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
}

function njSongs() {
    document.getElementById("njSongs").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
}