package You Do It Chapter 9;

public class PartyWithConstructor2 {
    private int guests;

    public PartyWithConstructor2(int numGuests) {
        guests = numGuests;
        System.out.println("Creating a Party with " + guests + " guests");
    }

    public int getGuests() {
        return guests;
    }

    public void setGuests(int numGuests) {
        guests = numGuests;
    }

    public void displayInvitation() {
        System.out.println("Please come to my party!");
    }
}
