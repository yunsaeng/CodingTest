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
        
        boolean possible = true;

        for(int i = 0; i < n; i++) {
            possible = true;
            int left = 1;
            int right = 100;

            for(int j = 0; j < n; j++) {
                if(i == j) continue;

                if(left > x2[j] || right < x1[j]) {
                    possible = false;
                    break;
                } else {
                    left = Math.max(left, x1[j]);
                    right = Math.min(right, x2[j]);
                }
            }

            if(possible) break;
        }

        System.out.println(possible ? "Yes" : "No");
    }
}