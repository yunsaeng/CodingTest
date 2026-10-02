import java.util.Scanner;
public class Main {
    public static int digitSum(int n) {
        int sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        int ans = Integer.MIN_VALUE;
        for(int n = x; n <= y; n++) ans = Math.max(ans, digitSum(n));

        System.out.println(ans);
    }
}