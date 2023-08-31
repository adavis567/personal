# finish dictonary entries; Currently On Aria
# add specialties into dictionary entries
# add score to quiz
# maybe add only personality section to quiz or only descriptions
# add alias to quiz; leslie=fuslie
# also make it so when they exit the quiz their score goes back to zero
# Offline TV and Friends Dictionary
rae = {"height": "short", "personality": "excited", "description": "craezy"}
syk = {"height": "tall", "personality": "a sicko", "description": "trollkkuno"}
toast = {
    "height": "regular",
    "personality": "gigachad",
    "description": "Dsg amongus guy",
}
crops = {
    "height": "tallest",
    "personality": "cool",
    "description": "choke me like you hate me bingus",
}
miyoung = {
    "height": "dunno",
    "personality": "psychotic",
    "description": "absolute hentai degenerate",
}
leslie = {"height": "tall", "personality": "sheeeeeesh", "description": "guitar girl"}
evon = {"height": "short", "personality": "starbucks", "description": "pleb gremlin"}
lily = {
    "height": "short",
    "personality": "starving artist",
    "description": "i love my dogs and michael uwu",
}
michael = {
    "height": "gigachad",
    "personality": "reeeeeeeee",
    "description": "crackhead nightmare",
}
scarra = {
    "height": "regular",
    "personality": "best strategy gamer",
    "description": "the don",
}
jodi = {
    "height": "regular",
    "personality": "gigachad reyna main",
    "description": "a worm",
}
john = {
    "height": "tall",
    "personality": "best raze",
    "description": "gotta pottt!!! minus8",
}
syd = {
    "height": "regular",
    "personality": "Bad Bish",
    "description": "Michael Jackson Lookalike",
}
poki = {
    "height": "as tall as she wants to be",
    "personality": "Bish Plz",
    "description": "The Queen Pokimane!!!",
}
pp = {"height": "tall", "personality": "simp", "description": "ewwwwww Peterrrrr"}


celine = {
    "height": "at least taller than rae",
    "personality": "innocent",
    "description": "wahhhhhhhhhh!!!!!",
}
janjan = {"height": "tall", "personality": "goofball", "description": "manlymanchad"}
wondy = {
    "height": "taller than lily",
    "personality": "cute",
    "description": "wendeeznuts",
}
abe = {
    "height": "taller than wondy",
    "personality": "troll",
    "description": "abesfault",
}
tina = {"height": "smol", "personality": "cutesy", "description": "innocent cawot"}
brodin = {"height": "too tall", "personality": "demonic", "description": "f you brodin"}
brooke = {
    "height": "regular",
    "personality": "better than peter",
    "description": "white pink dinosaur",
}
kyedae = {
    "height": "tall",
    "personality": "valorant addict",
    "description": "kirby pfp. smh",
}
aria = {
    "height": "regular",
    "personality": "dirty minded",
    "description": "hottest chef",
}
tenzin = {
    "height": "short",
    "personality": "monkey maniac",
    "description": "wholey supports incest",
}
albert = {
    "height": "regular",
    "personality": "literal genius",
    "description": "tft gamer",
}
sean = {"height": "regular", "personality": "wacky", "description": "funny speedster"}
edison = {"height": "tall", "personality": "funny", "description": "sykkunos husband"}
ryan = {
    "height": "regular",
    "personality": "creative",
    "description": "nigahiga girlygirlgina",
}
jaime = {
    "height": "short",
    "personality": "like cute things",
    "description": "best style of clothes",
}
lud = {
    "height": "regular",
    "personality": "professional scammer",
    "description": "mogul mai mai",
}
tarik = {
    "height": "tall",
    "personality": "lil bro",
    "description": "professional hater of DSG",
}
blau = {"height": "regular", "personality": "skrillex", "description": "whomegalol"}
danny = {
    "height": "regular",
    "personality": "too funny",
    "description": "highest in the room",
}
timmy = {
    "height": "tall",
    "personality": "talented",
    "description": "literal god gamer",
}
x = {
    "height": "tall and lanky",
    "personality": "goblin",
    "description": "Juicer For Life",
}
hyoon = {
    "height": "short",
    "personality": "yugioh fanatic",
    "description": "best cosplayer",
}
jeannie = {
    "height": "most def taller than henry",
    "personality": "innocent then i met henry",
    "description": "panda queen",
}
henry = {
    "height": "tallest man in the universe (5'7)",
    "personality": "doesn't know animals",
    "description": "lord degenerate immersion",
}


while True:
    print("Welcome to OfflineTv Descriptions! \nType Dictionary or Quiz")
    option = input()
    if option == "dictionary":
        while True:
            print(
                "Which person in OfflineTV and Friends do you want to know about? \nType: \nrae, syk, toast, corpse, miyoung, leslie, yvonne, lily, michael \nscarra, jodi, john, syd, poki, peter, celine,"
                " janet, wendy, abe,\ntina, brodin, brooke, kyedae\nor press enter to go back"
            )
            person = input()
            if person == "rae":
                print(
                    "Rae is "
                    + rae["height"]
                    + ", "
                    + rae["personality"]
                    + ", and "
                    + rae["description"]
                )
            elif person == "syk":
                print(
                    "Syk is "
                    + syk["height"]
                    + ", "
                    + syk["personality"]
                    + " ,and a "
                    + syk["description"]
                )
            elif person == "toast":
                print(
                    "Toast is a "
                    + toast["height"]
                    + ","
                    + toast["personality"]
                    + ", "
                    + toast["description"]
                )
            elif person == "corpse":
                print(
                    "Corpse is the "
                    + crops["height"]
                    + ", "
                    + crops["personality"]
                    + "est person who likes to say "
                    + crops["description"]
                )
            elif person == "miyoung":
                print(
                    "Miyoung is "
                    + miyoung["height"]
                    + " inches tall, "
                    + miyoung["personality"]
                    + ", and an "
                    + miyoung["description"]
                )
            elif person == "leslie":
                print(
                    "Leslie is "
                    + leslie["height"]
                    + ", she like to say "
                    + leslie["personality"]
                    + ", and some people know her as the "
                    + leslie["description"]
                )
            elif person == "yvonne":
                print(
                    "Evon is "
                    + evon["height"]
                    + ", she has "
                    + evon["personality"]
                    + " in her blood and this makes her a "
                    + evon["description"]
                )
            elif person == "lily":
                print(
                    "Lily is a "
                    + lily["height"]
                    + ","
                    + lily["personality"]
                    + ". Here is a line from her. "
                    + lily["description"]
                )
            elif person == "michael":
                print(
                    "Mykull is a "
                    + michael["height"]
                    + " when he isn't being a "
                    + michael["description"]
                    + ". "
                    + michael["personality"]
                )
            elif person == "scarra":
                print(
                    "Scarra is of "
                    + scarra["height"]
                    + " height, is known as the "
                    + scarra["personality"]
                    + ", and he secretly shadows as "
                    + scarra["description"]
                )
            elif person == "jodi":
                print(
                    "Jodi is a "
                    + jodi["height"]
                    + ", "
                    + jodi["personality"]
                    + " and John wouldn't love her if she was "
                    + jodi["description"]
                )
            elif person == "john":
                print(
                    "John is "
                    + john["height"]
                    + ", and the "
                    + john["personality"]
                    + ". "
                    + john["description"]
                )
            elif person == "syd":
                print(
                    "Syd is a "
                    + syd["height"]
                    + " "
                    + syd["personality"]
                    + " even if she doesnt believe she's a "
                    + syd["description"]
                )
            elif person == "poki":
                print(
                    "Poki is "
                    + poki["height"]
                    + ". "
                    + poki["personality"]
                    + "! "
                    + "All hail "
                    + poki["description"]
                )
            elif person == "peter":
                print(
                    "PP is a "
                    + pp["height"]
                    + " "
                    + pp["personality"]
                    + ". "
                    + pp["description"]
                )
            elif person == "celine":
                print(
                    "Celine is "
                    + celine["height"]
                    + ", she's "
                    + celine["personality"]
                    + ", and when she’s scared, she goes "
                    + celine["description"]
                )
            elif person == "janet":
                print(
                    "By day, Janet is a "
                    + janjan["height"]
                    + " "
                    + janjan["personality"]
                    + ", but by night, she’s "
                    + janjan["description"]
                )
            elif person == "wendy":
                print(
                    "Wendy is "
                    + wondy["height"]
                    + ", and is "
                    + wondy["personality"]
                    + " when she’s not screaming "
                    + wondy["description"]
                )
            elif person == "abe":
                print(
                    "Abe is definitely "
                    + abe["height"]
                    + ", he's a "
                    + abe["personality"]
                    + ", and when things don't go your way, just remember "
                    + abe["description"]
                )
            elif person == "tina":
                print(
                    "Tina’s a "
                    + tina["height"]
                    + ", "
                    + tina["personality"]
                    + ", "
                    + tina["description"]
                )
            elif person == "brodin":
                print(
                    "Brodin is "
                    + brodin["height"]
                    + " and has a "
                    + brodin["personality"]
                    + " disposition. "
                    + brodin["description"]
                )
            elif person == "brooke":
                print(
                    "Brooke may be "
                    + brooke["height"]
                    + ", but anything she does, she’ll always be "
                    + brooke["personality"]
                    + ". Best "
                    + brooke["description"]
                )
            elif person == "kyedae":
                print(
                    "Kyedae is a "
                    + kyedae["height"]
                    + ", "
                    + kyedae["personality"]
                    + ". Lets just not talk about the "
                    + kyedae["description"]
                )
            else:
                break
            input("press enter to see another entry")

    elif option == "quiz":

        while True:
            print("welcome to the quiz")
            import random

            print("\ntype start to begin or type leave to go back")
            answer = input()
            if answer == "start":
                while True:
                    randomPerson = random.randint(1, 39)
                    if randomPerson == 1:
                        print("who does this describe")
                        for sc in scarra.values():
                            print("\n" + sc + "\n")
                        guess = input()
                        if guess.lower().lower() == "scarra":
                            print("yes")
                        else:
                            print("no it was Scarra")
                    elif randomPerson == 2:
                        print("who does this describe")
                        for le in leslie.values():
                            print("\n" + le + "\n")
                        guess = input()
                        if guess.lower().lower() == "leslie":
                            print("yes")
                        else:
                            print("no it was Leslie")
                    elif randomPerson == 3:
                        print("who does this describe")
                        for ce in celine.values():
                            print("\n" + ce + "\n")
                        guess = input()
                        if guess.lower().lower() == "celine":
                            print("yes")
                        else:
                            print("no it was Celine")
                    elif randomPerson == 4:
                        print("who does this describe")
                        for mi in michael.values():
                            print("\n" + mi + "\n")
                        guess = input()
                        if guess.lower().lower() == "michael":
                            print("yes")
                        else:
                            print("no it was Michael")
                    elif randomPerson == 5:
                        print("who does this describe")
                        for co in crops.values():
                            print("\n" + co + "\n")
                        guess = input()
                        if guess.lower().lower() == "corpse":
                            print("yes")
                        else:
                            print("no it was Corpse")
                    elif randomPerson == 6:
                        print("who does this describe")
                        for da in danny.values():
                            print("\n" + da + "\n")
                        guess = input()
                        if guess.lower().lower() == "danny":
                            print("yes")
                        else:
                            print("no it was Danny")
                    elif randomPerson == 7:
                        print("who does this describe")
                        for DSG in toast.values():
                            print("\n" + DSG + "\n")
                        guess = input()
                        if guess.lower().lower() == "toast":
                            print("yes")
                        else:
                            print("no it was Toast")
                    elif randomPerson == 8:
                        print("who does this describe")
                        for ja in jaime.values():
                            print("\n" + ja + "\n")
                        guess = input()
                        if guess.lower().lower() == "jaime":
                            print("yes")
                        else:
                            print("no it was Jaime")
                    elif randomPerson == 9:
                        print("who does this describe")
                        for br in brooke.values():
                            print("\n" + br + "\n")
                        guess = input()
                        if guess.lower().lower() == "brooke":
                            print("yes")
                        else:
                            print("no it was Brooke")
                    elif randomPerson == 10:
                        print("who does this describe")
                        for syd in syd.values():
                            print("\n" + syd + "\n")
                        guess = input()
                        if guess.lower().lower() == "sydney":
                            print("yes")
                        else:
                            print("no it was Sydney")
                    elif randomPerson == 11:
                        print("who does this describe")
                        for jod in jodi.values():
                            print("\n" + jod + "\n")
                        guess = input()
                        if guess.lower() == "jodi":
                            print("yes")
                        else:
                            print("no it was Jodi")
                    elif randomPerson == 12:
                        print("who does this describe")
                        for ti in tina.values():
                            print("\n" + ti + "\n")
                        guess = input()
                        if guess.lower() == "tina":
                            print("yes")
                        else:
                            print("no it was Tina")
                    elif randomPerson == 13:
                        print("who does this describe")
                        for lu in lud.values():
                            print("\n" + lu + "\n")
                        guess = input()
                        if guess.lower() == "ludwig":
                            print("yes")
                        else:
                            print("no it was Ludwig")
                    elif randomPerson == 14:
                        print("who does this describe")
                        for al in albert.values():
                            print("\n" + al + "\n")
                        guess = input()
                        if guess.lower() == "albert":
                            print("yes")
                        else:
                            print("no it was Albert")
                    elif randomPerson == 15:
                        print("who does this describe")
                        for ry in ryan.values():
                            print("\n" + ry + "\n")
                        guess = input()
                        if guess.lower() == "ryan":
                            print("yes")
                        else:
                            print("no it was Ryan")
                    elif randomPerson == 16:
                        print("who does this describe")
                        for joh in john.values():
                            print("\n" + joh + "\n")
                        guess = input()
                        if guess.lower() == "john":
                            print("yes")
                        else:
                            print("no it was John")
                    elif randomPerson == 17:
                        print("who does this describe")
                        for he in henry.values():
                            print("\n" + he + "\n")
                        guess = input()
                        if guess.lower() == "henry":
                            print("yes")
                        else:
                            print("no it was Henry")
                    elif randomPerson == 18:
                        print("who does this describe")
                        for miy in miyoung.values():
                            print("\n" + miy + "\n")
                        guess = input()
                        if guess.lower() == "miyoung":
                            print("yes")
                        else:
                            print("no it was Miyoung")
                    elif randomPerson == 19:
                        print("who does this describe")
                        for li in lily.values():
                            print("\n" + li + "\n")
                        guess = input()
                        if guess.lower() == "lily":
                            print("yes")
                        else:
                            print("no it was Lily")
                    elif randomPerson == 20:
                        print("who does this describe")
                        for kye in kyedae.values():
                            print("\n" + kye + "\n")
                        guess = input()
                        if guess.lower() == "kyedae":
                            print("yes")
                        else:
                            print("no it was Kyedae")
                    elif randomPerson == 21:
                        print("who does this describe")
                        for tim in timmy.values():
                            print("\n" + tim + "\n")
                        guess = input()
                        if guess.lower() == "timmy":
                            print("yes")
                        else:
                            print("no it was Timmy")
                    elif randomPerson == 22:
                        print("who does this describe")
                        for hy in hyoon.values():
                            print("\n" + hy + "\n")
                        guess = input()
                        if guess.lower() == "hyoon":
                            print("yes")
                        else:
                            print("no it was Hyoon")
                    elif randomPerson == 23:
                        print("who does this describe")
                        for po in poki.values():
                            print("\n" + po + "\n")
                        guess = input()
                        if guess.lower() == "poki":
                            print("yes")
                        else:
                            print("no it was Poki")
                    elif randomPerson == 24:
                        print("who does this describe")
                        for ar in aria.values():
                            print("\n" + ar + "\n")
                        guess = input()
                        if guess.lower() == "aria":
                            print("yes")
                        else:
                            print("no it was Aria")
                    elif randomPerson == 25:
                        print("who does this describe")
                        for tar in tarik.values():
                            print("\n" + tar + "\n")
                        guess = input()
                        if guess.lower() == "tarik":
                            print("yes")
                        else:
                            print("no it was Tarik")
                    elif randomPerson == 26:
                        print("who does this describe")
                        for we in wondy.values():
                            print("\n" + we + "\n")
                        guess = input()
                        if guess.lower() == "wendy":
                            print("yes")
                        else:
                            print("no it was Wendy")
                    elif randomPerson == 27:
                        print("who does this describe")
                        for ev in evon.values():
                            print("\n" + ev + "\n")
                        guess = input()
                        if guess.lower() == "yvonne":
                            print("yes")
                        else:
                            print("no it was Yvonne")
                    elif randomPerson == 28:
                        print("who does this describe")
                        for bl in blau.values():
                            print("\n" + bl + "\n")
                        guess = input()
                        if guess.lower() == "blau":
                            print("yes")
                        else:
                            print("no it was Blau")
                    elif randomPerson == 29:
                        print("who does this describe")
                        for bro in brodin.values():
                            print("\n" + bro + "\n")
                        guess = input()
                        if guess.lower() == "brodin":
                            print("yes")
                        else:
                            print("no it was Brodin")
                    elif randomPerson == 30:
                        print("who does this describe")
                        for syk in syk.values():
                            print("\n" + syk + "\n")
                        guess = input()
                        if guess.lower() == "sykkuno":
                            print("yes")
                        else:
                            print("no it was Sykkuno")
                    elif randomPerson == 31:
                        print("who does this describe")
                        for ab in abe.values():
                            print("\n" + ab + "\n")
                        guess = input()
                        if guess.lower() == "abe":
                            print("yes")
                        else:
                            print("no it was Abe")
                    elif randomPerson == 32:
                        print("who does this describe")
                        for ed in edison.values():
                            print("\n" + ed + "\n")
                        guess = input()
                        if guess.lower() == "edison":
                            print("yes")
                        else:
                            print("no it was Edison")
                    elif randomPerson == 33:
                        print("who does this describe")
                        for jan in janjan.values():
                            print("\n" + jan + "\n")
                        guess = input()
                        if guess.lower() == "janet":
                            print("yes")
                        else:
                            print("no it was Janet")
                    elif randomPerson == 34:
                        print("who does this describe")
                        for jea in jeannie.values():
                            print("\n" + jea + "\n")
                        guess = input()
                        if guess.lower() == "jeannie":
                            print("yes")
                        else:
                            print("no itwas Jeannie")
                    elif randomPerson == 35:
                        print("who does this describe")
                        for ten in tenzin.values():
                            print("\n" + ten + "\n")
                        guess = input()
                        if guess.lower() == "tenzin":
                            print("yes")
                        else:
                            print("no it was Tenzin")
                    elif randomPerson == 36:
                        print("who does this describe")
                        for x in x.values():
                            print("\n" + x + "\n")
                        guess = input()
                        if guess.lower() == "xqc":
                            print("yes")
                        else:
                            print("no it was XQC")
                    elif randomPerson == 37:
                        print("who does this describe")
                        for se in sean.values():
                            print("\n" + se + "\n")
                        guess = input()
                        if guess.lower() == "sean":
                            print("yes")
                        else:
                            print("no it was Sean")
                    elif randomPerson == 38:
                        print("who does this describe")
                        for ra in rae.values():
                            print("\n" + ra + "\n")
                        guess = input()
                        if guess.lower() == "rae":
                            print("yes")
                        else:
                            print("no it was Rae")
                    elif randomPerson == 39:
                        print("who does this describe")
                        for pet in pp.values():
                            print("\n" + pet + "\n")
                        guess = input()
                        if guess.lower() == "peter":
                            print("yes")
                        else:
                            print("no it was Peter")
                    else:
                        break
                    input("press enter to go again or type leave to leave")
                    if input() == "leave":
                        break
            elif answer == "leave":
                break
