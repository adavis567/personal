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

var poki = {
    "height": "as tall as she wants to be",
    "personality": "Bish Plz",
    "description": "The Queen Pokimane!!!",
}

var pp = {
    "height": "tall",
    "personality": "simp",
    "description": "ewwwwww Peterrrrr"
}

var celine = {
    "height": "at least taller than rae",
    "personality": "innocent",
    "description": "wahhhhhhhhhh!!!!!",
}

var janjan = {
    "height": "tall",
    "personality": "goofball",
    "description": "manlymanchad"
}

wondy = {
    "height": "taller than lily",
    "personality": "secret troll",
    "description": "wendeeznuts",
}

abe = {
    "height": "taller than wondy",
    "personality": "troll",
    "description": "abesfault",
}

tina = {
    "height": "smol",
    "personality": "cutesy",
    "description": "innocent cawot"
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
    else if (person === "poki") {
        photo = document.getElementById("pokiPhoto").innerHTML
        document.getElementById("pokiPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('poki')
    }
    else if (person === "pp") {
        photo = document.getElementById("peterPhoto").innerHTML
        document.getElementById("peterPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('pp')
    }
    else if (person === "celine") {
        photo = document.getElementById("celinePhoto").innerHTML
        document.getElementById("celinePhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('celine')
    }
    else if (person === "janjan") {
        photo = document.getElementById("janjanPhoto").innerHTML
        document.getElementById("janjanPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('janjan')
    }
    else if (person === "wondy") {
        photo = document.getElementById("wondyPhoto").innerHTML
        document.getElementById("wondyPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('wondy')
    }
    else if (person === "abe") {
        photo = document.getElementById("abePhoto").innerHTML
        document.getElementById("abePhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('abe')
    }
    else if (person === "tina") {
        photo = document.getElementById("tinaPhoto").innerHTML
        document.getElementById("tinaPhoto").classList.remove("hidden")
        document.getElementById("memberPhoto").innerHTML = photo
        removePhotos('tina')
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")

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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "poki") {
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
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "pp") {
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "celine") {
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "janjan") {
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "wondy") {
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "abe") {
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("tinaPhoto").classList.add("hidden")
    }
    else if (person === "tina") {
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
        document.getElementById("pokiPhoto").classList.add("hidden")
        document.getElementById("peterPhoto").classList.add("hidden")
        document.getElementById("celinePhoto").classList.add("hidden")
        document.getElementById("janjanPhoto").classList.add("hidden")
        document.getElementById("wondyPhoto").classList.add("hidden")
        document.getElementById("abePhoto").classList.add("hidden")
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
    document.getElementById("scoring").innerHTML = score + "/20"
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
    if (number === 1) {
        if (answer1 === 'scarra' || answer1 === "Scarra") {
            alert("yay")
            document.getElementById("quest2").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
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
            document.getElementById("scoring").innerHTML = score + "/20"
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
            document.getElementById("scoring").innerHTML = score + "/20"
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
            document.getElementById("scoring").innerHTML = score + "/20"
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
            document.getElementById("scoring").innerHTML = score + "/20"
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
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest7").classList.remove("hidden")
        }
    }
    else if (number === 7) {
        if (answer7 === 'sydney' || answer7 === "Sydney") {
            alert("yay")
            document.getElementById("quest8").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest8").classList.remove("hidden")
        }
    }
    else if (number === 8) {
        if (answer8 === 'jodi' || answer8 === "Jodi") {
            alert("yay")
            document.getElementById("quest9").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest9").classList.remove("hidden")
        }
    }
    else if (number === 9) {
        if (answer9 === 'tina' || answer9 === "Tina") {
            alert("yay")
            document.getElementById("quest10").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest10").classList.remove("hidden")
        }
    }
    else if (number === 10) {
        if (answer10 === 'john' || answer10 === "John") {
            alert("yay")
            document.getElementById("quest11").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest11").classList.remove("hidden")
        }
    }
    else if (number === 11) {
        if (answer11 === 'miyoung' || answer11 === "Miyoung") {
            alert("yay")
            document.getElementById("quest12").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest12").classList.remove("hidden")
        }
    }
    else if (number === 12) {
        if (answer12 === 'lily' || answer12 === "Lily") {
            alert("yay")
            document.getElementById("quest13").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest13").classList.remove("hidden")
        }
    }
    else if (number === 13) {
        if (answer13 === 'poki' || answer13 === "Poki") {
            alert("yay")
            document.getElementById("quest14").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest14").classList.remove("hidden")
        }
    }
    else if (number === 14) {
        if (answer14 === 'wendy' || answer14 === "Wendy") {
            alert("yay")
            document.getElementById("quest15").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest15").classList.remove("hidden")
        }
    }
    else if (number === 15) {
        if (answer15 === 'yvonne' || answer15 === "Yvonne") {
            alert("yay")
            document.getElementById("quest16").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest16").classList.remove("hidden")
        }
    }
    else if (number === 16) {
        if (answer16 === 'janet' || answer16 === "Janet") {
            alert("yay")
            document.getElementById("quest17").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score;
        }
        else {
            alert('no')
            document.getElementById("quest17").classList.remove("hidden")
        }
    }
    else if (number === 17) {
        if (answer17 === 'sykkuno' || answer17 === "Sykkuno") {
            alert("yay")
            document.getElementById("quest18").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest18").classList.remove("hidden")
        }
    }
    else if (number === 18) {
        if (answer18 === 'abe' || answer18 === "Abe") {
            alert("yay")
            document.getElementById("quest19").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest19").classList.remove("hidden")
        }
    }
    else if (number === 19) {
        if (answer19 === 'valkyrae' || answer19 === "Valkyrae") {
            alert("yay")
            document.getElementById("quest20").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
            return score
        }
        else {
            alert('no')
            document.getElementById("quest20").classList.remove("hidden")
        }
    }
    else if (number === 20) {
        if (answer20 === 'peter' || answer20 === "Peter") {
            alert("yay")
            document.getElementById("done").classList.remove("hidden")
            score++
            document.getElementById("scoring").innerHTML = score + "/20"
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
}

function finish() {
    document.getElementById("question20").classList.add("hidden")
    document.getElementById("finishScreen").classList.remove("hidden")
    document.getElementById("scoring").classList.add("hidden")
    document.getElementById("message").innerHTML = "Congrats, You Got A " + score + "/19"
    document.getElementById("home2").classList.remove("hidden")
}