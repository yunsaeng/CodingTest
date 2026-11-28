import java.util.Scanner;

public class Main {
    public static final int MAX_NUM = 20;

    public static int n, m;
    public static int[][] grid = new int[MAX_NUM][MAX_NUM];

    public static int getGold(int r, int c, int k) {
        int cnt = 0;
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                if (Math.abs(r - i) + Math.abs(c - j) <= k)
                    cnt += grid[i][j];
        return cnt;
    }

    public static int getCost(int k) {
        return k * k + (k + 1) * (k + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                grid[i][j] = sc.nextInt();

        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k <= 2 * (n - 1); k++) {
                    int gold = getGold(i, j, k);
                    if (gold * m >= getCost(k))
                        ans = Math.max(ans, gold);
                }
            }
        }

        System.out.println(ans);
    }
}