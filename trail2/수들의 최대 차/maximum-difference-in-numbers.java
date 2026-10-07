import java.util.Scanner;

public class Main {
    public static final int MAX_N = 1000;
    public static final int MAX_K = 10000;

    public static int n;
    public static int k;
    public static int[] arr = new int[MAX_N];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        k = sc.nextInt();

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int ans = 0;

        for(int x = 0; x <= MAX_K - k; x++) {
            int cnt = 0;

            for(int i = 0; i < n; i++) {
                if(arr[i] >= x && arr[i] <= x + k) cnt++;
            }

            ans = Math.max(ans, cnt);
        }

        System.out.println(ans);
    }
}