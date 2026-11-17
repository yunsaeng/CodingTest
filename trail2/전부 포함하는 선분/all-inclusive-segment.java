import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] x1 = new int[n];
        int[] x2 = new int[n];
        for (int i = 0; i < n; i++) {
            x1[i] = sc.nextInt();
            x2[i] = sc.nextInt();
        }

        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++) {
            int sx = Integer.MAX_VALUE, ex = Integer.MIN_VALUE;
            for(int j = 0; j < n; j++) {
                if(i == j) continue;

                sx = Math.min(sx, x1[j]);
                ex = Math.max(ex, x2[j]);
            }

            ans = Math.min(ans, ex - sx);
        }

        System.out.println(ans);
    }
}
