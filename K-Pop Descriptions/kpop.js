function kpopInfo(debut, members, desc, fandom, awards, label) {
    var kpop = {}
    kpop.debut = debut
    kpop.members = members
    kpop.desc = desc
    kpop.fandom = fandom
    kpop.awards = awards
    kpop.label = label
    return kpop
}

var NewJeans = kpopInfo(
    "2022",
    "Minji, Hanni, Haerin, Danielle, Hyein",
    "NewJeans is a South Korean girl group under ADOR, a subsidiary of HYBE. They debuted on July 22, 2022, with the track “Attention” quickly gaining massive popularity for their fresh Y2K-inspired aesthetic and smooth R&B-infused pop sound. Known for hits like “Hype Boy,” “Ditto,” and “OMG,” NewJeans has redefined K-pop trends with their effortless style and nostalgic yet innovative music.",
    "Bunnies",
    "2020 Mama Awards, 2023 Golden Disc Awards, 2024 Asia Artist Awards",
    "Ador"
)


function home() {
    document.getElementById("newJeans").classList.add("hidden")
    document.getElementById("njBackBut").classList.add("hidden")
    document.getElementById("groups").classList.remove("hidden")
    document.body.style.backgroundImage = 'none'
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
    document.body.style.backgroundImage = "url('Photos/newJeans.webp')"
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
    document.getElementById("njInfoBut").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njMemBut").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njSongsBut").classList.add("hidden")
    document.getElementById("njBackBut").classList.remove("hidden")
    document.getElementById("njInfo").innerHTML = 
    "Debut: " + NewJeans.debut + "<br>" + 
    "Members: " + NewJeans.members + "<br>" + 
    "Description: " + NewJeans.desc + "<br" + 
    "Fandom Name: " + NewJeans.fandom + "<br>" +
    "Awards: " + NewJeans.awards + "<br>" +
    "Label: " + NewJeans.label + "<br>"
}

function njSongs() {
    document.getElementById("njSongs").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
}