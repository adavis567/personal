package Final Exam;

/**
 * Name: Anthony Davis
 * Date: August 13, 2026
 * Course: COSC 1437
 * Summary: Overhauls database initialization pipelines by embedding local InputMismatchException 
 * logic blocks into localized verification loops to securely capture numeric console records.
 * Expected Output: Typing alphabetical values into guest or choice entry points repeats the prompt safely.
 */
import java.util.Scanner;
import java.util.InputMismatchException;

public class DinnerEventWithExceptionHandling {
    public static void main(String[] args) {
        final int TOTAL_EVENTS = 4;
        final int QUIT = 9;
        DinnerEvent[] events = new DinnerEvent[TOTAL_EVENTS];
        Scanner input = new Scanner(System.in);
        
        for (int x = 0; x < events.length; ++x) {
            System.out.println("\n--- Entering Details for Controlled Event " + (x + 1) + " ---");
            System.out.print("Enter event identifier number (e.g. M123) >> ");
            String eNum = input.nextLine();
            
            // Reusable looping control blocks for safe variable processing
            int guests = getValidatedInt("Enter total number of attending guests >> ");
            int entree = getValidatedInt("Select Entree Choice (0-2) >> ");
            int side1 = getValidatedInt("Select Side Item 1 Choice (0-3) >> ");
            int side2 = getValidatedInt("Select Side Item 2 Choice (0-3) >> ");
            int dessert = getValidatedInt("Select Dessert Choice (0-2) >> ");
            
            events[x] = new DinnerEvent(eNum, guests, entree, side1, side2, dessert);
            
            System.out.print("Enter primary contact phone string >> ");
            events[x].setContactPhone(input.nextLine());
            
            System.out.println("0: Wedding | 1: Baptism | 2: Birthday | 3: Corporate | 4: Other");
            int typeCode = getValidatedInt("Enter event classification option type code >> ");
            events[x].setEventType(typeCode);
        }

        // Processing menu selection options using exception validation patterns
        int choice = -1;
        while (choice != QUIT) {
            try {
                System.out.println("\n--- Controlled System Sorting System Output Menu ---");
                System.out.print("1 - Order by Event ID\n2 - Order by Guest Count\n3 - Order by Event Classification\n" + QUIT + " - Terminate Program Execution\nSelection >> ");
                choice = input.nextInt();
                input.nextLine();
                
                if (choice == 1) DinnerEventDemo.sortByEventId(events);
                else if (choice == 2) DinnerEventDemo.sortByGuestCount(events);
                else if (choice == 3) DinnerEventDemo.sortByClassification(events);
                else if (choice != QUIT) System.out.println("Invalid entry options value loop.");
            } catch (InputMismatchException e) {
                System.out.println("Error: Menu selections require valid formatting attributes.");
                input.nextLine(); // Discard corrupted scanner tracking components
            }
        }
    }

    // Helper utility wrapping data streams into strict try-catch verification blocks
    private static int getValidatedInt(String trackingPromptMessage) {
        Scanner localValidationScanner = new Scanner(System.in);
        int cleanReturnInt = 0;
        boolean keepPrompting = true;
        
        while (keepPrompting) {
            try {
                System.out.print(trackingPromptMessage);
                cleanReturnInt = localValidationScanner.nextInt();
                keepPrompting = false; // Disengage control looping once validation succeeds
            } catch (InputMismatchException exceptionElement) {
                System.out.println(">> Invalid Formatting Entry Error. Numerical character vectors required.");
                localValidationScanner.nextLine(); // Clear out corrupt tokens
            }
        }
        return cleanReturnInt;
    }
}
