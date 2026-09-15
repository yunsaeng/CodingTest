import java.util.Scanner;
public class Main {
    public static int F(int n) {
        if(n == 1) return 2;
        if(n == 2) return 4;

        return (F(n - 2) * F(n - 1)) % 100;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(F(n));
    }
}