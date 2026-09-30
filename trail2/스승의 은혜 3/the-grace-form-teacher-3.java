import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int b = sc.nextInt();
        int[][] ps = new int[n][2];
        for(int i = 0; i < n; i++){
            ps[i][0] = sc.nextInt();
            ps[i][1] = sc.nextInt();
        }
        
        int ans = 0;
        for(int i = 0; i < n; i++) {
            int[] tempArr = new int[n];
            for(int j = 0; j < n; j++) {
                if(i == j) tempArr[j] = ps[j][0] / 2 + ps[j][1];
                else tempArr[j] = ps[j][0] + ps[j][1];
            }
            Arrays.sort(tempArr);

            int temp = b;
            int cnt = 0;
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