import java.util.Scanner;

public class Main {
    public static final int MAX_N = 100;

    public static int n;
    public static int k;
    public static int[] arr = new int[MAX_N];

    public static boolean isPossible(int maxVal) {
        int[] availableIndices = new int[n];
        int cnt = 0;

        for(int i = 0; i < n; i++) {
            if(arr[i] <= maxVal) availableIndices[cnt++] = i;
        }

        for(int i = 1; i < cnt; i++) {
            int dist = availableIndices[i] - availableIndices[i - 1];
            if(dist > k) return false;
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        k = sc.nextInt();
        
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int ans = MAX_N;
        for(int i = MAX_N; i >= Math.max(arr[0], arr[n - 1]); i--) {
            if(isPossible(i)) ans = i;
        }

        System.out.println(ans);
    }
}