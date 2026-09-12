import java.util.Scanner;

public class Main {
    public static void printRect(int N) {
        int cnt = 1;

        for(int r = 0; r < N; r++) {
            for(int c = 0; c < N; c++) {
                System.out.print(cnt + " ");
                cnt = cnt % 9 + 1;
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        printRect(N);
    }
}