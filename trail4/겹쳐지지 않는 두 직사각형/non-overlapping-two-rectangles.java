import java.util.Scanner;

public class Main {
    public static int n, m;
    public static int[][] grid;

    // (x1, y1) ~ (x2, y2) 직사각형 안의 합
    public static int rectSum(int x1, int y1, int x2, int y2) {
        int sum = 0;
        for (int i = x1; i <= x2; i++)
            for (int j = y1; j <= y2; j++)
                sum += grid[i][j];
        return sum;
    }

    // 두 직사각형이 겹치는지 확인
    // 한쪽이 다른 쪽보다 완전히 위/아래/왼쪽/오른쪽에 있으면 안 겹침
    public static boolean overlap(int ax1, int ay1, int ax2, int ay2,
                                  int bx1, int by1, int bx2, int by2) {
        return !(ax2 < bx1 || bx2 < ax1 || ay2 < by1 || by2 < ay1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        grid = new int[n][m];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                grid[i][j] = sc.nextInt();

        int ans = Integer.MIN_VALUE;

        // 첫 번째 직사각형 (ax1, ay1) ~ (ax2, ay2)
        for (int ax1 = 0; ax1 < n; ax1++)
        for (int ay1 = 0; ay1 < m; ay1++)
        for (int ax2 = ax1; ax2 < n; ax2++)
        for (int ay2 = ay1; ay2 < m; ay2++) {
            int sumA = rectSum(ax1, ay1, ax2, ay2);

            // 두 번째 직사각형 (bx1, by1) ~ (bx2, by2)
            for (int bx1 = 0; bx1 < n; bx1++)
            for (int by1 = 0; by1 < m; by1++)
            for (int bx2 = bx1; bx2 < n; bx2++)
            for (int by2 = by1; by2 < m; by2++) {
                if (overlap(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)) continue;
                ans = Math.max(ans, sumA + rectSum(bx1, by1, bx2, by2));
            }
        }

        System.out.println(ans);
    }
}