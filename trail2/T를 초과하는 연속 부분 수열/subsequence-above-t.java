import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int t = sc.nextInt();
        int[] arr = new int[n];
        int cnt = 0, max = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            if(arr[i] <= t) {
                max = Math.max(max, cnt);
                cnt = 0;
            } else cnt++;
        }
        max = Math.max(max, cnt);
        System.out.println(max);
    }
}