import java.util.Scanner;
  
public class Main {
    public static final int MAX_NUM = 100;

    public static int n, m;
    public static int[][] grid;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        n = sc.nextInt();
        m = sc.nextInt();
        grid = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                grid[i][j] = sc.nextInt();
        
        int ans = 0;
        for(int i = 0; i < n; i++) {
            int temp = 1;
            int max_count = 1;
            for(int j = 1; j < n; j++) {
                if(grid[i][j - 1] == grid[i][j]) temp++;
                else {
                    max_count = Math.max(max_count, temp);
                    temp = 1;
                }
            }
            max_count = Math.max(max_count, temp);
            if(max_count >= m) ans++;
        }

        for(int i = 0; i < n; i++) {
            int temp = 1;
            int max_count = 1;
            for(int j = 1; j < n; j++) {
                if(grid[j - 1][i] == grid[j][i]) temp++;
                else {
                    max_count = Math.max(max_count, temp);
                    temp = 1;
                }
            }
            max_count = Math.max(max_count, temp);
            if(max_count >= m) ans++;
        }

        System.out.println(ans);
    }
}