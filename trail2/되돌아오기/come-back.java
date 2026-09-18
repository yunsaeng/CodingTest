import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Map<Character, int[]> dirs = new HashMap<>();
        dirs.put('W', new int[]{-1, 0});
        dirs.put('S', new int[]{0, -1});
        dirs.put('N', new int[]{0, 1});
        dirs.put('E', new int[]{1, 0});

        int n = sc.nextInt();
        int x = 0, y = 0, time = 0;
        for (int i = 0; i < n; i++) {
            char direction = sc.next().charAt(0);
            int distance = sc.nextInt();
            
            int[] dir = dirs.get(direction);
            for(int d = 1; d <= distance; d++) {
                x += dir[0];
                y += dir[1];
                time++;

                if(x == 0 && y == 0) break;
            }
            if(x == 0 && y == 0) break;
        }

        System.out.println(x == 0 && y == 0 ? time : -1);
    }
}