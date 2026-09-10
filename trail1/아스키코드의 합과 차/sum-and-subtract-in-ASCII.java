import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch1 = sc.next().charAt(0);
        char ch2 = sc.next().charAt(0);

        System.out.println((((int)ch1 + (int)ch2)) + " " + (Math.abs((int)ch1 - (int)ch2)));
    }
}