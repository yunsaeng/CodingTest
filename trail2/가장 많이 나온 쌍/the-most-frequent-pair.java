import java.util.Scanner;

public class Main {
    public static final int MAX_N = 10;
    public static final int MAX_M = 100;

    public static int n;
    public static int m;
    public static int[] a = new int[MAX_M];
    public static int[] b = new int[MAX_M];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();

        for (int i = 0; i < m; i++) {
            a[i] = sc.nextInt();
            b[i] = sc.nextInt();
        }
        
        int ans = 0;

        for(int i = 1; i <= n; i++) {
            for(int j = i + 1; j <= n; j++) {
                int cnt = 0;

                for(int k = 0; k < m; k++) {
                    if((i == a[k] && j == b[k]) || (i == b[k] && j == a[k])) {
                        cnt++;
                    }
                }

                ans = Math.max(ans, cnt);
            }
        }

        System.out.println(ans);
    }
}