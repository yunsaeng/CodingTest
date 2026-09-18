import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        
        int[][] board = new int[n][n];
        int[] dirR = {1, 0, -1, 0};
        int[] dirC = {0, 1, 0, -1};
        int r = n / 2, c = n / 2, dirIdx = 0, cur = 1;
        board[r][c] = cur++;
        while(cur <= n * n) {
            int nd = (dirIdx + 1) % 4;
            int nr = r + dirR[nd];
            int nc = c + dirC[nd];
            
            if(nr >= 0 && nr < n && nc >= 0 && nc < n) {
                if(board[nr][nc] == 0) {
                    board[nr][nc] = cur++;
                    dirIdx = nd;
                    r = nr;
                    c = nc;
                } else {
                    r += dirR[dirIdx];
                    c += dirC[dirIdx];
                    board[r][c] = cur++;
                }
            }
        }

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }
}