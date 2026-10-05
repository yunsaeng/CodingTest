import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] h = new int[n];
        for (int i = 0; i < n; i++) {
            h[i] = sc.nextInt();
        }
        
        int ans = Integer.MIN_VALUE;
        for(int s = 0; s <= 1000; s++) {
            boolean isSink = h[0] <= s;
            int cnt = isSink ? 0 : 1;
            for(int i = 1; i < n; i++) {
                if(!isSink && h[i] <= s) {
                    isSink = true;
                } else if(isSink && h[i] > s) {
                    isSink = false;
                    cnt++;
                }
            }
            ans = Math.max(ans, cnt);
        }

        System.out.println(ans);
    }
}