import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int gender = sc.nextInt();
        int age = sc.nextInt();

        System.out.println(gender == 0 ? (age >= 19 ? "MAN" : "BOY") : (age >= 19 ? "WOMAN" : "GIRL"));
    }
}