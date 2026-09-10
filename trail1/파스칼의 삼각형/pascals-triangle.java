import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[][] arr = new int[N][N];
        for(int i = 0; i < N; i++) {
            arr[i][0] = 1;
            arr[i][i] = 1;
        }

        for(int r = 2; r < N; r++) {
            for(int c = 1; c < r; c++) {
                arr[r][c] = arr[r-1][c] + arr[r-1][c-1];
            }
        }

        for(int r = 0; r < N; r++) {
            for(int c = 0; c <= r; c++) {
                System.out.print(arr[r][c] + " ");
            }
            System.out.println();
        }
    }
}