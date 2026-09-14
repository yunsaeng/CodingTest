import java.util.Scanner;
public class Main {
    public static boolean isMagicNumber(int n) {
        return !(n % 2 == 0 || n % 10 == 5 || (n % 3 == 0 && n % 9 != 0));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        int cnt = 0;
        for(int n = a; n <= b; n++) if(isMagicNumber(n)) cnt++;
        System.out.println(cnt);
    }
}