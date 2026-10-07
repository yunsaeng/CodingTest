import java.util.Scanner;

public class Main {
    public static final int MAX_X = 100;
    public static final int MAX_Y = 100;
    public static final int MAX_N = 100;

    public static int n;
    public static int[] x = new int[MAX_N];
    public static int[] y = new int[MAX_N];
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            x[i] = sc.nextInt();
            y[i] = sc.nextInt();
        }
        
        int m = Integer.MAX_VALUE;
        for(int i = 0; i <= MAX_X; i+=2) {
            for(int j = 0; j <= MAX_Y; j+=2) {
                int tl = 0;
                for(int k = 0; k < n; k++) if(x[k] < i && y[k] > j) tl++;

                int tr = 0;
                for(int k = 0; k < n; k++) if(x[k] > i && y[k] > j) tr++;

                int bl = 0;
                for(int k = 0; k < n; k++) if(x[k] < i && y[k] < j) bl++;

                int br = 0;
                for(int k = 0; k < n; k++) if(x[k] > i && y[k] < j) br++;

                m = Math.min(m, Math.max(Math.max(tl, tr), Math.max(bl, br)));
            }
        }

        System.out.println(m);
    }
}