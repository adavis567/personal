



var rae = {
    "height": "short",
    "personality": "excited",
    "description": "craezy",
}

var syk = {
    "height": "tall",
    "personality": "a sicko",
    "description": "trollkkuno"
}

var toast = {
    "height": "regular",
    "personality": "gigachad",
    "description": "Dsg amongus guy",
}

function getMemberInfo() {
    var member
    member = document.getElementById("memberSelect").value
    if (member === "rae") {
        document.getElementById("memberInfo").innerHTML = "Rae is " + rae.height + ", " +
            rae.personality + ", and " + rae.description;
        showPhoto("rae")
    }
    else if (member === "syk") {
        document.getElementById("memberInfo").innerHTML = "Syk is " + syk.height + ", " +
            syk.personality + ", and " + syk.description;
        showPhoto("syk")
    }
    else if (member === "toast") {
        document.getElementById("memberInfo").innerHTML = "Toast is a " + toast.height + ", " +
            toast.personality + ", " + toast.description
        showPhoto("toast")
    }
}

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
    document.getElementById("memberInfo").innerHTML = ""
    document.getElementById("memberSelect").value = "placeholder"
    removePhotos('all')
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
}

function removePhotos(person) {
    if (person === 'all') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
    }
    if (person === 'rae') {
        document.getElementById("sykPhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")

    }
    else if (person === 'syk') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("toastPhoto").classList.add("hidden")
    }
    else if (person === 'toast') {
        document.getElementById("raePhoto").classList.add("hidden")
        document.getElementById("sykPhoto").classList.add("hidden")

    }
}

function start() {
    document.getElementById("quizStart").classList.add("hidden")
    document.getElementById("score").classList.remove("hidden")
    document.getElementById("question7").classList.remove("hidden")
    document.getElementById("question7").innerHTML = toast
}


