import java.util.Scanner;

public class Main {
    static final int OFFSET = 100;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        boolean[][] painted = new boolean[OFFSET * 2 + 1][OFFSET * 2 + 1];

        for (int i = 0; i < n; i++) {
            int sx = sc.nextInt() + OFFSET;
            int sy = sc.nextInt() + OFFSET;

            for(int x = sx; x < sx + 8; x++) {
                for(int y = sy; y < sy + 8; y++) {
                    painted[x][y] = true;
                }
            }
        }
        
        int area = 0;
        for(int x = 0; x <= OFFSET * 2; x++) {
            for(int y = 0; y <= OFFSET * 2; y++) {
                if(painted[x][y]) area++;
            }
        }
        System.out.println(area);
    }
}