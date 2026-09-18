import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();
        int P = sc.nextInt();
        int T = sc.nextInt();
        int[][] shakes = new int[T][3];
        for (int t = 0; t < T; t++) {
            shakes[t][0] = sc.nextInt();
            shakes[t][1] = sc.nextInt();
            shakes[t][2] = sc.nextInt();
        }
        Arrays.sort(shakes, (a, b) -> a[0] - b[0]);

        boolean[] isInfection = new boolean[N + 1];
        int[] infectionCount = new int[N + 1];
        isInfection[P] = true;
        infectionCount[P] = K;
        for(int t = 0; t < T; t++) {
            int u = shakes[t][1];
            int v = shakes[t][2];

            if(!isInfection[u] && !isInfection[v]) continue;

            boolean newInfection = false;
            if(isInfection[u] && infectionCount[u] > 0) {
                if(!isInfection[v]) {
                    isInfection[v] = true;
                    infectionCount[v] = K;
                    newInfection = true;
                }
                infectionCount[u]--;
            }

            if(isInfection[v] && infectionCount[v] > 0 && !newInfection) {
                if(!isInfection[u]) {
                    isInfection[u] = true;
                    infectionCount[u] = K;
                }
                infectionCount[v]--;
            }
        }

        for(int i = 1; i <= N; i++) System.out.print(isInfection[i] ? 1 : 0);
    }
}