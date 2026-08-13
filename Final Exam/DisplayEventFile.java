package Final Exam;

/**
 * Name: Anthony Davis
 * Date: August 13, 2026
 * Course: COSC 1437
 * Summary: This application opens the "EventLogData.txt" target output document,
 * processing lines via token array splitting methods to construct structural summaries.
 */
import java.io.*;
import java.nio.file.*;

public class DisplayEventFile {
    public static void main(String[] args) {
        Path targetInputLogFile = Paths.get("EventLogData.txt");
        
        if (!Files.exists(targetInputLogFile)) {
            System.out.println("Critical Error: Missing file resource 'EventLogData.txt'. Run CreateEventFile first.");
            return;
        }

        System.out.println("\n=======================================================");
        System.out.println("           YUMMY CATERING LOG RECORD AUDIT             ");
        System.out.println("=======================================================");
        
        try (InputStream operationalStreamInput = new BufferedInputStream(Files.newInputStream(targetInputLogFile));
             BufferedReader dataRowReader = new BufferedReader(new InputStreamReader(operationalStreamInput))) {
            
            String isolatedDataRowString = dataRowReader.readLine();
            int entriesCount = 0;
            
            while (isolatedDataRowString != null) {
                // Break down string tokens using standard comma splitting operations
                String[] parsedTokensArray = isolatedDataRowString.split(",");
                
                if (parsedTokensArray.length == 4) {
                    entriesCount++;
                    String eventIdCode = parsedTokensArray[0];
                    int typeIndexValue = Integer.parseInt(parsedTokensArray[1]);
                    int guestAttendanceCount = Integer.parseInt(parsedTokensArray[2]);
                    double calculatedPriceValue = Double.parseDouble(parsedTokensArray[3]);
                    
                    // Fall back to mapping constants array for naming matching steps
                    String stringTypeOutputLabel = (typeIndexValue >= 0 && typeIndexValue < Event.EVENT_TYPES.length) ? Event.EVENT_TYPES[typeIndexValue] : "unknown";
                    
                    System.out.printf("Record #%d | ID Ref: %-5s | Category: %-10s | Guests: %-4d | Invoice Balance: $%,.2f%n", 
                                      entriesCount, eventIdCode, stringTypeOutputLabel, guestAttendanceCount, calculatedPriceValue);
                }
                isolatedDataRowString = dataRowReader.readLine();
            }
            System.out.println("=======================================================");
            System.out.println("Total Active Logs Audited from Storage System: " + entriesCount);
        } catch (IOException processingException) {
            System.out.println("Data extraction stream failure: " + processingException.getMessage());
        }
    }
}
