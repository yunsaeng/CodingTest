import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] x1 = new int[n];
        int[] x2 = new int[n];
        for (int i = 0; i < n; i++) {
            x1[i] = sc.nextInt();
            x2[i] = sc.nextInt();
        }
        
        int ans = 0;
        for(int i = 0; i < n; i++) {
            boolean isCross = false;
            for(int j = 0; j < n; j++) {
                if(i == j) continue;
                if((x1[i] <= x1[j] && x2[i] >= x2[j]) || (x1[i] >= x1[j] && x2[i] <= x2[j])) {
                    isCross = true;
                    break;
                }
            }
            if(!isCross) ans++;
        }

        System.out.println(ans);
    }
}