import java.util.Scanner;

public class Main {
    public static int[] ability = new int[6];

    public static int getDiff(int i, int j, int k) {
        int sum1 = ability[i] + ability[j] + ability[k];
        int sum2 = 0;
        for(int l = 0; l < 6; l++) sum2 += ability[l];
        sum2 -= sum1;
        return Math.abs(sum1 - sum2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);   
        for (int i = 0; i < 6; i++) {
            ability[i] = sc.nextInt();
        }
        
        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < 4; i++) {
            for(int j = i + 1; j < 5; j++) {
                for(int k = j + 1; k < 6; k++) {
                    ans = Math.min(ans, getDiff(i, j, k));
                }
            }
        }

        System.out.println(ans);
    }
}