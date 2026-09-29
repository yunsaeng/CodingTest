import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        
        double[][] aver = new double[n][n];
        for(int l = 1; l <= n; l++) {
            for(int i = 0; i <= n - l; i++) {
                for(int j = i; j < i + l; j++) {
                    aver[i][i + l - 1] += arr[j];
                }
                aver[i][i + l - 1] /= l;
            }
        }

        int ans = 0;
        for(int l = 1; l <= n; l++) {
            for(int i = 0; i <= n - l; i++) {
                for(int j = i; j < i + l; j++) {
                    if(aver[i][i + l - 1] == arr[j]) {
                        ans++;
                        break;
                    }
                }
            }
        }

        System.out.println(ans);
    }
}