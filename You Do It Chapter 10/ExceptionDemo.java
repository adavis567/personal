package You Do It Chapter 10;

import javax.swing.JOptionPane;

public class ExceptionDemo {
    public static void main(String[] args) {
        int numerator = 0;
        int denominator = 0;
        int result;
        String inputString;

        try {
            inputString = JOptionPane.showInputDialog(null, "Enter a number to be divided:");
            numerator = Integer.parseInt(inputString);

            inputString = JOptionPane.showInputDialog(null, "Enter a number to divide by:");
            denominator = Integer.parseInt(inputString);

            result = numerator / denominator;
        } catch (ArithmeticException e) {
            JOptionPane.showMessageDialog(null, "Arithmetic Error: " + e.getMessage());
            result = 0;
        }

        JOptionPane.showMessageDialog(null, numerator + " / " + denominator + " = " + result);
    }
}
