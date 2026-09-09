import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(), M = sc.nextInt();
        
        int[][] arr = new int[N][M];
        int cnt = 0;
        for(int i = 0; i < M; i++) {
            for(int j = 0; j < N; j++) {
                if(i % 2 == 0) arr[j][i] = cnt++;
                else arr[N - 1 - j][i] = cnt++;
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