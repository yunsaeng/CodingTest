import java.util.Scanner;

public class Main {
    public static int[] dr = {-1, -1, 0, 1, 1, 1, 0, -1};
    public static int[] dc = {0, 1, 1, 1, 0, -1, -1, -1};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] grid = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                grid[i][j] = sc.nextInt();
            }
        }
        
        int ans = Integer.MIN_VALUE;
        for(int i = 1; i < n - 1; i++) {
            for(int j = 1; j < n - 1; j++) {
                int temp = grid[i][j];
                for(int d = 0; d < 8; d++) {
                    int ni = i + dr[d];
                    int nj = j + dc[d];
                    temp += grid[ni][nj];
                }
                ans = Math.max(ans, temp);
            }
        }

        System.out.println(ans);
    }
}