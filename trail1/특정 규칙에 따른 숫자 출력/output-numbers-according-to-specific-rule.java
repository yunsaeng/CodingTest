import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int cnt = 1;

        for(int i = N; i >= 1; i--) {
            for(int j = N; j > i; j--) {
                System.out.print("  ");
            }
            for(int j = i; j >= 1; j--) {
                System.out.print(cnt + " ");
                cnt = cnt == 9 ? 1 : cnt + 1;
            }
            System.out.println();
        }
    }
}