import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int b = sc.nextInt();
        int[] p = new int[n];
        for (int i = 0; i < n; i++) {
            p[i] = sc.nextInt();
        }

        int ans = 0;
        for(int i = 0; i < n; i++) {
            int[] tempArr = p.clone();
            int temp = b;
            int cnt = 0;

            tempArr[i] /= 2;
            Arrays.sort(tempArr);
            for(int j = 0; j < n; j++) {
                temp -= tempArr[j];
                if(temp < 0) break;
                cnt++;
            }

            ans = Math.max(ans, cnt);
        }

        System.out.println(ans);
    }
}