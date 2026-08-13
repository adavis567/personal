package You Do It Chapter 10;

public class PickMenu {
    private Menu briefMenu;
    private String guestChoice;

    public PickMenu(Menu m) {
        briefMenu = m;
        setGuestChoice();
    }

    public void setGuestChoice() {
        guestChoice = briefMenu.displayMenu();
    }

    public String getGuestChoice() {
        return guestChoice;
    }
}
