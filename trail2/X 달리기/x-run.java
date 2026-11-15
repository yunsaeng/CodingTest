import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int X = sc.nextInt();

        for (int T = 1; ; T++) {
            long maxDist = 0;
            for (int t = 1; t <= T; t++) {
                maxDist += Math.min(t, T - t + 1);
            }

            if (T <= X && X <= maxDist) {
                System.out.println(T);
                return;
            }
        }
    }
}