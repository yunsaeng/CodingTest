import java.util.Scanner;

public class Main {
    static final int MAX_TIME = 2000001
    ;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        
        int[] A = new int[MAX_TIME];
        int ATotalTime = 0;
        for (int i = 0; i < n; i++) {
            int t = sc.nextInt();
            int d = sc.next().charAt(0) == 'L' ? -1 : 1;
            
            for(int j = ATotalTime + 1; j <= ATotalTime + t; j++) {
                A[j] = A[j - 1] + d;
            }
            ATotalTime += t;
        }
        for(int t = ATotalTime + 1; t < MAX_TIME; t++) A[t] = A[t - 1];
        
        int[] B = new int[MAX_TIME];
        int BTotalTime = 0;
        for (int i = 0; i < m; i++) {
            int t = sc.nextInt();
            int d = sc.next().charAt(0) == 'L' ? -1 : 1;
            for(int j = BTotalTime + 1; j <= BTotalTime + t; j++) {
                B[j] = B[j - 1] + d;
            }
            BTotalTime += t;
        }
        for(int t = BTotalTime + 1; t < MAX_TIME; t++) B[t] = B[t - 1];

        int cnt = 0;
        for(int t = 1; t <= Math.max(ATotalTime, BTotalTime); t++) {
            if(A[t - 1] != B[t - 1] && A[t] == B[t]) cnt++;
        }
        System.out.println(cnt);
    }
}