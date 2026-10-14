import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int ans = Integer.MAX_VALUE;
        for(int min = 0; min <= 10000; min++) {
            int max = Math.min(min + k, 10000);
            int temp = 0;
            for(int i = 0; i < n; i++) {
                if(arr[i] < min) temp += min - arr[i];
                if(arr[i] > max) temp += arr[i] - max;
            }

            ans = Math.min(ans, temp);
        }

        System.out.println(ans);
    }
}