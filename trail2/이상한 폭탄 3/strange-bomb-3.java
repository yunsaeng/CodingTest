import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] bombs = new int[n];
        for (int i = 0; i < n; i++)
            bombs[i] = sc.nextInt();
        
        int[] boom = new int[1000001];
        boolean[] visited = new boolean[n];
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                if(bombs[i] == bombs[j] && j - i <= k) {
                    if(!visited[i]) boom[bombs[i]]++;
                    if(!visited[j]) boom[bombs[j]]++;

                    visited[i] = true;
                    visited[j] = true;
                }
            }
        }

        int ans = 0;
        int cnt = 0;
        for(int i = 1000000; i >= 0; i--) {
            if(cnt < boom[i]) {
                cnt = boom[i];
                ans = i;
            }
        }

        System.out.println(ans);
    }
}