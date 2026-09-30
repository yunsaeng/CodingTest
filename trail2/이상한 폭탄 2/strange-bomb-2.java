import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] bombs = new int[n];
        for (int i = 0; i < n; i++) {
            bombs[i] = sc.nextInt();
        }
        
        boolean[] isBomb = new boolean[1001];
        
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n && j - i <= k; j++) {
                if(bombs[i] == bombs[j]) {
                    isBomb[bombs[i]] = true;
                }
            }
        }

        for(int i = 1000; i >= 0; i--) {
            if(isBomb[i]) {
                System.out.println(i);
                return;
            }
        }

        System.out.println(-1);
    }
}