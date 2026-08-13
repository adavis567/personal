package You Do It Chapter 11;

import java.nio.file.*;
import java.io.*;
import java.nio.channels.FileChannel;
import java.nio.ByteBuffer;
import static java.nio.file.StandardOpenOption.*;
import java.util.Scanner;
import java.text.*;

public class CreateFilesBasedOnState {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        // Setup Path objects for target text files
        Path inStatePath = Paths.get("InStateCusts.txt");
        Path outStatePath = Paths.get("OutOfStateCusts.txt");

        // Format declarations to enforce fixed field sizes
        final String ACCOUNT_FORMAT = "000";
        final String NAME_FORMAT = "          "; // Exactly 10 spaces
        final String STATE_FORMAT = "  ";       // Exactly 2 spaces
        final String BALANCE_FORMAT = "0000.00";
        final String DELIMITER = ",";

        // Build a dummy record string to calculate universal size constraints
        String dummyRecord = ACCOUNT_FORMAT + DELIMITER + NAME_FORMAT + DELIMITER + 
                             STATE_FORMAT + DELIMITER + BALANCE_FORMAT + System.lineSeparator();
        final int RECSIZE = dummyRecord.length();

        // Operational file reference states
        FileChannel fcIn = null;
        FileChannel fcOut = null;
        String accountString;
        int account;
        String name;
        String state;
        double balance;
        final String QUIT = "999";

        // Initialize and generate the clean structured files on your drive
        createEmptyFile(inStatePath, dummyRecord);
        createEmptyFile(outStatePath, dummyRecord);

        try {
            fcIn = FileChannel.open(inStatePath, CREATE, WRITE);
            fcOut = FileChannel.open(outStatePath, CREATE, WRITE);

            System.out.print("Enter 3-digit customer account number or " + QUIT + " to quit >> ");
            accountString = input.nextLine();

            while (!accountString.equals(QUIT)) {
                account = Integer.parseInt(accountString);

                System.out.print("Enter name for customer >> ");
                name = input.nextLine();
                StringBuilder sb = new StringBuilder(name);
                sb.setLength(10); // Standardize the name length field to 10
                name = sb.toString();

                System.out.print("Enter 2-letter state of residence >> ");
                state = input.nextLine();

                System.out.print("Enter balance due >> ");
                balance = input.nextDouble();
                input.nextLine(); // Clear the Scanner input buffer

                DecimalFormat df = new DecimalFormat(BALANCE_FORMAT);
                String balanceString = df.format(balance);

                // Assemble the comma-delimited output string row
                String record = accountString + DELIMITER + name + DELIMITER + 
                               state + DELIMITER + balanceString + System.lineSeparator();
                
                byte[] data = record.getBytes();
                ByteBuffer buffer = ByteBuffer.wrap(data);

                // Filter channels by geography and write explicitly to computed file index offset
                if (state.equalsIgnoreCase("WI")) {
                    fcIn.position(account * RECSIZE);
                    fcIn.write(buffer);
                } else {
                    fcOut.position(account * RECSIZE);
                    fcOut.write(buffer);
                }

                System.out.print("Enter next account number or " + QUIT + " to quit >> ");
                accountString = input.nextLine();
            }

            fcIn.close();
            fcOut.close();
        } catch (Exception e) {
            System.out.println("Operational data entry error: " + e.getMessage());
        }
        input.close();
    }

    // Helper method to populate structural files with empty records
    public static void createEmptyFile(Path file, String s) {
        final int NUMRECS = 1000;
        try {
            OutputStream output = new BufferedOutputStream(Files.newOutputStream(file, CREATE));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(output));
            
            for (int count = 0; count < NUMRECS; ++count) {
                writer.write(s, 0, s.length());
            }
            writer.close();
        } catch (Exception e) {
            System.out.println("Error initializing baseline empty template: " + e.getMessage());
        }
    }
}
