import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt(), w = sc.nextInt();
        int b = (10000 * w) / (h * h);
        System.out.println(b);
        if(b >= 25) System.out.println("Obesity");
    }
}