import java.util.Scanner;

public class Main {
    public static int n;
    public static int[][] grid;

    // 1: 오른쪽 위, 2: 왼쪽 위, 3: 왼쪽 아래, 4: 오른쪽 아래
    public static int[] dr = {-1, -1, 1, 1};
    public static int[] dc = {1, -1, -1, 1};

    public static boolean inRange(int r, int c) {
        return r >= 0 && r < n && c >= 0 && c < n;
    }

    // (r, c)에서 시작해 1, 3번 방향으로 a칸, 2, 4번 방향으로 b칸 움직일 때의 합
    // 격자를 벗어나면 -1
    public static int getScore(int r, int c, int a, int b) {
        int[] len = {a, b, a, b};
        int sum = 0;

        for (int d = 0; d < 4; d++) {
            for (int step = 0; step < len[d]; step++) {
                r += dr[d];
                c += dc[d];
                if (!inRange(r, c)) return -1;
                sum += grid[r][c];
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        grid = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                grid[i][j] = sc.nextInt();

        int ans = 0;
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                for (int a = 1; a < n; a++)
                    for (int b = 1; b < n; b++)
                        ans = Math.max(ans, getScore(i, j, a, b));

        System.out.println(ans);
    }
}