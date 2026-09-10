import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(), M = sc.nextInt();
        int[][] arr = new int[N][N];
        for(int i = 0; i < M; i++) {
            int r = sc.nextInt(), c = sc.nextInt();
            arr[r - 1][c - 1] = 1;
        }

        for(int r = 0; r < N; r++) {
            for(int c = 0; c < N; c++) {
                System.out.print(arr[r][c] + " ");
            }
            System.out.println();
        }
    }
}