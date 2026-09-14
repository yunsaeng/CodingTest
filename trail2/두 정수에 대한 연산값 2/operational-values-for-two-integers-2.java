import java.util.Scanner;

public class Main {
    public static int a;
    public static int b;

    public static void calc() {
        if(a > b) {
            a *= 2;
            b += 10;
        } else {
            a += 10;
            b *= 2;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        b = sc.nextInt();
        calc();
        System.out.println(a + " " + b);
    }
}