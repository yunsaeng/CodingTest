import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static int[][] arr = new int[3][3];
    public static boolean[] check = new boolean[10];

    public static int[] dr = {0, 1, 1, 1};
    public static int[] dc = {1, 0, 1, -1};

    public static Set<String> s = new HashSet<>();

    public static void f(int r, int c, int di) {
        for(int i = 0; i < 3; i++) {
            check[arr[r][c]] = true;

            r += dr[di];
            c += dc[di];
        }

        int cnt = 0;
        String str = "";
        for(int i = 0; i < 10; i++) {
            if(check[i]) {
                cnt++;
                str += i;
                check[i] = false;
            }
        }

        if(cnt == 2) s.add(str);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 3; i++) {
            char[] input = sc.next().toCharArray();
            for(int j = 0; j < 3; j++) {
                arr[i][j] = Character.getNumericValue(input[j]);
            }
        }

        int ans = 0;
        for(int i = 0; i < 3; i++) {
            f(i, 0, 0);
            f(0, i, 1);
        }
        f(0, 0, 2);
        f(0, 2, 3);

        System.out.println(s.size());
    }
}