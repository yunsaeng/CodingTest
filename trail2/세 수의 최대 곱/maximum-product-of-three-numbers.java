import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean hasZero = false;
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            if(arr[i] == 0) hasZero = true;
        }
        Arrays.sort(arr);

        int result = hasZero ? 0 : Integer.MIN_VALUE;
        result = Math.max(result, arr[0] * arr[1] * arr[2]);
        result = Math.max(result, arr[0] * arr[1] * arr[n - 1]);
        result = Math.max(result, arr[0] * arr[n - 2] * arr[n - 1]);
        result = Math.max(result, arr[n - 3] * arr[n - 2] * arr[n - 1]);

        System.out.println(result);
    }
}