// Dictionary Entries
// Factory Function
function otv(height, personality, description) {
    var Otv = {}
    Otv.height = height
    Otv.personality = personality
    Otv.description = description
    return Otv
}
var rae = otv("short", "excited", "craezy")

var syk = otv("tall", "absolute sicko", "trollkkuno")

var toast = otv("regular", "gigachad", "DSG amongus guy")

var corpse = otv("tallest", "cool", "anyone wanna play muck?")

var miyoung = otv("dunno", "psychotic", "absolute hentai degenerate")

var leslie = otv("tall", "sheeeeeesh", "guitar girl")

var evon = otv("short", "starbucks", "pleb gremlin")

var lily = otv("short", "starving artist", "i love my dogs and michael uwu")

var michael = otv("gigachad", "reeeeeeeee", "crackhead nightmare")

var scarra = otv("regular", "best strategy gamer", "the don")

var jodi = otv("regular", "best reyna", "talks too much about her sex life")

var john = otv("tall", "the '12' incident", "gotta pottt!!! minus8")

var syd = otv("regular", "can't handle anything scary with ehr life", "Michael Jackson Lookalike")

var poki = otv("as tall as she wants to be", "Bish Plz", "The Queen Pokimane!!!")

var pp = otv("tall", "simp", "ewwwwww Peterrrrr")

var celine = otv("at least laller than rae", "innocent", "wahhhhhhhhhh!!!!!")

var janjan = otv("tall", "goofball", "manlymanchad")

var wondy = otv("taller than lily", "secret troll", "wendeeznuts")

var abe = otv("taller thna wondy", "troll", "abesfault")

var tina = otv("smol", "cutesy", "innocent cawot")

var brodin = otv("too tall", "demonic", "f you brodin")

var brooke = otv("regular", "better than peter", "white pink dinosaur")

var kyedae = otv("tall", "valorant addict", "kirby pfp. smh")

var aria = otv("regular", "dirty minded freak", "hottest chef")

var tenzin = otv("short", "monkey maniac", "wholey supports incest")

var albert = otv("regular", "literal genius", "2 seconds on spot the difference")

var sean = otv("regular", "wacky", "funny speedster")

var edison = otv("tall", "IronMan", "sykkunos husband")

var ryan = otv("regular", "nigahigagirlygirlgina", "#1 JanJan impersonator")

var jaime = otv("short", "If it doesn't match my aesthetic, don't give it to me", "I like cute things and have the best style of clothes")

var lud = otv("regular", "professional scammer", "uses money to solve his problems")

var tarik = otv("tall", "lil bro", "professional hater of DSG")

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
    else if (member === "poki") {
        document.getElementById("memberInfo").innerHTML = "Poki is " + poki.height + ". " + poki.personality
            + "! " + "All hail " + poki.description
        showPhoto("poki")
    }
    else if (member === "pp") {
        document.getElementById("memberInfo").innerHTML = "Peter is a " + pp.height + " "
            + pp.personality + ". " + pp.description
        showPhoto("pp")
    }
    else if (member === "celine") {
        document.getElementById("memberInfo").innerHTML = "Celine is " + celine.height + ", she's "
            + celine.personality + ", and when she’s scared, she goes " + celine.description
        showPhoto("celine")
    }
    else if (member === "janjan") {
        document.getElementById("memberInfo").innerHTML = "By day, Janet is a " + janjan.height
            + " " + janjan.personality + ", but by night, she’s " + janjan.description
        showPhoto("janjan")
    }
    else if (member === "wondy") {
        document.getElementById("memberInfo").innerHTML = "Wendy is " + wondy.height + ", and is a "
            + wondy.personality + " when she’s not screaming " + wondy.description
        showPhoto("wondy")
    }
    else if (member === "abe") {
        document.getElementById("memberInfo").innerHTML = "Abe is definitely " + abe.height + ", he's a "
            + abe.personality + ", and when things don't go your way, just remember " + abe.description
        showPhoto("abe")
    }
    else if (member === "tina") {
        document.getElementById("memberInfo").innerHTML = "Tina’s a " + tina.height + ", "
            + tina.personality + ", " + tina.description
        showPhoto("tina")
    }
    else if (member === "brodin") {
        document.getElementById("memberInfo").innerHTML = "Brodin is " + brodin.height + " and has a "
            + brodin.personality + " disposition. " + brodin.description
        showPhoto("brodin")
    }
    else if (member === "brooke") {
        document.getElementById("memberInfo").innerHTML = "Brooke may be " + brooke.height
            + ", but anything she does, she’ll always be " + brooke.personality + ". Best " + brooke.description
        showPhoto("brooke")
    }
    else if (member === "kyedae") {
        document.getElementById("memberInfo").innerHTML = "Kyedae is a " + kyedae.height + ", "
            + kyedae.personality + ". Lets just not talk about the " + kyedae.description
        showPhoto("kyedae")
    }
    else if (member === "aria") {
        document.getElementById("memberInfo").innerHTML = "Aria may be known as the " + aria.height
            + " and " + aria.personality + ", but I know her as the " + aria.description
        showPhoto("aria")
    }
    else if (member === "tenzin") {
        document.getElementById("memberInfo").innerHTML = "Tenzin is a " + tenzin.height + ", "
            + tenzin.personality + " who " + tenzin.description
        showPhoto("tenzin")
    }
    else if (member === "albert") {
        document.getElementById("memberInfo").innerHTML = "Albert is your " + albert.height + albert.personality
            + " since he literally got " + albert.description
        showPhoto("albert")
    }
    else if (member === "sean") {
        document.getElementById("memberInfo").innerHTML = "Sean is your " + sean.height
            + ", everyday, " + sean.personality + ", " + sean.description
        showPhoto("sean")
    }
    else if (member === "edison") {
        document.getElementById("memberInfo").innerHTML = "Edison is " + edison.height + ", "
            + edison.personality + ", and " + edison.description
        showPhoto("edison")
    }
    else if (member === "ryan") {
        document.getElementById("memberInfo").innerHTML = "Ryan is of " + ryan.height + " height, goes by "
            + ryan.personality + ", and is the " + ryan.description
        showPhoto("ryan")
    }
    else if (member === "jaime") {
        document.getElementById("memberInfo").innerHTML = "Jaime is " + jaime.height + ". Jaime, any words? '"
            + jaime.personality + ", but " + jaime.description
        showPhoto("jaime")
    }
    else if (member === "lud") {
        document.getElementById("memberInfo").innerHTML = "Ludwig is " + lud.height + ", fails at being a "
        + lud.personality + ", and " + lud.description
        showPhoto("lud")
    }
    else if (member === "tarik") {
        document.getElementById("memberInfo").innerHTML = "Tarik is " + tarik.height + " and is still our favorite "
        + tarik.personality + " even if he is a " + tarik.description
        showPhoto("tarik")
    }
}

function showPhoto(person) {
    var photoElement = document.getElementById(`${person}Photo`);
    var photo = photoElement.innerHTML;

    photoElement.classList.remove("hidden");
    document.getElementById("memberPhoto").innerHTML = photo;

    removePhotos(person);
}

function removePhotos(person) {
    const allPersons = [
        "rae", "syk", "toast", "corpse", "miyoung", "leslie", "evon", "lily",
        "michael", "scarra", "jodi", "john", "syd", "poki", "peter", "celine",
        "janjan", "wondy", "abe", "tina", "brodin", "brooke", "kyedae", "aria",
        "tenzin", "albert", "sean", "edison", "ryan", "jaime", "lud", "tarik"
    ];

    if (person === 'all' || allPersons.includes(person)) {
        allPersons.forEach(p => {
            if (p !== person) {
                document.getElementById(`${p}Photo`).classList.add("hidden");
            }
        });
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
    document.getElementById("scoring").innerHTML = score + "/32"
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
    var answer11 = document.getElementById("guess11").value
    var answer12 = document.getElementById("guess12").value
    var answer13 = document.getElementById("guess13").value
    var answer14 = document.getElementById("guess14").value
    var answer15 = document.getElementById("guess15").value
    var answer16 = document.getElementById("guess16").value
    var answer17 = document.getElementById("guess17").value
    var answer18 = document.getElementById("guess18").value
    var answer19 = document.getElementById("guess19").value
    var answer20 = document.getElementById("guess20").value
    var answer21 = document.getElementById("guess21").value
    var answer22 = document.getElementById("guess22").value
    var answer23 = document.getElementById("guess23").value
    var answer24 = document.getElementById("guess24").value
    var answer25 = document.getElementById("guess25").value
    var answer26 = document.getElementById("guess26").value
    var answer27 = document.getElementById("guess27").value
    var answer28 = document.getElementById("guess28").value
    var answer29 = document.getElementById("guess29").value
    var answer30 = document.getElementById("guess30").value
    var answer31 = document.getElementById("guess31").value
    var answer32 = document.getElementById("guess32").value
    if (number === 1) {
        if (answer1 === 'scarra' || answer1 === "Scarra") {
            alert("yay")
            document.getElementById("quest2").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
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
            document.getElementById("scoring").innerHTML = score + "/32"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest3").classList.remove("hidden")
        }
    }
    else if (number === 3) {
        if (answer3 === 'celine' || answer3 === "Celine") {
            alert("yay")
            document.getElementById("quest4").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest4").classList.remove("hidden")
        }
    }
    else if (number === 4) {
        if (answer4 === 'michael' || answer4 === "Michael") {
            alert("yay")
            document.getElementById("quest5").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest5").classList.remove("hidden")
        }
    }
    else if (number === 5) {
        if (answer5 === 'corpse' || answer5 === "Corpse") {
            alert("yay")
            document.getElementById("quest6").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest6").classList.remove("hidden")
        }
    }
    else if (number === 6) {
        if (answer6 === 'toast' || answer6 === "Toast") {
            alert("yay")
            document.getElementById("quest7").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest7").classList.remove("hidden")
        }
    }
    else if (number === 7) {
        if (answer7 === 'jaime' || answer7 === "Jaime") {
            alert("yay")
            document.getElementById("quest8").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest8").classList.remove("hidden")
        }
    }
    else if (number === 8) {
        if (answer8 === 'brooke' || answer8 === "Brooke") {
            alert("yay")
            document.getElementById("quest9").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("ques9").classList.remove("hidden")
        }
    }
    else if (number === 9) {
        if (answer9 === 'sydney' || answer9 === "Sydney") {
            alert("yay")
            document.getElementById("quest10").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest10").classList.remove("hidden")
        }
    }
    else if (number === 10) {
        if (answer10 === 'jodi' || answer10 === "Jodi") {
            alert("yay")
            document.getElementById("quest11").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest11").classList.remove("hidden")
        }
    }
    else if (number === 11) {
        if (answer11 === 'tina' || answer11 === "Tina") {
            alert("yay")
            document.getElementById("quest12").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest12").classList.remove("hidden")
        }
    }
    else if (number === 12) {
        if (answer12 === 'lud' || answer12 === "Lud") {
            alert("yay")
            document.getElementById("quest13").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest13").classList.remove("hidden")
        }
    }
    else if (number === 13) {
        if (answer13 === 'albert' || answer13 === "Albert") {
            alert("yay")
            document.getElementById("quest14").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest14").classList.remove("hidden")
        }
    }
    else if (number === 14) {
        if (answer14 === 'ryan' || answer14 === "Ryan") {
            alert("yay")
            document.getElementById("quest15").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest15").classList.remove("hidden")
        }
    }
    else if (number === 15) {
        if (answer15 === 'john' || answer15 === "John") {
            alert("yay")
            document.getElementById("quest16").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest16").classList.remove("hidden")
        }
    }
    else if (number === 16) {
        if (answer16 === 'miyoung' || answer16 === "Miyoung") {
            alert("yay")
            document.getElementById("quest17").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest17").classList.remove("hidden")
        }
    }
    else if (number === 17) {
        if (answer17 === 'lily' || answer17 === "Lily") {
            alert("yay")
            document.getElementById("quest18").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest18").classList.remove("hidden")
        }
    }
    else if (number === 18) {
        if (answer18 === 'kyedae' || answer18 === "Kyedae") {
            alert("yay")
            document.getElementById("quest19").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest19").classList.remove("hidden")
        }
    }
    else if (number === 19) {
        if (answer19 === 'poki' || answer19 === "Poki") {
            alert("yay")
            document.getElementById("quest20").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest20").classList.remove("hidden")
        }
    }
    else if (number === 20) {
        if (answer20 === 'aria' || answer20 === "Aria") {
            alert("yay")
            document.getElementById("quest21").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest21").classList.remove("hidden")
        }
    }
    else if (number === 21) {
        if (answer21 === 'tarik' || answer21 === "Tarik") {
            alert("yay")
            document.getElementById("quest22").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest22").classList.remove("hidden")
        }
    }
    else if (number === 22) {
        if (answer22 === 'wendy' || answer22 === "Wendy") {
            alert("yay")
            document.getElementById("quest23").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest23").classList.remove("hidden")
        }
    }
    else if (number === 23) {
        if (answer23 === 'yvonne' || answer23 === "Yvonne") {
            alert("yay")
            document.getElementById("quest24").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest24").classList.remove("hidden")
        }
    }
    else if (number === 24) {
        if (answer24 === 'janet' || answer24 === "Janet") {
            alert("yay")
            document.getElementById("quest25").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest25").classList.remove("hidden")
        }
    }
    else if (number === 25) {
        if (answer25 === 'brodin' || answer25 === "Brodin") {
            alert("yay")
            document.getElementById("quest26").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest26").classList.remove("hidden")
        }
    }
    else if (number === 26) {
        if (answer26 === 'sykkuno' || answer26 === "Sykkuno") {
            alert("yay")
            document.getElementById("quest27").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest27").classList.remove("hidden")
        }
    }
    else if (number === 27) {
        if (answer27 === 'abe' || answer27 === "Abe") {
            alert("yay")
            document.getElementById("quest28").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest28").classList.remove("hidden")
        }
    }
    else if (number === 28) {
        if (answer28 === 'edison' || answer28 === "Edison") {
            alert("yay")
            document.getElementById("quest29").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest29").classList.remove("hidden")
        }
    }
    else if (number === 29) {
        if (answer29 === 'tenzin' || answer29 === "Tenzin") {
            alert("yay")
            document.getElementById("quest30").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest30").classList.remove("hidden")
        }
    }
    else if (number === 30) {
        if (answer30 === 'sean' || answer30 === "Sean") {
            alert("yay")
            document.getElementById("quest31").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest31").classList.remove("hidden")
        }
    }
    else if (number === 31) {
        if (answer31 === 'valkyrae' || answer31 === "Valkyrae") {
            alert("yay")
            document.getElementById("quest32").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest32").classList.remove("hidden")
        }
    }
    else if (number === 32) {
        if (answer32 === 'peter' || answer32 === "Peter") {
            alert("yay")
            document.getElementById("done").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/32"
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
    else if (question === 11) {
        document.getElementById("enterBtn11").classList.add("hidden")
        checkAnswer(11)
    }
    else if (question === 12) {
        document.getElementById("enterBtn12").classList.add("hidden")
        checkAnswer(12)
    }
    else if (question === 13) {
        document.getElementById("enterBtn13").classList.add("hidden")
        checkAnswer(13)
    }
    else if (question === 14) {
        document.getElementById("enterBtn14").classList.add("hidden")
        checkAnswer(14)
    }
    else if (question === 15) {
        document.getElementById("enterBtn15").classList.add("hidden")
        checkAnswer(15)
    }
    else if (question === 16) {
        document.getElementById("enterBtn16").classList.add("hidden")
        checkAnswer(16)
    }
    else if (question === 17) {
        document.getElementById("enterBtn17").classList.add("hidden")
        checkAnswer(17)
    }
    else if (question === 18) {
        document.getElementById("enterBtn18").classList.add("hidden")
        checkAnswer(18)
    }
    else if (question === 19) {
        document.getElementById("enterBtn19").classList.add("hidden")
        checkAnswer(19)
    }
    else if (question === 20) {
        document.getElementById("enterBtn20").classList.add("hidden")
        checkAnswer(20)
    }
    else if (question === 21) {
        document.getElementById("enterBtn21").classList.add("hidden")
        checkAnswer(21)
    }
    else if (question === 22) {
        document.getElementById("enterBtn22").classList.add("hidden")
        checkAnswer(22)
    }
    else if (question === 23) {
        document.getElementById("enterBtn23").classList.add("hidden")
        checkAnswer(23)
    }
    else if (question === 24) {
        document.getElementById("enterBtn24").classList.add("hidden")
        checkAnswer(24)
    }
    else if (question === 25) {
        document.getElementById("enterBtn25").classList.add("hidden")
        checkAnswer(25)
    }
    else if (question === 26) {
        document.getElementById("enterBtn26").classList.add("hidden")
        checkAnswer(26)
    }
    else if (question === 27) {
        document.getElementById("enterBtn27").classList.add("hidden")
        checkAnswer(27)
    }
    else if (question === 28) {
        document.getElementById("enterBtn28").classList.add("hidden")
        checkAnswer(28)
    }
    else if (question === 29) {
        document.getElementById("enterBtn29").classList.add("hidden")
        checkAnswer(29)
    }
    else if (question === 30) {
        document.getElementById("enterBtn30").classList.add("hidden")
        checkAnswer(30)
    }
    else if (question === 31) {
        document.getElementById("enterBtn31").classList.add("hidden")
        checkAnswer(31)
    }
    else if (question === 32) {
        document.getElementById("enterBtn32").classList.add("hidden")
        checkAnswer(32)
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
    else if (problem === 11) {
        document.getElementById("question10").classList.add("hidden")
        document.getElementById("question11").classList.remove("hidden")
    }
    else if (problem === 12) {
        document.getElementById("question11").classList.add("hidden")
        document.getElementById("question12").classList.remove("hidden")
    }
    else if (problem === 13) {
        document.getElementById("question12").classList.add("hidden")
        document.getElementById("question13").classList.remove("hidden")
    }
    else if (problem === 14) {
        document.getElementById("question13").classList.add("hidden")
        document.getElementById("question14").classList.remove("hidden")
    }
    else if (problem === 15) {
        document.getElementById("question14").classList.add("hidden")
        document.getElementById("question15").classList.remove("hidden")
    }
    else if (problem === 16) {
        document.getElementById("question15").classList.add("hidden")
        document.getElementById("question16").classList.remove("hidden")
    }
    else if (problem === 17) {
        document.getElementById("question16").classList.add("hidden")
        document.getElementById("question17").classList.remove("hidden")
    }
    else if (problem === 18) {
        document.getElementById("question17").classList.add("hidden")
        document.getElementById("question18").classList.remove("hidden")
    }
    else if (problem === 19) {
        document.getElementById("question18").classList.add("hidden")
        document.getElementById("question19").classList.remove("hidden")
    }
    else if (problem === 20) {
        document.getElementById("question19").classList.add("hidden")
        document.getElementById("question20").classList.remove("hidden")
    }
    else if (problem === 21) {
        document.getElementById("question20").classList.add("hidden")
        document.getElementById("question21").classList.remove("hidden")
    }
    else if (problem === 22) {
        document.getElementById("question21").classList.add("hidden")
        document.getElementById("question22").classList.remove("hidden")
    }
    else if (problem === 23) {
        document.getElementById("question22").classList.add("hidden")
        document.getElementById("question23").classList.remove("hidden")
    }
    else if (problem === 24) {
        document.getElementById("question23").classList.add("hidden")
        document.getElementById("question24").classList.remove("hidden")
    }
    else if (problem === 25) {
        document.getElementById("question24").classList.add("hidden")
        document.getElementById("question25").classList.remove("hidden")
    }
    else if (problem === 26) {
        document.getElementById("question25").classList.add("hidden")
        document.getElementById("question26").classList.remove("hidden")
    }
    else if (problem === 27) {
        document.getElementById("question26").classList.add("hidden")
        document.getElementById("question27").classList.remove("hidden")
    }
    else if (problem === 28) {
        document.getElementById("question27").classList.add("hidden")
        document.getElementById("question28").classList.remove("hidden")
    }
    else if (problem === 29) {
        document.getElementById("question28").classList.add("hidden")
        document.getElementById("question29").classList.remove("hidden")
    }
    else if (problem === 30) {
        document.getElementById("question29").classList.add("hidden")
        document.getElementById("question30").classList.remove("hidden")
    }
    else if (problem === 31) {
        document.getElementById("question30").classList.add("hidden")
        document.getElementById("question31").classList.remove("hidden")
    }
    else if (problem === 32) {
        document.getElementById("question31").classList.add("hidden")
        document.getElementById("question32").classList.remove("hidden")
    }
}

function finish() {
    document.getElementById("question32").classList.add("hidden")
    document.getElementById("finishScreen").classList.remove("hidden")
    document.getElementById("scoring").classList.add("hidden")
    document.getElementById("message").innerHTML = "Congrats, You Got A " + score + "/32"
    document.getElementById("home2").classList.remove("hidden")
}