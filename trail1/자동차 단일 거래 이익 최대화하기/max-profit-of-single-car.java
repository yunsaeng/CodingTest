import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        for(int i = 0; i < N; i++) arr[i] = sc.nextInt();

        int result = 0;
        for(int i = 1; i < N; i++) {
            for(int j = 0; j < i; j++) {
                int diff = arr[i] - arr[j];
                if(result < diff) result = diff;
            }
        }
        System.out.println(result);
    }
}