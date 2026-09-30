import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] x = new int[n];
        int[] y = new int[n];
        for (int i = 0; i < n; i++) {
            x[i] = sc.nextInt();
            y[i] = sc.nextInt();
        }
        
        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                int distX = x[j] - x[i];
                int distY = y[j] - y[i];
                int dist = distX * distX + distY * distY;
                ans = Math.min(ans, dist);
            }
        }

        System.out.println(ans);
    }
}