package Final Exam;

/**
 * Name: Anthony Davis
 * Date: August 13, 2026
 * Course: COSC 1437
 * Summary: Captures console input for 8 standard Event elements, assembling attributes
 * into uniform comma-delimited record blocks saved to a flat data file directory.
 * Output: Generates a persistent file titled "EventLogData.txt" inside active execution pathways.
 */
import java.io.*;
import java.nio.file.*;
import java.util.Scanner;

public class CreateEventFile {
    public static void main(String[] args) {
        final int LIMIT = 8;
        Scanner input = new Scanner(System.in);
        Path targetPathFile = Paths.get("EventLogData.txt");
        
        // Establishes clear tracking buffers targeting local system storage locations
        try (OutputStream outputStreamFile = new BufferedOutputStream(Files.newOutputStream(targetPathFile, StandardOpenOption.CREATE, StandardOpenOption.WRITE));
             BufferedWriter fileWriter = new BufferedWriter(new OutputStreamWriter(outputStreamFile))) {
            
            for (int indexValue = 0; indexValue < LIMIT; ++indexValue) {
                System.out.println("\n--- Documenting Event Data Record File Slot " + (indexValue + 1) + " / " + LIMIT + " ---");
                System.out.print("Enter 4-character alpha-numeric event index identifier >> ");
                String eNum = input.nextLine();
                
                System.out.print("Enter absolute integer count for event guest registration >> ");
                int guests = input.nextInt();
                System.out.print("Enter event classification integer categorization option code (0-4) >> ");
                int classification = input.nextInt();
                input.nextLine(); // Clear scanner buffer lines
                
                // Formulate target runtime layout using base logic controls
                Event processingInstance = new Event(eNum, guests);
                processingInstance.setEventType(classification);
                
                // Delimited structural parsing layout string formulation parsing
                String serializableOutputRowString = processingInstance.getEventNumber() + "," +
                                                    processingInstance.getEventType() + "," +
                                                    processingInstance.getGuests() + "," +
                                                    processingInstance.getPriceForEvent() + System.lineSeparator();
                
                fileWriter.write(serializableOutputRowString, 0, serializableOutputRowString.length());
            }
            System.out.println("\n[System Notification]: Data serialization logs parsed successfully. EventLogData.txt generated.");
        } catch (IOException ioExceptionSignal) {
            System.out.println("Fatal File Processing System Exception encountered: " + ioExceptionSignal.getMessage());
        }
    }
}
