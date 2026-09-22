import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int R = sc.nextInt();
        int C = sc.nextInt();
        char[][] grid = new char[R][C];
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                grid[i][j] = sc.next().charAt(0);
            }
        }
        
        long[][][] dp = new long[R][C][4];

        dp[0][0][0] = 1;

        for(int step = 0; step < 3; step++) {
            for(int i = 0; i < R; i++) {
                for(int j = 0; j < C; j++) {
                    if(dp[i][j][step] == 0) continue;

                    for(int ni = i + 1; ni < R; ni++) {
                        for(int nj = j + 1; nj < C; nj++) {
                            if(grid[i][j] != grid[ni][nj]) {
                                dp[ni][nj][step + 1] += dp[i][j][step];
                            }
                        }
                    }
                }
            }
        }

        System.out.println(dp[R - 1][C - 1][3]);
    }
}