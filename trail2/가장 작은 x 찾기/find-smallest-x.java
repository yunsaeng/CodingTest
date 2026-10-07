import java.util.Scanner;

public class Main {
    public static final int MAX_N = 10;
    public static final int MAX_NUM = 10000;

    public static int n;
    public static int[] a = new int[MAX_N];
    public static int[] b = new int[MAX_N];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
            b[i] = sc.nextInt();
        }
        
        int ans = MAX_NUM;
        for(int x = MAX_NUM; x >= 0; x--) {
            int num = x;
            boolean possible = true;

            for(int j = 0; j < n; j++) {
                num *= 2;

                if(num >= a[j] && num <= b[j]) continue;

                possible = false;
                break;
            }

            if(possible) ans = x;
        }

        System.out.println(ans);
    }
}