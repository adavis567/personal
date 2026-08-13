package You Do It Chapter 10;

import java.util.Scanner;
import java.io.IOException;

public class CalculatorDemo {
    public static void main(String[] args) throws IOException {
        // Step 3: Declare the Scanner and run the system process execution launcher
        Scanner input = new Scanner(System.in);
        Process proc = Runtime.getRuntime().exec("calc.exe");

        // Step 4: Establish the evaluation values for the arithmetic prompt
        int num1 = 26;
        int num2 = 14;
        int correctAnswer = num1 + num2;
        int userAnswer;

        // Step 5: Ask the question, track user choice input, and print results
        System.out.print("What is " + num1 + " + " + num2 + "? (Use the calculator to check your work!) >> ");
        userAnswer = input.nextInt();

        if (userAnswer == correctAnswer) {
            System.out.println("Correct! Nicely done.");
        } else {
            System.out.println("Incorrect. The accurate sum total is: " + correctAnswer);
        }

        input.close();
    }
}
