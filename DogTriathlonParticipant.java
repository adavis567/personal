public class DogTriathlonParticipant {
    private final int NUM_EVENTS;
    private static int totalCumulativeScore = 0;

    private String name;
    private int score1;
    private int score2;
    private int score3;
    private int total;
    private double avg;

    // Constructor
    public DogTriathlonParticipant(String name, int numEvents, int s1, int s2, int s3) {
        this.name = name;
        this.NUM_EVENTS = numEvents;
        this.score1 = s1;
        this.score2 = s2;
        this.score3 = s3;

        this.total = s1 + s2 + s3;
        this.avg = (double) total / NUM_EVENTS;
        totalCumulativeScore += total;
    }

    // Display method
    public void display() {
        System.out.println(name + " participated in " + NUM_EVENTS + " events.");
        System.out.println("Scores: " + score1 + ", " + score2 + ", " + score3);
        System.out.println("Total score: " + total + " (Average: " + avg + ")");
        System.out.println("Total cumulative score for all dogs is " + totalCumulativeScore);
        System.out.println();
    }
}
