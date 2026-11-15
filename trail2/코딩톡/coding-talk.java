import java.util.Scanner;

public class Main {
    public static char[] alpha = {
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    };

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();
        int p = sc.nextInt();

        char[] c = new char[M];
        int[] u = new int[M];
        for (int i = 0; i < M; i++) {
            c[i] = sc.next().charAt(0);
            u[i] = sc.nextInt();
        }
        
        if(u[p - 1] == 0) return;

        int s = p - 1;
        while (s > 0 && u[s - 1] == u[p - 1]) s--;

        boolean[] read = new boolean[N];
        for(int i = s; i < M; i++) read[c[i] - 'A'] = true;
        
        for(int i = 0; i < N; i++) {
            if(!read[i]) System.out.print(alpha[i] + " ");
        }
    }
}