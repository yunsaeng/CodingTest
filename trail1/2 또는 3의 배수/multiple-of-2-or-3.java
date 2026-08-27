import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i = 1; i <= N; i++) System.out.printf("%d ", i % 2 == 0 || i % 3 == 0 ? 1 : 0);
    }
}