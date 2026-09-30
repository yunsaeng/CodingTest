import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] x = new int[N];
        int[] y = new int[N];
        for (int i = 0; i < N; i++) {
            x[i] = sc.nextInt();
            y[i] = sc.nextInt();
        }
        
        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < N; i++) {
            int minX = Integer.MAX_VALUE, minY = Integer.MAX_VALUE;
            int maxX = Integer.MIN_VALUE, maxY = Integer.MIN_VALUE;
            for(int j = 0; j < N; j++) {
                if(i == j) continue;
                minX = Math.min(minX, x[j]);
                minY = Math.min(minY, y[j]);
                maxX = Math.max(maxX, x[j]);
                maxY = Math.max(maxY, y[j]);
            }
            ans = Math.min(ans, (maxX - minX) * (maxY - minY));
        }

        System.out.println(ans);
    }
}