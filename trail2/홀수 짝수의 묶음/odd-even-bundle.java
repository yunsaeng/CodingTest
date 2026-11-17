import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int odd = 0, even = 0;
        for (int i = 0; i < N; i++) {
            int num = sc.nextInt();

            if(num % 2 == 0) even++;
            else odd++;
        }

        int ans = 0;
        for(int k = 1; k <= N; k++) {
            int oddPair = k / 2;
            int evenPair = (k + 1) / 2;

            if(odd < oddPair) continue;
            if((odd - oddPair) % 2 != 0) continue;
            if(even + (odd - oddPair) / 2 < evenPair) continue;

            ans = k;
        }

        System.out.println(ans);
    }
}