import java.util.Scanner;

public class Main {
    static final int OFFSET = 1000;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ax1 = sc.nextInt() + 1000;
        int ay1 = sc.nextInt() + 1000;
        int ax2 = sc.nextInt() + 1000;
        int ay2 = sc.nextInt() + 1000;
        int bx1 = sc.nextInt() + 1000;
        int by1 = sc.nextInt() + 1000;
        int bx2 = sc.nextInt() + 1000;
        int by2 = sc.nextInt() + 1000;
        int mx1 = sc.nextInt() + 1000;
        int my1 = sc.nextInt() + 1000;
        int mx2 = sc.nextInt() + 1000;
        int my2 = sc.nextInt() + 1000;
        
        boolean[][] painted = new boolean[OFFSET * 2 + 1][OFFSET * 2 + 1];

        for(int x = ax1; x < ax2; x++) {
            for(int y = ay1; y < ay2; y++) {
                painted[x][y] = true;
            }
        }

        for(int x = bx1; x < bx2; x++) {
            for(int y = by1; y < by2; y++) {
                painted[x][y] = true;
            }
        }

        for(int x = mx1; x < mx2; x++) {
            for(int y = my1; y < my2; y++) {
                painted[x][y] = false;
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