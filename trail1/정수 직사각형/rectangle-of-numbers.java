import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(), M = sc.nextInt(), cnt = 1;
        int[][] arr = new int[N][M];
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < M; j++) {
                arr[i][j] = cnt++;
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}