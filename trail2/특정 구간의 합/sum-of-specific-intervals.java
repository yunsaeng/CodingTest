import java.util.Scanner;
public class Main {
    public static int[] arr;
    public static int calc(int a1, int a2) {
        int sum = 0;
        for(int i = a1; i <= a2; i++) {
            sum += arr[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        arr = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < m; i++) {
            int a1 = sc.nextInt();
            int a2 = sc.nextInt();
            System.out.println(calc(a1, a2));
        }
    }
}