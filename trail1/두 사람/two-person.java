import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age1 = sc.nextInt();
        String gender1 = sc.next();
        int age2 = sc.nextInt();
        String gender2 = sc.next();
        System.out.println((age1 >= 19 && gender1.equals("M") || (age2 >= 19 && gender2.equals("M"))) ? 1 : 0);
    }
}