import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        
        int ans = Integer.MIN_VALUE;
        for(int k = 1; k <= 100; k++) {
            int cnt = 0;
            for(int i = 0; i < n; i++) {
                for(int j = i + 1; j < n; j++) {
                    if(a[j] - k == k - a[i]) cnt++;
                }
            }
            ans = Math.max(ans, cnt);
        }

        System.out.println(ans);
    }
}