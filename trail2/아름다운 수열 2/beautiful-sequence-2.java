import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();

        int[] A = new int[N];
        for (int i = 0; i < N; i++)
            A[i] = sc.nextInt();
        
        int[] B = new int[M];
        for (int i = 0; i < M; i++)
            B[i] = sc.nextInt();
        
        int cnt = 0;
        for(int i = 0; i <= N - M; i++) {
            int exist = 0;
            boolean[] visited = new boolean[M];
            for(int j = i; j < i + M; j++) {
                for(int k = 0; k < M; k++) {
                    if(A[j] == B[k] && !visited[k]) {
                        exist++;
                        visited[k] = true;
                        break;
                    }
                }
            }
            if(exist == M) cnt++;
        }

        System.out.println(cnt);
    }
}