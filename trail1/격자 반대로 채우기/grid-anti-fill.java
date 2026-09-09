import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        
        int[][] arr = new int[N][N];
        int cnt = 1, cur = 1;
        for(int i = N - 1; i >= 0; i--) {
            for(int j = N - 1; j >= 0; j--) {
                if(cur % 2 == 1) arr[j][i] = cnt++;
                else arr[N - 1 - j][i] = cnt++;
            }
            cur++;
        }

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}