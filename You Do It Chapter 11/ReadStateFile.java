package You Do It Chapter 11;

import java.nio.file.*;
import java.io.*;
import java.nio.channels.FileChannel;
import java.nio.ByteBuffer;
import static java.nio.file.StandardOpenOption.*;
import java.nio.file.attribute.*;
import java.util.Scanner;

public class ReadStateFile {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String fileName;

        // Prompt user for file name to analyze
        System.out.print("Enter the file name to read (InStateCusts.txt or OutOfStateCusts.txt) >> ");
        fileName = input.nextLine();
        Path file = Paths.get(fileName);

        // Format definitions matching writer layout rules
        final String ACCOUNT_FORMAT = "000";
        final String NAME_FORMAT = "          ";
        final String STATE_FORMAT = "  ";
        final String BALANCE_FORMAT = "0000.00";
        final String DELIMITER = ",";

        String dummyRecord = ACCOUNT_FORMAT + DELIMITER + NAME_FORMAT + DELIMITER + 
                             STATE_FORMAT + DELIMITER + BALANCE_FORMAT + System.lineSeparator();
        final int RECSIZE = dummyRecord.length();

        byte[] data = dummyRecord.getBytes();
        String emptyAccount = "000";
        String[] array = new String[4];
        double balance;
        double total = 0;

        // Display basic file attributes
        try {
            BasicFileAttributes attr = Files.readAttributes(file, BasicFileAttributes.class);
            System.out.println("\n--- File Statistics ---");
            System.out.println("Creation time: " + attr.creationTime());
            System.out.println("File size: " + attr.size() + " bytes\n");
        } catch (IOException e) {
            System.out.println("IO Error fetching metadata: " + e.getMessage());
        }

        // Sequential File Reading
        try {
            InputStream inputStr = new BufferedInputStream(Files.newInputStream(file));
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStr));
            String record;

            System.out.println("--- Sequential Non-Default Active Records ---");
            record = reader.readLine();
            
            while (record != null) {
                array = record.split(DELIMITER);
                
                // Only evaluate and print if row does not consist of default placeholder values
                if (!array[0].equals(emptyAccount)) {
                    balance = Double.parseDouble(array[3]);
                    total += balance;
                    System.out.println("ID #" + array[0] + " | Name: " + array[1] + 
                                       " | State: " + array[2] + " | Balance: $" + balance);
                }
                record = reader.readLine();
            }
            System.out.println("Cumulative total balance outstanding: $" + total + "\n");
            reader.close();
        } catch (Exception e) {
            System.out.println("Sequential reader stream exception: " + e.getMessage());
        }

        // Random Access Lookup Functionality
        try (FileChannel fc = FileChannel.open(file, READ)) {
            ByteBuffer buffer = ByteBuffer.wrap(data);
            int searchAccount;

            System.out.print("Enter an account number to search for directly >> ");
            searchAccount = input.nextInt();

            // Seek pointer to exact target data offset boundary
            fc.position(searchAccount * RECSIZE);
            fc.read(buffer);

            String searchResult = new String(data);
            System.out.println("Retrieved record data content: " + searchResult);
        } catch (Exception e) {
            System.out.println("Random access query failed: " + e.getMessage());
        }
        input.close();
    }
}
