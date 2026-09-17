import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] x = new int[101];
        for (int i = 0; i < n; i++) {
            int left = sc.nextInt();
            int right = sc.nextInt();
            for(int cur = left; cur <= right; cur++) x[cur]++;
        }
        
        int max = 0;
        for(int i = 0; i < x.length; i++) max = Math.max(max, x[i]);
        System.out.println(max);
    }
}