var rae = {
    "height": "short",
    "personality": "excited",
    "description": "craezy"
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
        rae.personality + ", and " + rae.description
    }
    else if (member === "syk") {
        document.getElementById("memberInfo").innerHTML = "Syk is " + syk.height + ", " + 
        syk.personality + ", and " + syk.description
    }
    else if (member === "toast") {
        document.getElementById("memberInfo").innerHTML = "Toast is a " + toast.height + ", " + 
        toast.personality + ", " + toast.description
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
    document.getElementById("memberSelect").value= "placeholder"
}