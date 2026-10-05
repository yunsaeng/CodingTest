import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];
        int[] c = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
            b[i] = sc.nextInt();
            c[i] = sc.nextInt();
        }
        
        int ans = Integer.MIN_VALUE;
        for(int i = 1; i <= 3; i++) {
            int[] stone = new int[4];
            stone[i] = 1;

            int score = 0;

            for(int j = 0; j < n; j++) {
                int temp = stone[a[j]];
                stone[a[j]] = stone[b[j]];
                stone[b[j]] = temp;

                if(stone[c[j]] == 1) score++;
            }

            ans = Math.max(ans, score);
        }

        System.out.println(ans);
    }
}