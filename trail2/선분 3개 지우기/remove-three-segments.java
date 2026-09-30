import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
            b[i] = sc.nextInt();
        }

        int ans = 0;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                for(int k = j + 1; k < n; k++) {
                    int[] line = new int[101];
                    boolean possible = true;
                    for(int m = 0; m < n; m++) {
                        if(m == i || m == j || m == k) continue;
                        for(int o = a[m]; o <= b[m]; o++) {
                            line[o]++;
                            if(line[o] > 1) {
                                possible = false;
                                break;
                            }
                        }
                        if(!possible) break;
                    }
                    if(possible) ans++;
                }
            }
        }

        System.out.println(ans);
    }
}