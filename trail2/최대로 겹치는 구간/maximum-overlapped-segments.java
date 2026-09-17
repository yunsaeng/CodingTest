import java.util.Scanner;

public class Main {
    static final int OFFSET = 100;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] x = new int[201];
        for (int i = 0; i < n; i++) {
            int left = sc.nextInt() + OFFSET;
            int right = sc.nextInt() + OFFSET;
            for(int cur = left; cur < right; cur++) x[cur]++;
        }
        
        int max = 0;
        for(int i = 0; i < x.length; i++) max = Math.max(max, x[i]);
        System.out.println(max);
    }
}