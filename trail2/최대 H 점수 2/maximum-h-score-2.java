import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int l = sc.nextInt();
        int[] a = new int[n];
        for(int i = 0; i < n; i++)
            a[i] = sc.nextInt();
        Arrays.sort(a);
        
        int ans = 0;
        for(int h = 0; h <= 100; h++) {
            int cnt = 0;
            int useL = l;
            for(int i = 0; i < n; i++) {
                if(a[i] >= h) cnt++;
                else if(a[i] + 1 == h && useL > 0) {
                    useL--;
                    cnt++;
                }
            }

            if(cnt >= h) ans = h;
        }

        System.out.println(ans);
    }
}