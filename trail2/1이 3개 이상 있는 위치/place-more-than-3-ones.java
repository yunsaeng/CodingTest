import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[][] arr = new int[n][n];
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                arr[r][c] = sc.nextInt();
            }
        }
        
        int[] dirX = {0, 1, 0, -1};
        int[] dirY = {1, 0, -1, 0};
        int result = 0;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                int cnt = 0;
                for(int d = 0; d < 4; d++) {
                    int nr = r + dirY[d];
                    int nc = c + dirX[d];

                    if(nr < 0 || nr >= n || nc < 0 || nc >= n) continue;

                    if(arr[nr][nc] == 1) cnt++;
                }
                if(cnt >= 3) result++;
            }
        }

        System.out.println(result);
    }
}