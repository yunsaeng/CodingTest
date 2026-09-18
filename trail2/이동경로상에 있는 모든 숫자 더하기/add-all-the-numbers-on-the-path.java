import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int t = sc.nextInt();
        char[] commands = sc.next().toCharArray();
        int[][] board = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = sc.nextInt();
            }
        }
        
        int[] dr = {-1, 0, 1, 0};
        int[] dc = {0, 1, 0, -1};
        int r = n / 2, c = n / 2, d = 0;
        int sum = board[r][c];
        for(char command : commands) {
            if(command == 'L') d = (d + 3) % 4;
            else if(command == 'R') d = (d + 1) % 4;
            else if(command == 'F') {
                int nr = r + dr[d];
                int nc = c + dc[d];

                if(nr < 0 || nr >= n || nc < 0 || nc >= n) continue;

                sum += board[nr][nc];
                r = nr;
                c = nc;
            }
        }

        System.out.println(sum);
    }
}