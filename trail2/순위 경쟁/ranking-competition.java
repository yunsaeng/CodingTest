import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] score = new int[3];
        int[] bit = {1, 2, 4};

        int prev = 7;
        int result = 0;

        for (int i = 0; i < n; i++) {
            char c = sc.next().charAt(0);
            int s = sc.nextInt();

            score[c - 'A'] += s;

            int max = Math.max(score[0], Math.max(score[1], score[2]));

            int cur = 0;
            for (int j = 0; j < 3; j++) {
                if (score[j] == max) cur |= bit[j];
            }

            if (cur != prev) {
                result++;
                prev = cur;
            }
        }

        System.out.println(result);
    }
}