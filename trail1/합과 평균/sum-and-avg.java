import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        System.out.printf("%d %.1f", A + B, (double)(A + B) / 2);
    }
}