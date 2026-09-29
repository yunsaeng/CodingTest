import java.util.Scanner;
public class Main {
    public static int[] ability = new int[6];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for(int i = 0; i < 5; i++) ability[i] = sc.nextInt();
        
        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < 5; i++) {
            for(int j = i + 1; j < 5; j++) {
                int team1 = ability[i] + ability[j];

                for(int k = 0; k < 5; k++) {
                    if(k == i || k == j) continue;

                    for(int l = k + 1; l < 5; l++) {
                        if(l == i || l == j) continue;

                        int team2 = ability[k] + ability[l];

                        int team3 = 0;
                        for(int m = 0; m < 5; m++) {
                            if(m == i || m == j || m == k || m == l) continue;

                            team3 += ability[m];
                        }

                        if(team1 == team2 || team2 == team3 || team3 == team1) continue;

                        int max = Math.max(Math.max(team1, team2), team3);
                        int min = Math.min(Math.min(team1, team2), team3);
                        ans = Math.min(ans, max - min);
                    }
                }
            }
        }

        System.out.println(ans == Integer.MAX_VALUE ? -1 : ans);
    }
}