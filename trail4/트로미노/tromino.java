import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] grid = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                grid[i][j] = sc.nextInt();
            }
        }
        
        int ans = 0;
        for(int i = 0; i < n; i++) {
            for(int j = 2; j < m; j++) {
                ans = Math.max(ans, grid[i][j - 2] + grid[i][j - 1] + grid[i][j]);
            }
        }

        for(int i = 0; i < m; i++) {
            for(int j = 2; j < n; j++) {
                ans = Math.max(ans, grid[j - 2][i] + grid[j - 1][i] + grid[j][i]);
            }
        }

        for(int i = 1; i < n; i++) {
            for(int j = 1; j < m; j++) {
                int min = Math.min(Math.min(grid[i - 1][j - 1], grid[i - 1][j]), Math.min(grid[i][j - 1], grid[i][j]));
                ans = Math.max(ans, grid[i - 1][j - 1] + grid[i - 1][j] + grid[i][j - 1] + grid[i][j] - min);
            }
        }

        System.out.println(ans);
    }
}