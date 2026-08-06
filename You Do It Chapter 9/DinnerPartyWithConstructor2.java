package You Do It Chapter 9;

public class DinnerPartyWithConstructor2 extends PartyWithConstructor2 {
    private int dinnerChoice;

    public DinnerPartyWithConstructor2(int numGuests) {
        super(numGuests); // Passes the integer argument up to PartyWithConstructor2
    }

    public int getDinnerChoice() {
        return dinnerChoice;
    }

    public void setDinnerChoice(int choice) {
        dinnerChoice = choice;
    }
}
