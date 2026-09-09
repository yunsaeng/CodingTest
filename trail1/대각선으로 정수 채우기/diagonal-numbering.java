import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(), M = sc.nextInt();
        
        int[][] arr = new int[N][M];
        int cnt = 1;
        for(int i = 0; i <= N + M - 2; i++) {
            for(int j = 0; j <= i; j++) {
                if(j < N && i - j < M) {
                    arr[j][i - j] = cnt++;
                }
            }
        }

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < M; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}