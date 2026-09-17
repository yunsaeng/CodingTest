import java.util.Scanner;

public class Main {
    static final int OFFSET = 100;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        char[][] painted = new char[OFFSET * 2 + 1][OFFSET * 2 + 1];

        for (int i = 0; i < n; i++) {
            int x1 = sc.nextInt() + OFFSET;
            int y1 = sc.nextInt() + OFFSET;
            int x2 = sc.nextInt() + OFFSET;
            int y2 = sc.nextInt() + OFFSET;

            char color = i % 2 == 0 ? 'R' : 'B';

            for(int x = x1; x < x2; x++) {
                for(int y = y1; y < y2; y++) {
                    painted[x][y] = color;
                }
            }
        }
        
        int area = 0;
        for(int x = 0; x <= OFFSET * 2; x++) {
            for(int y = 0; y <= OFFSET * 2; y++) {
                if(painted[x][y] == 'B') area++;
            }
        }
        System.out.println(area);
    }
}