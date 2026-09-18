import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();
        
        int[][] board = new int[n][m];
        int[] dirR = {1, 0, -1, 0};
        int[] dirC = {0, 1, 0, -1};
        int r = 0, c = 0, dirIdx = 0, cur = 1;
        board[r][c] = cur++;
        while(cur <= n * m) {
            int nr = r + dirR[dirIdx];
            int nc = c + dirC[dirIdx];
            
            if(nr < 0 || nr >= n || nc < 0 || nc >= m || board[nr][nc] != 0) {
                dirIdx = (dirIdx + 1) % 4;
                continue;
            }

            board[nr][nc] = cur++;
            r = nr;
            c = nc;
        }

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }
}