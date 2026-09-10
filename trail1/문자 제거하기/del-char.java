import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        while(str.length() > 1) {
            int index = sc.nextInt();
            str = index >= str.length() - 1 
            ? str.substring(0, str.length() - 1)
            : str.substring(0, index) + str.substring(index + 1);
            System.out.println(str);
        }
    }
}