import java.util.Scanner;

public class Main {
    public static int MAX_TIME = 1000;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] A = new int[N];
        int[] B = new int[N];
        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
            B[i] = sc.nextInt();
        }

        int ans = Integer.MIN_VALUE;
        for(int i = 0; i < N; i++) {
            int[] timeTable = new int[MAX_TIME];
            
            for(int j = 0; j < N; j++) {
                if(i == j) continue;
                for(int k = A[j]; k < B[j]; k++) timeTable[k]++;
            }

            int time = 0;
            for(int t = 0; t < MAX_TIME; t++) {
                if(timeTable[t] > 0) time++;
            }

            ans = Math.max(ans, time);
        }
        
        System.out.println(ans);
    }
}