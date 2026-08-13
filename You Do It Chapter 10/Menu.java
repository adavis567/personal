package You Do It Chapter 10;

import javax.swing.JOptionPane;

public class Menu {
    protected String[] entreeChoices = {"Rosemary Chicken", "Beef Wellington", "Mushroom Risotto"};

    public String displayMenu() {
        String menuString = "Enter your selection:\n";
        int selection;

        for (int x = 0; x < entreeChoices.length; ++x) {
            menuString += (x + 1) + ". " + entreeChoices[x] + "\n";
        }

        String inputString = JOptionPane.showInputDialog(null, menuString);
        selection = Integer.parseInt(inputString);

        return entreeChoices[selection - 1];
    }
}
