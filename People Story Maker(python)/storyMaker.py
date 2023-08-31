# Make code so that the user can change certain things
# add a part that ACTAUALLY lets the user go again
# Add a part that goes if word has a million fans i am one of them. if word has ten fans i am one of them. if word has no fans. that means i am no longer on the earth. if the world is against word, i am against the world.
# i love word till my last breath... die hard fan of word.
# Add a random button that swaps items in lists
# This code will ask the user to input 3 of their favorite people and it will make a story out of them
# The list that stores the people the user inputs
favoritePeople = []
randomWords = []
# This line of code asks the user to enter their favorite people
while 1 == 1:
    while True:
        print(
            "Enter the Names of "
            + str(len(favoritePeople) - 3)
            + " of your Favorite People and Press Enter when there is 0"
        )
        people = input()
        if people == "":
            break
        favoritePeople = favoritePeople + [people]
    # This line of code now asks the user to input four random words
    while True:
        print(
            "Now enter "
            + str(len(randomWords) - 4)
            + " random words and press enter when there is zero"
        )
        words = input()
        if words == "":
            break
        randomWords = randomWords + [words]
    # This line of code writes the story with the people the user inputed
    print("Here is Your Story")
    print("In a far off land, there lived four nations.")
    print(
        randomWords[0]
        + ","
        + randomWords[1]
        + ","
        + randomWords[2]
        + ", and "
        + randomWords[3]
        + "."
    )
    print("Long ago, the four nations lived together in harmony.")
    print("Then, everything changed when the " + randomWords[2] + " attacked.")
    print(
        "Only "
        + favoritePeople[0]
        + ", master of all four elements, could stop them, but when the world needed them most, they vanished."
    )
    print(
        "A hundred years passed and "
        + favoritePeople[1]
        + " and "
        + favoritePeople[2]
        + " discovered the new Avatar, a "
        + randomWords[3]
        + "bender named "
        + favoritePeople[0]
        + "."
    )
    input("press enter to go again")
