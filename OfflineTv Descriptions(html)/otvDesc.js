// Dictionary Entries

var rae = {
    "height": "short",
    "personality": "excited",
    "description": "craezy",
}

var syk = {
    "height": "tall",
    "personality": "absolute sicko",
    "description": "trollkkuno"
}

var toast = {
    "height": "regular",
    "personality": "gigachad",
    "description": "DSG amongus guy",
}

var corpse = {
    "height": "tallest",
    "personality": "cool",
    "description": "anyone wanna play muck?",
}

var miyoung = {
    "height": "dunno",
    "personality": "psychotic",
    "description": "absolute hentai degenerate"
}

var leslie = {
    "height": "tall",
    "personality": "sheeeeeesh",
    "description": "guitar girl"
}

var evon = {
    "height": "short",
    "personality": "starbucks",
    "description": "pleb gremlin"
}

// Startup Functions

function descriptions() {
    document.getElementById("descriptions").classList.remove("hidden")
    document.getElementById("welcome").classList.add("hidden")
    document.getElementById("selection").classList.add("hidden")
}

function descriptionHome() {
    document.getElementById("descriptions").classList.add("hidden")
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("welcome").classList.remove("hidden")
    document.getElementById("selection").classList.remove("hidden")
    document.getElementById("memberInfo").innerHTML = ""
    document.getElementById("memberSelect").value = "placeholder"
    removePhotos('all')
}

function quiz() {
    document.getElementById("quiz").classList.remove("hidden")
    document.getElementById("welcome").classList.add("hidden")
    document.getElementById("selection").classList.add("hidden")
}

function home() {
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("welcome").classList.remove("hidden")
    document.getElementById("selection").classList.remove("hidden")
}

function quizHome() {
    location.reload()
}

// Helper Functions

// Descriptions Code

function getMemberInfo() {
    var member
    member = document.getElementById("memberSelect").value
    if (member === "rae") {
        document.getElementById("memberInfo").innerHTML = "Rae is " + rae.height + ", " +
            rae.personality + ", and " + rae.description;
        showPhoto("rae")
    }
    else if (member === "syk") {
        document.getElementById("memberInfo").innerHTML = "Syk is " + syk.height + ", an " +
            syk.personality + ", and " + syk.description;
        showPhoto("syk")
    }
    else if (member === "toast") {
        document.getElementById("memberInfo").innerHTML = "Toast is the " + toast.height + ", " +
            toast.personality + ", " + toast.description
        showPhoto("toast")
    }
    else if (member === "corpse") {
        document.getElementById("memberInfo").innerHTML = "Corpse is the " + corpse.height + ", " +
            corpse.personality + "est person who just wants to know if , " + corpse.description
        showPhoto("corpse")
    }
    else if (member === "miyoung") {
        document.getElementById("memberInfo").innerHTML = "Miyoung is " + miyoung.height + " inches tall, "
            + miyoung.personality + ", and an " + miyoung.description
        showPhoto("miyoung")
    }
    else if (member === "leslie") {
        document.getElementById("memberInfo").innerHTML = "Leslie is " + leslie.height + ", she like to say "
            + leslie.personality + ", and some people know her as the " + leslie.description
        showPhoto("leslie")
    }
}

function showPhoto(person) {
    var photo
    if (person === "rae") {
        photo = document.getElementById("raePhoto").innerHTML
        document.getElementById("raePhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('rae')
    }
    else if (person === "syk") {
        photo = document.getElementById("sykPhoto").innerHTML
        document.getElementById("sykPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('syk')
    }
    else if (person === 'toast') {
        photo = document.getElementById("toastPhoto").innerHTML
        document.getElementById("toastPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('toast')
    }
    else if (person === "corpse") {
        photo = document.getElementById("corpsePhoto").innerHTML
        document.getElementById("corpsePhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('corpse')
    }
    else if (person === "miyoung") {
        photo = document.getElementById("miyoungPhoto").innerHTML
        document.getElementById("miyoungPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('miyoung')
    }
    else if (person === "leslie") {
        photo = document.getElementById("lesliePhoto").innerHTML
        document.getElementById("lesliePhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('leslie')
    }
}

function removePhotos(person) {
    if (person === 'all') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
    }
    if (person === 'rae') {
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")

    }
    else if (person === 'syk') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
    }
    else if (person === 'toast') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
    }
    else if (person === "corpse") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
    }
    else if (person === "miyoung") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
    }
    else if (person === "leslie") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
    }
}

// Quiz Code

var score = 0

function start() {
    document.getElementById("quizStart").classList.add("hidden")
    document.getElementById("scoreboard").classList.remove("hidden")
    document.getElementById("question1").classList.remove("hidden")
}

function checkAnswer(number) {
    document.getElementById("scoring").innerHTML = score + "/6"
    var answer1 = document.getElementById("guess1").value
    var answer2 = document.getElementById("guess2").value
    var answer3 = document.getElementById("guess3").value
    var answer4 = document.getElementById("guess4").value
    var answer5 = document.getElementById("guess5").value
    var answer6 = document.getElementById("guess6").value
    if (number === 1) {
        if (answer1 === 'leslie' || answer1 === "Leslie") {
            alert("yay")
            document.getElementById("quest2").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/6"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest2").classList.remove("hidden")
        }
    }
    else if (number === 2) {
        if (answer2 === 'corpse' || answer2 === "Corpse") {
            alert("yay")
            document.getElementById("quest3").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/6"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest3").classList.remove("hidden")
        }
    }
    else if (number === 3) {
        if (answer3 === 'toast' || answer3 === "Toast") {
            alert("yay")
            document.getElementById("quest4").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/6"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest4").classList.remove("hidden")
        }
    }
    else if (number === 4) {
        if (answer4 === 'miyoung' || answer4 === "Miyoung") {
            alert("yay")
            document.getElementById("quest5").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/6"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest5").classList.remove("hidden")
        }
    }
    else if (number === 5) {
        if (answer5 === 'sykkuno' || answer5 === "Sykkuno") {
            alert("yay")
            document.getElementById("quest6").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/6"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest6").classList.remove("hidden")
        }
    }
    else if (number === 6) {
        if (answer6 === 'valkyrae' || answer6 === "Valkyrae") {
            alert("yay")
            document.getElementById("done").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/6"
            return score
        }
        else {
            alert('no')
            document.getElementById("done").classList.remove("hidden")
        }
    }
}

function enter(question) {
    if (question === 1) {
        checkAnswer(1)
    }
    else if (question === 2) {
        checkAnswer(2)
    }
    else if (question === 3) {
        checkAnswer(3)
    }
    else if (question === 4) {
        checkAnswer(4)
    }
    else if (question === 5) {
        checkAnswer(5)
    }
    else if (question === 6) {
        checkAnswer(6)
    }
}

function question(problem) {
    if (problem === 2) {
        document.getElementById("question1").classList.add("hidden")
        document.getElementById("question2").classList.remove("hidden")
    }
    else if (problem === 3) {
        document.getElementById("question2").classList.add("hidden")
        document.getElementById("question3").classList.remove("hidden")
    }
    else if (problem === 4) {
        document.getElementById("question3").classList.add("hidden")
        document.getElementById("question4").classList.remove("hidden")
    }
    else if (problem === 5) {
        document.getElementById("question4").classList.add("hidden")
        document.getElementById("question5").classList.remove("hidden")
    }
    else if (problem === 6) {
        document.getElementById("question5").classList.add("hidden")
        document.getElementById("question6").classList.remove("hidden")
    }
}

function finish() {
    document.getElementById("question6").classList.add("hidden")
    document.getElementById("finishScreen").classList.remove("hidden")
    document.getElementById("scoring").classList.add("hidden")
    document.getElementById("message").innerHTML = "Congrats, You Got A " + score + "/6"
    document.getElementById("home2").classList.remove("hidden")
}