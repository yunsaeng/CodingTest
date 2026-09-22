import java.util.Scanner;

public class Main {
    public static int[][] arr = new int[19][19];
    public static int[][] dirs = {{0, 1}, {1, 0}, {1, 1}, {1, -1}};

    public static boolean check(int r, int c, int dr, int dc) {
        int val = arr[r][c];
        for(int dist = -2; dist <= 2; dist++) {
            int nr = r + (dr * dist);
            int nc = c + (dc * dist);

            if(nr < 0 || nr >= 19 || nc < 0 || nc >= 19) return false;
            if(arr[nr][nc] != val) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        for (int i = 0; i < 19; i++) {
            for (int j = 0; j < 19; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        
        for(int i = 0; i < 19; i++) {
            for(int j = 0; j < 19; j++) {
                if(arr[i][j] == 0) continue;

                for(int k = 0; k < 4; k++) {
                    int dr = dirs[k][0];
                    int dc = dirs[k][1];

                    if(check(i, j, dr, dc)) {
                        System.out.println(arr[i][j]);
                        System.out.println((i + 1) + " " + (j + 1));
                        return;
                    }
                }
            }
        }

        System.out.println(0);
    }
}