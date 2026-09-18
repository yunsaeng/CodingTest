import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] commands = sc.next().toCharArray();
        int[] dirX = {0, 1, 0, -1};
        int[] dirY = {1, 0, -1, 0};
        int x = 0, y = 0, curDirIdx = 0;

        for(char c : commands) {
            if(c == 'L') curDirIdx = (curDirIdx + 3) % 4;
            else if(c == 'R') curDirIdx = (curDirIdx + 1) % 4;
            else if(c == 'F') {
                x += dirX[curDirIdx];
                y += dirY[curDirIdx];
            }
        }

        System.out.println(x + " " + y);
    }
}