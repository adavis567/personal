package You Do It Chapter 10;

import javax.swing.JOptionPane;

public class PlanMenu {
    public static void main(String[] args) {
        Menu briefMenu = new Menu();
        PickMenu entree = null;
        String guestChoice;

        try {
            entree = new PickMenu(briefMenu);
            guestChoice = entree.getGuestChoice();
        } catch (Exception e) {
            guestChoice = "an invalid selection";
        }

        JOptionPane.showMessageDialog(null, "You chose " + guestChoice);
    }
}
