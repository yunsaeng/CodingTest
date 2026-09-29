import java.util.Scanner;
public class Main {
    public static int[] ability = new int[6];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for(int i = 0; i < 6; i++) ability[i] = sc.nextInt();
        
        int ans = Integer.MAX_VALUE;
        for(int i = 0; i < 6; i++) {
            for(int j = i + 1; j < 6; j++) {
                int team1 = ability[i] + ability[j];

                for(int k = 0; k < 6; k++) {
                    if(k == i || k == j) continue;

                    for(int l = k + 1; l < 6; l++) {
                        if(l == i || l == j) continue;

                        int team2 = ability[k] + ability[l];

                        int team3 = 0;
                        for(int m = 0; m < 6; m++) {
                            if(m == i || m == j || m == k || m == l) continue;

                            team3 += ability[m];
                        }
                        int max = Math.max(Math.max(team1, team2), team3);
                        int min = Math.min(Math.min(team1, team2), team3);
                        ans = Math.min(ans, max - min);
                    }
                }
            }
        }

        System.out.println(ans);
    }
}