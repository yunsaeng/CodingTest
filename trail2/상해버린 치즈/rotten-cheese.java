import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int D = sc.nextInt();
        int S = sc.nextInt();

        int[] eatPerson = new int[D];
        int[] eatCheese = new int[D];
        int[] eatTime = new int[D];
        for (int i = 0; i < D; i++) {
            eatPerson[i] = sc.nextInt();
            eatCheese[i] = sc.nextInt();
            eatTime[i] = sc.nextInt();
        }

        int[] sickPerson = new int[S];
        int[] sickTime = new int[S];
        for (int i = 0; i < S; i++) {
            sickPerson[i] = sc.nextInt();
            sickTime[i] = sc.nextInt();
        }

        boolean[] spoiledCheese = new boolean[M + 1];
        for(int cheese = 1; cheese <= M; cheese++) {
            boolean isValid = true;
            for(int i = 0; i < S; i++) {
                int j = 0;
                for(; j < D; j++) {
                    if(eatCheese[j] != cheese) continue;
                    if(sickPerson[i] != eatPerson[j]) continue;
                    if(sickTime[i] <= eatTime[j]) continue;
                    break;
                }
                if(j == D) {
                    isValid = false;
                    break;
                }
            }
            if(isValid) spoiledCheese[cheese] = true;
        }

        int ans = 0;
        for(int i = 1; i <= M; i++) {
            if(!spoiledCheese[i]) continue;

            boolean[] dangerousPerson = new boolean[N + 1];
            for(int j = 0; j < D; j++) {
                if(eatCheese[j] != i) continue;
                dangerousPerson[eatPerson[j]] = true;
            }

            int cnt = 0;
            for(int j = 1; j <= N; j++) {
                if(dangerousPerson[j]) cnt++;
            }

            ans = Math.max(ans, cnt);
        }

        System.out.println(ans);
    }
}