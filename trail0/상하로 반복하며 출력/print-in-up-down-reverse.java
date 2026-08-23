import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] row = new int[N];
        int[][] arr = new int[N][N];

        int cnt = 1;
        for(int i = 0; i < N; i++) row[i] = cnt++;

        for(int i = 0; i < N; i++) {
            if(i % 2 == 0) {
                for(int j = 0; j < N; j++) {
                    arr[j][i] = row[j];
                }
            } else {
                for(int j = N - 1; j >= 0; j--) {
                    arr[j][i] = row[N - 1 - j];
                }
            }
        }

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                System.out.print(arr[i][j]);
            }
            System.out.println();
        }
    }
}