import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt(), C = sc.nextInt();
        int sum = A + B + C;
        int aver = sum / 3;
        System.out.println(sum);
        System.out.println(aver);
    }
}