import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++) {
            arr[i] *= 2;

            for(int j = 0; j < n; j++) {
                int[] remainingArr = new int[n - 1];
                int idx = 0;
                for(int k = 0; k < n; k++) {
                    if(j == k) continue;
                    remainingArr[idx++] = arr[k];
                }

                int diff = 0;
                for(int k = 0; k < n - 2; k++) diff += Math.abs(remainingArr[k + 1] - remainingArr[k]);

                ans = Math.min(ans, diff);
            }

            arr[i] /= 2;
        }

        System.out.println(ans);
    }
}