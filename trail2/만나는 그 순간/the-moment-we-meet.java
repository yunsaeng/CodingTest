import java.util.Scanner;

public class Main {
    static final int MAX_TIME = 1000001;
    static int[] A = new int[MAX_TIME];
    static int[] B = new int[MAX_TIME];

    static int fillPosition(int[] pos, int count, Scanner sc) {
        int time = 1;
        int lastTime = 0;
        
        for (int i = 0; i < count; i++) {
            int d = sc.next().charAt(0) == 'R' ? 1 : -1;
            int t = sc.nextInt();
            lastTime += t;
            
            for(; time <= lastTime; time++) {
                pos[time] = pos[time - 1] + d;
            }
        }
        
        for(int i = lastTime + 1; i < MAX_TIME; i++) {
            pos[i] = pos[i - 1];
        }
        
        return lastTime;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();

        int maxTimeA = fillPosition(A, n, sc);
        int maxTimeB = fillPosition(B, m, sc);
        
        int maxTime = Math.max(maxTimeA, maxTimeB);

        int result = -1;
        for(int i = 1; i <= maxTime; i++) {
            if(A[i] == B[i]) {
                result = i;
                break;
            }
        }

        System.out.println(result);
    }
}