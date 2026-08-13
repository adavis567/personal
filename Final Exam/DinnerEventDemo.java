package Final Exam;

/**
 * Name: Anthony Davis
 * Date: August 13, 2026
 * Course: COSC 1437
 * Summary: Instantiates and tracks an array storage block containing four discrete 
 * DinnerEvent elements, offering persistent options to bubble sort values across multiple criteria.
 */
import java.util.Scanner;

public class DinnerEventDemo {
    public static void main(String[] args) {
        final int TOTAL_EVENTS = 4;
        final int QUIT = 9;
        DinnerEvent[] events = new DinnerEvent[TOTAL_EVENTS];
        Scanner input = new Scanner(System.in);
        
        // Populate the collection matrix sequentially
        for (int x = 0; x < events.length; ++x) {
            System.out.println("\n--- Entering Details for Event " + (x + 1) + " ---");
            System.out.print("Enter event identifier number (e.g. M123) >> ");
            String eNum = input.nextLine();
            
            System.out.print("Enter total number of attending guests >> ");
            int guests = input.nextInt();
            
            System.out.print("Select Entree Choice (0-2) >> ");
            int entree = input.nextInt();
            System.out.print("Select Side Item 1 Choice (0-3) >> ");
            int side1 = input.nextInt();
            System.out.print("Select Side Item 2 Choice (0-3) >> ");
            int side2 = input.nextInt();
            System.out.print("Select Dessert Choice (0-2) >> ");
            int dessert = input.nextInt();
            input.nextLine(); // Clear the text entry buffer line
            
            events[x] = new DinnerEvent(eNum, guests, entree, side1, side2, dessert);
            
            System.out.print("Enter primary contact phone string >> ");
            events[x].setContactPhone(input.nextLine());
            
            System.out.println("0: Wedding | 1: Baptism | 2: Birthday | 3: Corporate | 4: Other");
            System.out.print("Enter event classification option type code >> ");
            events[x].setEventType(input.nextInt());
            input.nextLine();
        }

        int choice = getSortOption(QUIT);
        while (choice != QUIT) {
            if (choice == 1) sortByEventId(events);
            else if (choice == 2) sortByGuestCount(events);
            else if (choice == 3) sortByClassification(events);
            else System.out.println("Invalid entry. Please try again.");
            
            choice = getSortOption(QUIT);
        }
    }

    public static int getSortOption(int quitValue) {
        Scanner input = new Scanner(System.in);
        System.out.println("\n--- Sorting System Output Menu ---");
        System.out.print("1 - Order by Event ID\n2 - Order by Guest Count\n3 - Order by Event Classification\n" + quitValue + " - Terminate Program Execution\nSelection >> ");
        return input.nextInt();
    }

    public static void sortByEventId(DinnerEvent[] array) {
        for (int a = 0; a < array.length - 1; ++a) {
            for (int b = 0; b < array.length - 1; ++b) {
                if (array[b].getEventNumber().compareTo(array[b + 1].getEventNumber()) > 0) {
                    DinnerEvent temp = array[b];
                    array[b] = array[b + 1];
                    array[b + 1] = temp;
                }
            }
        }
        printAllDetails(array);
    }

    public static void sortByGuestCount(DinnerEvent[] array) {
        for (int a = 0; a < array.length - 1; ++a) {
            for (int b = 0; b < array.length - 1; ++b) {
                if (array[b].getGuests() > array[b + 1].getGuests()) {
                    DinnerEvent temp = array[b];
                    array[b] = array[b + 1];
                    array[b + 1] = temp;
                }
            }
        }
        printAllDetails(array);
    }

    public static void sortByClassification(DinnerEvent[] array) {
        for (int a = 0; a < array.length - 1; ++a) {
            for (int b = 0; b < array.length - 1; ++b) {
                if (array[b].getEventType() > array[b + 1].getEventType()) {
                    DinnerEvent temp = array[b];
                    array[b] = array[b + 1];
                    array[b + 1] = temp;
                }
            }
        }
        printAllDetails(array);
    }

    public static void printAllDetails(DinnerEvent[] array) {
        for (DinnerEvent event : array) {
            System.out.println("\n==================================");
            System.out.println("Event ID Ref: #" + event.getEventNumber());
            System.out.println("Classification Category: " + event.getEventTypeString());
            System.out.println("Total Attendance: " + event.getGuests() + " items calculated at rate $" + event.getPricePerGuest() + " yielding event cost total: $" + event.getPriceForEvent());
            System.out.println("Primary Line Contact: " + event.getContactPhone());
            System.out.println(event.getMenu());
        }
    }
}
