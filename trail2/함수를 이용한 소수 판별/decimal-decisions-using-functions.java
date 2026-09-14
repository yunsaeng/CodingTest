import java.util.Scanner;
public class Main {
    public static boolean isPrime(int n) {
        if(n <= 1) return false;
        if(n == 2) return true;
        if(n % 2 == 0) return false;
        for(int i = 3; i * i <= n; i += 2) {
            if(n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = 0;
        for(int n = a; n <= b; n++) if(isPrime(n)) sum += n;;
        System.out.println(sum);
    }
}