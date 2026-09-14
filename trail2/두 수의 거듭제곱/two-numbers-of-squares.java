import java.util.Scanner;

public class Main {
    public static int pow(int a, int b) {
        int prod = 1;
        for(int i = 1; i <= b; i++) prod *= a;
        return prod;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(pow(a, b));
    }
}