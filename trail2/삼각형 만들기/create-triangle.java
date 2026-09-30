import java.util.Scanner;
public class Main {
    public static final int MAX = 100;
    public static int[] x = new int[MAX];
    public static int[] y = new int[MAX];

    public static boolean isRT(int i, int j, int k) {
        return ((x[i] == x[j]) || (x[j] == x[k]) || (x[k] == x[i])) &&
            ((y[i] == y[j]) || (y[j] == y[k]) || (y[k] == y[i])) &&
            !(x[i] == x[j] && x[j] == x[k]) &&
            !(y[i] == y[j] && y[j] == y[k]);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            x[i] = sc.nextInt();
            y[i] = sc.nextInt();
        }
        
        int ans = 0;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                for(int k = j + 1; k < n; k++) {
                    if(!isRT(i, j, k)) continue;
                    ans = Math.max(ans, Math.abs((x[i] * y[j] + x[j] * y[k] + x[k] * y[i]) - (x[j] * y[i] + x[k] * y[j] + x[i] * y[k])));
                }
            }
        }

        System.out.println(ans);
    }
}