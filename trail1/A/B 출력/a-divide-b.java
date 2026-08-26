import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        System.out.print((A / B) + ".");
        A = (A % B) * 10;
        for(int i = 1; i < 21; i++) {
            System.out.print(A / B);
           A = (A % B) * 10;
        }
    }
}