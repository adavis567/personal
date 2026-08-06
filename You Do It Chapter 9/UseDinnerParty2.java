package You Do It Chapter 9;

import java.util.Scanner;

public class UseDinnerParty2 {
    public static void main(String[] args) {
        int guests;
        int choice;
        Party aParty = new Party();
        DinnerParty2 aDinnerParty = new DinnerParty2();
        Scanner input = new Scanner(System.in);

        System.out.print("Enter number of guests for the party >> ");
        guests = input.nextInt();
        aParty.setGuests(guests);
        System.out.println("The party has " + aParty.getGuests() + " guests.");
        aParty.displayInvitation();

        System.out.println();

        System.out.print("Enter number of guests for the dinner party >> ");
        guests = input.nextInt();
        aDinnerParty.setGuests(guests);
        
        System.out.print("Enter the menu option (1 for chicken, 2 for beef) >> ");
        choice = input.nextInt();
        aDinnerParty.setDinnerChoice(choice);
        
        System.out.println("The dinner party has " + aDinnerParty.getGuests() + " guests.");
        System.out.println("Menu option " + aDinnerParty.getDinnerChoice() + " will be served.");
        aDinnerParty.displayInvitation(); // Executes overridden version
        input.close();
    }
}
