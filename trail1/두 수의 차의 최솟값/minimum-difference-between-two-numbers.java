import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] arr = new int[N];
        for(int i = 0; i < N; i++) arr[i] = sc.nextInt();

        int result = Integer.MAX_VALUE;
        
        for(int i = 1; i < N; i++) {
            result = Math.min(result, arr[i] - arr[i-1]);
        }
        
        System.out.println(result);
    }
}