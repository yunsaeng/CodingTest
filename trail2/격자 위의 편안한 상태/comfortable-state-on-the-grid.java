import java.util.Scanner;

public class Main {
    public static final int[] dirR = {1, 0, -1, 0};
    public static final int[] dirC = {0, 1, 0, -1};
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();
        boolean[][] painted = new boolean[n][n];
        for (int i = 0; i < m; i++) {
            int r = sc.nextInt() - 1;
            int c = sc.nextInt() - 1;
            painted[r][c] = true;

            int cnt = 0;
            for(int d = 0; d < 4; d++) {
                int nr = r + dirR[d];
                int nc = c + dirC[d];

                if(nr < 0 || nr >= n || nc < 0 || nc >= n) continue;

                if(painted[nr][nc]) cnt++;
            }

            System.out.println(cnt == 3 ? 1 : 0);
        }
    }
}