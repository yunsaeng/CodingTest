import java.util.Scanner;

public class Main {
    public static int getDir(char a) {
        if(a == 'U')
            return 0;
        else if(a == 'R')
            return 1;
        else if(a == 'D')
            return 2;
        else
            return 3;
    }

    public static boolean inRange(int r, int c, int n) {
        return (r >= 1 && r <= n && c >= 1 && c <= n);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int T = sc.nextInt();
        int R = sc.nextInt();
        int C = sc.nextInt();
        char D = sc.next().charAt(0);
        
        int[] dirR = {-1, 0, 1, 0};
        int[] dirC = {0, 1, 0, -1};
        int dirIdx = getDir(D);

        for(int t = 0; t < T; t++) {
            int nr = R + dirR[dirIdx];
            int nc = C + dirC[dirIdx];

            if(inRange(nr, nc, N)) {
                R = nr;
                C = nc;
            } else dirIdx = (dirIdx + 2) % 4;
        }

        System.out.println(R + " " + C);
    }
}
    

