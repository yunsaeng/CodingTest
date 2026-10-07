import java.util.Scanner;

public class Main {
    public static final int MAX_N = 20;

    public static int n;
    public static int[] seat = new int[MAX_N];
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        String str = sc.next();

        for(int i = 0; i < n; i++) {
            seat[i] = str.charAt(i) - '0';
        }
        
        int ans = 0;
        for(int i = 0; i < n; i++) {
            if(seat[i] == 1) continue;

            int l = i;
            int ll = MAX_N;
            for(int j = i - 1; j >= 0 ; j--) {
                if(seat[j] == 1) {
                    ll = Math.min(ll, l - j);
                    l = j;
                }
            }

            int r = i;
            int rl = MAX_N;
            for(int j = i + 1; j < n; j++) {
                if(seat[j] == 1) {
                    rl = Math.min(rl, j - r);
                    r = j;
                }
            }

            ans = Math.max(ans, Math.min(ll, rl));
        }

        System.out.println(ans);
    }
}