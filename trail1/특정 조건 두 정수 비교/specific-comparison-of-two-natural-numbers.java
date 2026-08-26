import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        System.out.printf("%d %d", A < B ? 1 : 0, A == B ? 1 : 0);
    }
}