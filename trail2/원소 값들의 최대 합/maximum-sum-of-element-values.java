import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] arr = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int ans = 0;
        for(int i = 1; i <= n; i++) {
            int temp = 0;
            int idx = i;
            for(int j = 0; j < m; j++) {
                temp += arr[idx];
                idx = arr[idx];
            }
            ans = Math.max(ans, temp);
        }

        System.out.println(ans);
    }
}