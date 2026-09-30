import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        int n = sc.nextInt();
        int[][] arr = new int[k][n];
        for (int i = 0; i < k; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        int ans = 0;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= n; j++) {
                if(i == j) continue;
                
                int a = -1, b = -1;
                boolean possible = true;

                for(int p = 0; p < k; p++) {
                    for(int q = 0; q < n; q++) {
                        if(i == arr[p][q]) a = q;
                        if(j == arr[p][q]) b = q;
                    }
                    if(a > b) {
                        possible = false;
                        break;
                    }
                }

                if(possible) ans++;
            }
        }

        System.out.println(ans);
    }
}