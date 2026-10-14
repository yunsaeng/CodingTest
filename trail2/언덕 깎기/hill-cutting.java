import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
       
       int ans = Integer.MAX_VALUE;
       for(int min = 0; min <= 100; min++) {
        for(int max = min; max <= Math.min(min + 17, 100); max++) {
            int temp = 0;
            for(int i = 0; i < n; i++) {
                int diff = 0;
                if(arr[i] < min) diff = min - arr[i];
                if(arr[i] > max) diff = arr[i] - max;
                temp += diff * diff;
            }
            ans = Math.min(ans, temp);
        }
       }

       System.out.println(ans);
    }
}