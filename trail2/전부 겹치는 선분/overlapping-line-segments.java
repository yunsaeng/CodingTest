import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] x1 = new int[n];
        int[] x2 = new int[n];
        for (int i = 0; i < n; i++) {
            x1[i] = sc.nextInt();
            x2[i] = sc.nextInt();
        }

        int left = x1[0];
        int right = x2[0];

        for(int i = 1; i < n; i++) {
            if(left > x2[i] || right < x1[i]) {
                System.out.println("No");
                return;
            } else {
                left = Math.max(left, x1[i]);
                right = Math.min(right, x2[i]);
            }
        }

        System.out.print("Yes");
    }
}