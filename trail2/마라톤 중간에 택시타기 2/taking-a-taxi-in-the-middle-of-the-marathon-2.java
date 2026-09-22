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
        
        int min = Integer.MAX_VALUE;
        for(int i = 1; i < n - 1; i++) {
            int dist = 0;
            for(int j = 0; j < n - 1; j++) {
                if(j == i) continue;

                if(j + 1 == i) dist += Math.abs(x[j + 2] - x[j]) + Math.abs(y[j + 2] - y[j]);
                else dist += Math.abs(x[j + 1] - x[j]) + Math.abs(y[j + 1] - y[j]);
            }
            min = Math.min(min, dist);
        }

        System.out.println(min);
    }
}