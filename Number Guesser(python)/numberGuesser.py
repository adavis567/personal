# This is an absolutely juiced Number Guesser Game
# Add highscore
# Add a part that reacts if the user gets the number first try
# Add a part that says something different depending on what guess the user is on
# Add a part where the number is constantly changing
# add a part where the user can choose what number they want to guess between
# This is the part that allows the code to get a random number
import random

# This asks the user to type a certain letter and depending on what they type, they go to a different stage of harder difficulty
while 1 == 1:
    print(
        "Welcome to the Number Guesser. Type e for easy, m for medium, h for hard, ex for expert, i for insane, im for impossible and ac for ABSOLUTELY CRAZED."
    )
    stage = input()
    # Easy Stage
    if stage == "e":
        print("What Number between 1 and 10 am i thinking of? You Have 3 tries.")
        # This gets the random number
        randomNumber = random.randint(1, 10)
        # This gives the user 3 guesses and if they run out, they lose
        for guessesTaken in range(1, 4):
            guess = int(input())
            # If the guess is too low, it tells the user
            if guess < randomNumber:
                print("Lol too low")
            # If the guess is too high, it tells the user
            elif guess > randomNumber:
                print("Woah that is way too high bruh")
            else:
                break
        if guess == randomNumber:
            print(
                "What is that insane luck... erm I mean Good job! You guessed my number in "
                + str(guessesTaken)
                + " guesses out of 3!"
            )
        else:
            print(
                "ahhhhhh wrong lol. The number I was thinking of was "
                + str(randomNumber)
            )
    # Medium Stage
    elif stage == "m":
        print("What Number between 1 and 20 am i thinking of? You Have 5 Tries.")
        randomNumber1 = random.randint(1, 20)
        for guessesTaken1 in range(1, 6):
            guess1 = int(input())
            if guess1 < randomNumber1:
                print("Lol too low")
            elif guess1 > randomNumber1:
                print("Woah that is way too high bruh")
            else:
                break
        if guess1 == randomNumber1:
            print(
                "What is that insane luck... erm I mean Good Job! You guessed my number in "
                + str(guessesTaken1)
                + " guesses out of 5!"
            )
        else:
            print(
                "ahhhhhh wrong lol. The number I was thinking of was "
                + str(randomNumber1)
            )
    # Hard Stage
    elif stage == "h":
        print("What Number between 1 and 30 am I thinking of? You Have 10 Tries.")
        randomNumber2 = random.randint(1, 30)
        for guessesTaken2 in range(1, 11):
            guess2 = int(input())
            if guess2 < randomNumber2:
                print("Lol too low")
            elif guess2 > randomNumber2:
                print("Woah that is way too high bruh")
            else:
                break
        if guess2 == randomNumber2:
            print(
                "What is that insane luck... erm I mean Good Job! You guessed my number in "
                + str(guessesTaken2)
                + " guesses out of 10!"
            )
        else:
            print(
                "ahhhhhh wrong lol. The number I was thinking of was "
                + str(randomNumber2)
            )
    # Expert Stage
    elif stage == "ex":
        print("What NUMBER between 1 and 50 am I thinking of? You Have 20 tries.")
        randomNumber3 = random.randint(1, 50)
        for guessesTaken3 in range(1, 21):
            guess3 = int(input())
            if guess3 < randomNumber3:
                print("Lol too low")
            elif guess3 > randomNumber3:
                print("Woah that is way too high bruh")
            else:
                break
        if guess3 == randomNumber3:
            print(
                "What is that insane luck... erm I mean Good Job! You guessed my number in "
                + str(guessesTaken3)
                + " guesses out of 20!"
            )
        else:
            print(
                "ahhhhhh wrong lol. The number I was thinking of was "
                + str(randomNumber3)
            )
    # Insane Stage
    elif stage == "i":
        print(
            "Oh Jesus. WHat NumBeR between 1 and 100 would I choose? You get 50 tries. Good Luck."
        )
        randomNumber4 = random.randint(1, 100)
        for guessesTaken4 in range(1, 51):
            guess4 = int(input())
            if guess4 < randomNumber4:
                print("Lol too low. Not everyone can be a giga genius like me")
            elif guess4 > randomNumber4:
                print("Umm... I think thats too high. wanna give it another go?")
            else:
                break
        if guess4 == randomNumber4:
            print(
                "Ok you have some skill. You can guess a number between 1 and who cares. You guessed it in "
                + str(guessesTaken4)
                + " guesses out of 50 guesses i guess."
            )
        else:
            print(
                "Well we all saw this coming. did you really think that you could guess that the number was "
                + str(randomNumber4)
            )
    # Impossible Stage
    elif stage == "im":
        print(
            "If you think you can guess a number between 1 and 1000 go ahead but youll probably lose. Since you need a bunch of help, ill give you 500 guesses."
        )
        randomNumber5 = random.randint(1, 1000)
        for guessesTaken5 in range(1, 501):
            guess5 = int(input())
            if guess5 < randomNumber5:
                print(
                    "You didnt actually think you would get it with a number that low did you?"
                )
            elif guess5 > randomNumber5:
                print("what is with that crazed number. Too high! Too High!!")
            else:
                break
        if guess5 == randomNumber5:
            print(
                "huhhh. No way. you had to have cheated. theres no way you guessed the number in "
                + str(guessesTaken5)
                + " guesses out of 500."
            )
        else:
            print(
                "Lol noob. Dead. EZ. How did you not guess that the number was "
                + str(randomNumber5)
            )
    # THE ABSOLUTE HARDEST STAGE EVER(or just the longest if you aren't me)
    elif stage == "ac":
        print(
            "welcome to the most absolutely juiced crazed hardest boss level youve ever seen. All that baby stuff from before was just a test. Now you have to guess a number between 1 and 100000 in 99999 guesses. now gooo!"
        )
        randomNumber6 = random.randint(1, 100000)
        for guessesTaken6 in range(1, 100000):
            guess6 = int(input())
            if guess6 < randomNumber6:
                print("Low. in fact, its probably too low. youll never get it anyway")
            elif guess6 > randomNumber6:
                print("I said 1 to 100000. Not 1 to infinity. Too high.")
            else:
                break
        if guess6 == randomNumber6:
            print(
                "ok i actually didn't expect this. Good job. You got it in "
                + str(guessesTaken6)
                + " guesses out of 99999. Your prize is the satisfaction of beating the game."
                " type lol for secret level in main menu"
            )
        else:
            print(
                "Cant even beat one simple computer game huh. SUcks to suck. wouldn't wanna be that guy who cant guess that the number was "
                + str(randomNumber6)
            )
    elif stage == "lol":
        print(
            "only true gamers can beat this one. Guess the number from 1 to 100, but you only get one guess"
        )
        randomNumber7 = random.randint(1, 100)
        guess7 = int(input())
        if guess7 == randomNumber7:
            print("lol")

        else:
            print(
                "nothing to see here folks, just someone who can't beat the secret level. can't even guess that the number was "
                + str(randomNumber7)
            )

    input("type enter to play again")
