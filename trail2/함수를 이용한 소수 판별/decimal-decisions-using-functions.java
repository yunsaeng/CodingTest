import java.util.Scanner;
public class Main {
    public static boolean isMagicNumber(int n) {
        int cnt = 0;
        for(int i = 1; i <= n; i++) if(n % i == 0) cnt++;
        return cnt == 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = 0;
        for(int n = a; n <= b; n++) if(isMagicNumber(n)) sum += n;;
        System.out.println(sum);
    }
}