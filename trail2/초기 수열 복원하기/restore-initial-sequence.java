import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n - 1];
        for (int i = 0; i < n - 1; i++)
            a[i] = sc.nextInt();

        int[] ans = new int[n];

        for(int i = 1; i <= n; i++) {
            ans[0] = i;

            for(int j = 1; j < n; j++) {
                ans[j] = a[j - 1] - ans[j - 1];
            }

            boolean satisfied = true;
            boolean[] visited = new boolean[n + 1];
            for(int j = 0; j < n; j++) {
                if(ans[j] <= 0 || ans[j] > n) satisfied = false;
                else {
                    if(visited[ans[j]]) satisfied = false;
                    visited[ans[j]] = true;
                }
            }

            if(satisfied) {
                for(int j = 0; j < n; j++) {
                    System.out.print(ans[j] + " ");
                }
                return;
            }
        }
    }
}