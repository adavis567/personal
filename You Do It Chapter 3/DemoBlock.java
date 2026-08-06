public class DemoBlock {
    public static void main(String[] args) {
        System.out.println("Demonstrating block scope");
        int x = 1111;
        System.out.println("In outer block, x is " + x);

        {
            int y = 2222;
            System.out.println("In first inner block, x is " + x);
            System.out.println("In first inner block, y is " + y);
            
            {
                int y3 = 3333; // Second instance or distinct inner name block
                System.out.println("In second inner block, x is " + x);
                System.out.println("In second inner block, y is " + y3);
                demoMethod();
                System.out.println("After method call, x is " + x);
                System.out.println("After method call, y is " + y3);
            }
        }
        System.out.println("At the end, x is " + x);
    }

    public static void demoMethod() {
        int x = 8888;
        int y = 9999;
        System.out.println("In demoMethod(), x is " + x);
        System.out.println("In demoMethod(), y is " + y);
    }
}
