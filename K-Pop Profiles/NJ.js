//Function to make a list for the info of kpop groups
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

//New Jeans Info
var NewJeans = kpopInfo(
    "2022",
    "Minji, Hanni, Haerin, Danielle, Hyein",
    "NewJeans is a South Korean girl group under ADOR, a subsidiary of HYBE. They debuted on July 22, 2022, with the track “Attention” quickly gaining massive popularity for their fresh Y2K-inspired aesthetic and smooth R&B-infused pop sound. Known for hits like “Hype Boy,” “Ditto,” and “OMG,” NewJeans has redefined K-pop trends with their effortless style and nostalgic yet innovative music.",
    "Bunnies",
    "2020 Mama Awards, 2023 Golden Disc Awards, 2024 Asia Artist Awards",
    "Ador"
)

//Home Button that bring you back to the groups section
function home() {
    document.getElementById("newJeans").classList.add("hidden")
    document.getElementById("njBackBut").classList.add("hidden")
    document.getElementById("groups").classList.remove("hidden")
    document.body.style.backgroundImage = 'none'
    stopAudio()
}

//Back Button to bring you back to new jeans home
function njBack() {
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njMemBut").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njInfoBut").classList.remove("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njSongsBut").classList.remove("hidden")
    document.getElementById("njBackBut").classList.add("hidden")
    //Resets the songs
    stopAudio()
 
}

//Button to bring you to the new jeans section
function newJeans() {
    document.getElementById("groups").classList.add("hidden")
    document.getElementById("newJeans").classList.remove("hidden")
    document.getElementById("njInfo").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njMemBut").classList.remove("hidden")
    document.getElementById("njInfoBut").classList.remove("hidden")
    document.getElementById("njSongsBut").classList.remove("hidden")
    //Changes the background image
    document.body.style.backgroundImage = "url('Photos/NewJeans/newJeans.webp')"
}

//Button to bring up the info for the members of new jeans 
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

//Button to bring you back to members section
function njMemBack() {
    document.getElementById("njMemBack").classList.add("hidden")
    document.getElementById("njBackBut").classList.remove("hidden")
    document.getElementById("minji").classList.add("hidden")
    document.getElementById("hanni").classList.add("hidden")
    document.getElementById("minjiBut").classList.remove("hidden")
    document.getElementById("hanniBut").classList.remove("hidden")
}

//Button to bring up minjis info
function minji() {
    document.getElementById("njBackBut").classList.add("hidden")
    document.getElementById("njMemBack").classList.remove("hidden")
    document.getElementById("minjiBut").classList.add("hidden")
    document.getElementById("minji").classList.remove("hidden")
    document.getElementById("hanniBut").classList.add("hidden")
    document.getElementById("hanni").classList.add("hidden")
}

//Button to bring up new jeans info section
function njInfo() {
    document.getElementById("njInfo").classList.remove("hidden")
    document.getElementById("njInfoBut").classList.add("hidden")
    document.getElementById("njMembers").classList.add("hidden")
    document.getElementById("njMemBut").classList.add("hidden")
    document.getElementById("njSongs").classList.add("hidden")
    document.getElementById("njSongsBut").classList.add("hidden")
    document.getElementById("njBackBut").classList.remove("hidden")
    //Places the Info into place
    document.getElementById("njInfo").innerHTML =
        "Debut: " + NewJeans.debut + "<br>" +
        "Members: " + NewJeans.members + "<br>" +
        "Description: " + NewJeans.desc + "<br>" +
        "Fandom Name: " + NewJeans.fandom + "<br>" +
        "Awards: " + NewJeans.awards + "<br>" +
        "Label: " + NewJeans.label + "<br>" +
        "<img src='Photos/NewJeans/newJeansGif.gif'>"
}

//Button to bring up new jeans song section
function njSongs() {
    document.getElementById("njSongsBut").classList.add("hidden");
    document.getElementById("njSongs").classList.remove("hidden");
    document.getElementById("njInfo").classList.add("hidden");
    document.getElementById("njInfoBut").classList.add("hidden");
    document.getElementById("njMembers").classList.add("hidden");
    document.getElementById("njMemBut").classList.add("hidden");
    document.getElementById("njBackBut").classList.remove("hidden");
    document.getElementById("album1").classList.remove("hidden")
    document.getElementById("album1Area").classList.add("hidden")
    document.getElementById("album2").classList.remove("hidden")
    document.getElementById("album2Area").classList.add("hidden")
    disableControls();
}

//Songs

//Hype Boy
function playHypeBoy() {
    disableControls()
    stopAudio()
    const hypeBoy = document.getElementById("hypeBoy");

    if (hypeBoy.paused) {
        hypeBoy.play();
    } else {
        hypeBoy.pause();
    }
    enableControlsHype();
    document.getElementById("album2").classList.add("hidden")
    document.getElementById("album1Area").classList.remove("hidden")
}

//Hype Boy Controls
function enableControlsHype() {
    const hypeBoy = document.getElementById("hypeBoy");
    hypeBoy.controls = true;
}

//OMG
function playOMG() {
    disableControls()
    stopAudio()
    const OMG = document.getElementById("OMG");

    if (OMG.paused) {
        OMG.play();
    } else {
        OMG.pause();
    }

    enableControlsOMG();
    document.getElementById("album1").classList.add("hidden")
    document.getElementById("album2Area").classList.remove("hidden")
}

//OMG Controls
function enableControlsOMG() {
    const OMG = document.getElementById("OMG");
    OMG.controls = true;
}

//Functions to Reset Audio
function stopAudio() {
    document.querySelectorAll('.group-audio').forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
});
}

//Function to Remove Controls
function disableControls() {
    const hypeBoy = document.getElementById("hypeBoy");
    hypeBoy.controls = false;
    const OMG = document.getElementById("OMG");
    OMG.controls = false;
}
