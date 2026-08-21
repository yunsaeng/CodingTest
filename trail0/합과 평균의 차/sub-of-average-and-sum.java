import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();

        int sum = A + B + C;
        int aver = sum / 3;
        System.out.printf("%d\n%d\n%d", sum, aver, sum - aver);
    }
}