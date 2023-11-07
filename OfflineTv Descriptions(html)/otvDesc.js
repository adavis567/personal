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

var lily = {
    "height": "short",
    "personality": "starving artist",
    "description": "i love my dogs and michael UwU",
}

var michael = {
    "height": "gigachad",
    "personality": "reeeeeeeee",
    "description": "crackhead nightmare",
}

var scarra = {
    "height": "regular",
    "personality": "best strategy gamer",
    "description": "the don",
}

var jodi = {
    "height": "regular",
    "personality": "best reyna",
    "description": "talks too much about her sex life",
}

var john = {
    "height": "tall",
    "personality": "the '12' incident",
    "description": "gotta pottt!!! minus8",
}

var syd = {
    "height": "regular",
    "personality": "can't handle anything scary with her life",
    "description": "Michael Jackson Lookalike",
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
    else if (member === "evon") {
        document.getElementById("memberInfo").innerHTML = "Evon is " + evon.height + ", she has "
            + evon.personality + " in her blood and this makes her a " + evon.description
        showPhoto("evon")
    }
    else if (member === "lily") {
        document.getElementById("memberInfo").innerHTML = "Lily is a " + lily.height + ","
            + lily.personality + ". Here is a line from her. " + lily.description
        showPhoto("lily")
    }
    else if (member === "michael") {
        document.getElementById("memberInfo").innerHTML = "Mykull is a " + michael.height
            + " when he isn't being a " + michael.description + ". " + michael.personality
        showPhoto("michael")
    }
    else if (member === "scarra") {
        document.getElementById("memberInfo").innerHTML = "Scarra is of " + scarra.height + " height, is known as the "
            + scarra.personality + ", and he secretly shadows as " + scarra.description
        showPhoto("scarra")
    }
    else if (member === "jodi") {
        document.getElementById("memberInfo").innerHTML = "Jodi is " + jodi.height + " and the "
            + jodi.personality + ", but she " + jodi.description
        showPhoto("jodi")
    }
    else if (member === "john") {
        document.getElementById("memberInfo").innerHTML = "John is " + john.height + ", but we don't talk about "
            + john.personality + ". " + john.description
        showPhoto("john")
    }
    else if (member === "syd") {
        document.getElementById("memberInfo").innerHTML = "Syd is " + syd.height + " and " + syd.personality
            + ", but she still looks like a " + syd.description
        showPhoto("syd")
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
    else if (person === "evon") {
        photo = document.getElementById("evonPhoto").innerHTML
        document.getElementById("evonPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('evon')
    }
    else if (person === "lily") {
        photo = document.getElementById("lilyPhoto").innerHTML
        document.getElementById("lilyPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('lily')
    }
    else if (person === "michael") {
        photo = document.getElementById("michaelPhoto").innerHTML
        document.getElementById("michaelPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('michael')
    }
    else if (person === "scarra") {
        photo = document.getElementById("scarraPhoto").innerHTML
        document.getElementById("scarraPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('scarra')
    }
    else if (person === "jodi") {
        photo = document.getElementById("jodiPhoto").innerHTML
        document.getElementById("jodiPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('jodi')
    }
    else if (person === "john") {
        photo = document.getElementById("johnPhoto").innerHTML
        document.getElementById("johnPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('john')
    }
    else if (person === "syd") {
        photo = document.getElementById("sydPhoto").innerHTML
        document.getElementById("sydPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('syd')
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
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    if (person === 'rae') {
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")

    }
    else if (person === 'syk') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === 'toast') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "corpse") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "miyoung") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "leslie") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "evon") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "lily") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "michael") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "scarra") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "jodi") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "john") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("sydPhoto").classList.add("hidden")
    }
    else if (person === "syd") {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
        document.getElementById("corpsePhoto").classList.add("hidden")
        document.getElementById("miyoungPhoto").classList.add("hidden")
        document.getElementById("lesliePhoto").classList.add("hidden")
        document.getElementById("evonPhoto").classList.add("hidden")
        document.getElementById("lilyPhoto").classList.add("hidden")
        document.getElementById("michaelPhoto").classList.add("hidden")
        document.getElementById("scarraPhoto").classList.add("hidden")
        document.getElementById("jodiPhoto").classList.add("hidden")
        document.getElementById("johnPhoto").classList.add("hidden")
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
    document.getElementById("scoring").innerHTML = score + "/10"
    var answer1 = document.getElementById("guess1").value
    var answer2 = document.getElementById("guess2").value
    var answer3 = document.getElementById("guess3").value
    var answer4 = document.getElementById("guess4").value
    var answer5 = document.getElementById("guess5").value
    var answer6 = document.getElementById("guess6").value
    var answer7 = document.getElementById("guess7").value
    var answer8 = document.getElementById("guess8").value
    var answer9 = document.getElementById("guess9").value
    var answer10 = document.getElementById("guess10").value
    if (number === 1) {
        if (answer1 === 'scarra' || answer1 === "Scarra") {
            alert("yay")
            document.getElementById("quest2").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest2").classList.remove("hidden")
        }
    }
    else if (number === 2) {
        if (answer2 === 'leslie' || answer2 === "Leslie") {
            alert("yay")
            document.getElementById("quest3").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest3").classList.remove("hidden")
        }
    }
    else if (number === 3) {
        if (answer3 === 'michael' || answer3 === "Michael") {
            alert("yay")
            document.getElementById("quest4").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest4").classList.remove("hidden")
        }
    }
    else if (number === 4) {
        if (answer4 === 'corpse' || answer4 === "Corpse") {
            alert("yay")
            document.getElementById("quest5").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest5").classList.remove("hidden")
        }
    }
    else if (number === 5) {
        if (answer5 === 'toast' || answer5 === "Toast") {
            alert("yay")
            document.getElementById("quest6").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest6").classList.remove("hidden")
        }
    }
    else if (number === 6) {
        if (answer6 === 'miyoung' || answer6 === "Miyoung") {
            alert("yay")
            document.getElementById("quest7").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest7").classList.remove("hidden")
        }
    }
    else if (number === 7) {
        if (answer7 === 'lily' || answer7 === "Lily") {
            alert("yay")
            document.getElementById("quest8").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest8").classList.remove("hidden")
        }
    }
    else if (number === 8) {
        if (answer8 === 'yvonne' || answer8 === "Yvonne") {
            alert("yay")
            document.getElementById("quest9").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest9").classList.remove("hidden")
        }
    }
    else if (number === 9) {
        if (answer9 === 'sykkuno' || answer9 === "Sykkuno") {
            alert("yay")
            document.getElementById("quest10").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest10").classList.remove("hidden")
        }
    }
    else if (number === 10) {
        if (answer10 === 'valkyrae' || answer10 === "Valkyrae") {
            alert("yay")
            document.getElementById("done").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/10"
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
        document.getElementById("enterBtn1").classList.add("hidden")
        checkAnswer(1)
    }
    else if (question === 2) {
        document.getElementById("enterBtn2").classList.add("hidden")
        checkAnswer(2)
    }
    else if (question === 3) {
        document.getElementById("enterBtn3").classList.add("hidden")
        checkAnswer(3)
    }
    else if (question === 4) {
        document.getElementById("enterBtn4").classList.add("hidden")
        checkAnswer(4)
    }
    else if (question === 5) {
        document.getElementById("enterBtn5").classList.add("hidden")
        checkAnswer(5)
    }
    else if (question === 6) {
        document.getElementById("enterBtn6").classList.add("hidden")
        checkAnswer(6)
    }
    else if (question === 7) {
        document.getElementById("enterBtn7").classList.add("hidden")
        checkAnswer(7)
    }
    else if (question === 8) {
        document.getElementById("enterBtn8").classList.add("hidden")
        checkAnswer(8)
    }
    else if (question === 9) {
        document.getElementById("enterBtn9").classList.add("hidden")
        checkAnswer(9)
    }
    else if (question === 10) {
        document.getElementById("enterBtn10").classList.add("hidden")
        checkAnswer(10)
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
    else if (problem === 7) {
        document.getElementById("question6").classList.add("hidden")
        document.getElementById("question7").classList.remove("hidden")
    }
    else if (problem === 8) {
        document.getElementById("question7").classList.add("hidden")
        document.getElementById("question8").classList.remove("hidden")
    }
    else if (problem === 9) {
        document.getElementById("question8").classList.add("hidden")
        document.getElementById("question9").classList.remove("hidden")
    }
    else if (problem === 10) {
        document.getElementById("question9").classList.add("hidden")
        document.getElementById("question10").classList.remove("hidden")
    }
}

function finish() {
    document.getElementById("question10").classList.add("hidden")
    document.getElementById("finishScreen").classList.remove("hidden")
    document.getElementById("scoring").classList.add("hidden")
    document.getElementById("message").innerHTML = "Congrats, You Got A " + score + "/10"
    document.getElementById("home2").classList.remove("hidden")
}