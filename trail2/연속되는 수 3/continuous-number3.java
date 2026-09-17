import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        int cnt = 1, max = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            if(i == 0 || arr[i] * arr[i - 1] < 0) {
                max = Math.max(max, cnt);
                cnt = 1;
            } else if(arr[i] * arr[i - 1] > 0) cnt++;
        }
        max = Math.max(max, cnt);
        System.out.println(max);
    }
}