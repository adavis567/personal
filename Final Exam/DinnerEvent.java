package Final Exam;

/**
 * Name: Anthony Davis
 * Date: August 13, 2026
 * Course: COSC 1437
 * Summary: This class extends the Event base class to construct a DinnerEvent subclass.
 * It encapsulates additional tracking data representing menu choice configurations 
 * selected from static immutable string option vectors.
 * Test Data: Event "M524", 65 guests, choices 0, 1, 2, 0. Expected text selection return mapping.
 */
public class DinnerEvent extends Event {
    // Immutable collection constants holding string menu selection values
    public static final String[] ENTREES = {"Filet Mignon", "Garlic Butter Chicken", "Atlantic Salmon"};
    public static final String[] SIDES = {"Truffle Mashed Potatoes", "Grilled Asparagus", "Wild Rice Pilaf", "Ceasar Salad"};
    public static final String[] DESSERTS = {"New York Cheesecake", "Molten Chocolate Lava Cake", "Crème Brûlée"};

    private int entreeChoice;
    private int sideDishChoice1;
    private int sideDishChoice2;
    private int dessertChoice;

    // Constructor chains up parameter markers directly into the parent Event structure
    public DinnerEvent(String num, int guests, int entree, int side1, int side2, int dessert) {
        super(num, guests);
        
        // Enforces basic array boundary safety values via simple conditional fallbacks
        this.entreeChoice = (entree >= 0 && entree < ENTREES.length) ? entree : ENTREES.length - 1;
        this.sideDishChoice1 = (side1 >= 0 && side1 < SIDES.length) ? side1 : SIDES.length - 1;
        this.sideDishChoice2 = (side2 >= 0 && side2 < SIDES.length) ? side2 : SIDES.length - 1;
        this.dessertChoice = (dessert >= 0 && dessert < DESSERTS.length) ? dessert : DESSERTS.length - 1;
    }

    // Accumulates individual textual records into a clean single string output block
    public String getMenu() {
        return "Selected Entree: " + ENTREES[entreeChoice] + 
               "\nSide Item 1: " + SIDES[sideDishChoice1] + 
               "\nSide Item 2: " + SIDES[sideDishChoice2] + 
               "\nDessert Selection: " + DESSERTS[dessertChoice];
    }
}
