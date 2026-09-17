import java.util.Scanner;

public class Main {
    static final int OFFSET = 1000;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x1 = sc.nextInt() + OFFSET;
        int y1 = sc.nextInt() + OFFSET;
        int x2 = sc.nextInt() + OFFSET;
        int y2 = sc.nextInt() + OFFSET;
        int x3 = sc.nextInt() + OFFSET;
        int y3 = sc.nextInt() + OFFSET;
        int x4 = sc.nextInt() + OFFSET;
        int y4 = sc.nextInt() + OFFSET;
        
        boolean[][] painted = new boolean[OFFSET * 2 + 1][OFFSET * 2 + 1];

        for(int x = x1; x < x2; x++) {
            for(int y = y1; y < y2; y++) {
                painted[x][y] = true;
            }
        }

        for(int x = x3; x < x4; x++) {
            for(int y = y3; y < y4; y++) {
                painted[x][y] = false;
            }
        }

        int minX = Integer.MAX_VALUE, minY = Integer.MAX_VALUE;
        int maxX = Integer.MIN_VALUE, maxY = Integer.MIN_VALUE;
        boolean hasRemaining = false;
        
        for(int x = 0; x <= OFFSET * 2; x++) {
            for(int y = 0; y <= OFFSET * 2; y++) {
                if(painted[x][y]) {
                    hasRemaining = true;
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
        }

        if(!hasRemaining) {
            System.out.println(0);
        } else {
            System.out.println((maxX - minX + 1) * (maxY - minY + 1));
        }
    }
}