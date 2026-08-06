public class DemoOverload {
    public static void main(String[] args) {
        int month = 6, day = 24, year = 2026;

        System.out.println("Testing overloaded methods:");
        displayDate(month);
        displayDate(month, day);
        displayDate(month, day, year);
    }

    // Version 1: One argument (Default day to 1, year to 2024)
    public static void displayDate(int mm) {
        System.out.println("Date: " + mm + "/1/2024");
    }

    // Version 2: Two arguments (Default year to 2024)
    public static void displayDate(int mm, int dd) {
        System.out.println("Date: " + mm + "/" + dd + "/2024");
    }

    // Version 3: Three arguments
    public static void displayDate(int mm, int dd, int yy) {
        System.out.println("Date: " + mm + "/" + dd + "/" + yy);
    }
}
