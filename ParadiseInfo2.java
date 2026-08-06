import java.util.Scanner;

public class ParadiseInfo2 {
    public static void main(String[] args) {
        double price;
        double discount;
        double savings;
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter minimum cutoff price for discount >> ");
        price = keyboard.nextDouble();

        System.out.print("Enter discount rate as a decimal (e.g., 0.05) >> ");
        discount = keyboard.nextDouble();

        displayInfo();

        savings = computeDiscountInfo(price, discount);
        System.out.println("Special this week on any service over $" + price);
        System.out.println("Discount percent is " + (discount * 100) + "%");
        System.out.println("Minimum savings is $" + savings);

        keyboard.close();
    }

    public static void displayInfo() {
        System.out.println("Paradise Day Spa wants to pamper you.");
        System.out.println("We will make you look good.");
    }

    public static double computeDiscountInfo(double price, double discount) {
        double savings;
        savings = price * discount;
        return savings;
    }
}
