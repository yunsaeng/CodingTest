import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();

        int max = Integer.MIN_VALUE;    
        for(int i = 0; i <= n - k; i++) {
            int sum = 0;
            for(int j = 0; j < k; j++) {
                sum += arr[i+j];
            }
            max = Math.max(max, sum);
        }

        System.out.println(max);
    }
}