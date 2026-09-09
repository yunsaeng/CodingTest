import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        for(int i = 0; i < N; i++) arr[i] = sc.nextInt();

        int idx = N;;
        while(idx > 0) {
            int max = 0, maxIdx = idx;
            for(int i = 0; i < idx; i++) {
                if(max < arr[i]) {
                    max = arr[i];
                    maxIdx = i;
                }
            }
            idx = maxIdx;
            System.out.print((idx + 1) + " ");
        }
    }
}