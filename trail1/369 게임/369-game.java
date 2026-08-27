import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i = 1; i <= N; i++) {
            String s = String.valueOf(i);
            System.out.printf("%d ", i % 3 == 0 || s.contains("3") || s.contains("6") || s.contains("9") ? 0 : i);
        }
    }
}