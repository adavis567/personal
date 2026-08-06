import javax.swing.JOptionPane;
import java.time.LocalDateTime;

public class TimedResponse {
    public static void main(String[] args) {
        LocalDateTime time1, time2;
        int seconds1, seconds2, difference;

        // Step 3: Capture starting system time and extract the current second
        time1 = LocalDateTime.now();
        seconds1 = time1.getSecond();

        // Step 4: Display the confirmation choice dialog box on screen
        JOptionPane.showConfirmDialog(null, "Is today a great day to learn Java programming?");

        // Step 5: Capture ending system time immediately after user response
        time2 = LocalDateTime.now();
        seconds2 = time2.getSecond();

        // Step 6: Compute the elapsed time and display result in a dialog box
        difference = seconds2 - seconds1;
        JOptionPane.showMessageDialog(null, "End time: " + seconds2 + 
            "\nStart time: " + seconds1 + "\nIt took " + difference + " seconds to reply.");
    }
}
