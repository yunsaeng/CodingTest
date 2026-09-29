import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();
        
        int[] arr = new int[101];
        
        for (int i = 0; i < n; i++) {
            int candy = sc.nextInt();
            int position = sc.nextInt();
            arr[position] += candy;
        }
        
        int max = Integer.MIN_VALUE;
        for(int c = 0; c <= 100; c++) {
            int sum = 0;
            for(int pos = 0; pos <= 100; pos++) {
                if(Math.abs(c - pos) <= k) {
                    sum += arr[pos];
                }
            }
            max = Math.max(max, sum);
        }

        System.out.println(max);
    }
}