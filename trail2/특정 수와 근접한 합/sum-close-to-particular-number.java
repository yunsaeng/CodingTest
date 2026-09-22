import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int s = sc.nextInt();
        int[] arr = new int[n];
        int sum = 0;
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            arr[i] = num;
            sum += num;
        }
       
       int result = Integer.MAX_VALUE;
       for(int i = 0; i < n; i++) {
        for(int j = i+1; j < n; j++) {
            int temp = sum - (arr[i] + arr[j]);
            result = Math.min(result, Math.abs(s - temp));
        }
       }

       System.out.println(result);
    }
}