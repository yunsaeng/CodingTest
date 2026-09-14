import java.util.Scanner;
public class Main {
    public static boolean isPrime(int n) {
        if(n == 1) return false;
        if(n == 2) return true;
        if(n % 2 == 0) return false;
        for(int i = 3; i * i <= n; i++) {
            if(n % i == 0) return false;
        }
        return true;
    }

    public static boolean isEvenSum(int n) {
        int sum = 0;
        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum % 2 == 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        int cnt = 0;
        for(int n = a; n <= b; n++) {
            if(isPrime(n) && isEvenSum(n)) cnt++;
        }
        System.out.println(cnt);
    }
}