import java.util.Scanner;

public class CreateSpaServices {
    public static void main(String[] args) {
        SpaService firstService = new SpaService();
        SpaService secondService = new SpaService(); // Uses the default constructor

        // Get interactive input data only for the first service
        firstService = getData(firstService);
        
        // Line for secondService data entry is intentionally commented out per steps
        // secondService = getData(secondService);

        // Instantiate a third service using the two-parameter constructor explicitly
        SpaService thirdService = new SpaService("facial", 22.99);

        // Display all service outputs
        System.out.println("First service details:");
        System.out.println(firstService.getServiceDescription() + " $" + firstService.getPrice());

        System.out.println("Second service details:");
        System.out.println(secondService.getServiceDescription() + " $" + secondService.getPrice());

        System.out.println("Third service details:");
        System.out.println(thirdService.getServiceDescription() + " $" + thirdService.getPrice());
    }

    public static SpaService getData(SpaService s) {
        String serviceDescription;
        double price;
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter service >> ");
        serviceDescription = keyboard.nextLine();

        System.out.print("Enter price >> ");
        price = keyboard.nextDouble();
        keyboard.nextLine(); // Clear input buffer

        s.setServiceDescription(serviceDescription);
        s.setPrice(price);
        return s;
    }
}
