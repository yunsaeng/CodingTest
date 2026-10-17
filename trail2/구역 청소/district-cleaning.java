import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();

        int overlap = Math.max(0, Math.min(b, d) - Math.max(a, c));
        int ans = (b - a) + (d - c) - overlap;

        System.out.println(ans);
    }
}