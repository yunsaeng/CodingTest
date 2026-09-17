import java.util.Scanner;

public class Main {
    static final int OFFSET = 100000;
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int cur = OFFSET;
        
        int[] line = new int[OFFSET * 2 + 1];
        
        for (int i = 0; i < N; i++) {
            int x = sc.nextInt();
            char dir = sc.next().charAt(0);
            
            if(dir == 'L') {
                for(int pos = cur - x + 1; pos <= cur; pos++) line[pos] = 1;
                cur = cur - x + 1;
            } else {
                for(int pos = cur; pos < cur + x; pos++) line[pos] = 2;
                cur = cur + x - 1;
            }
        }

        int white = 0, black = 0;
        for(int i = 0; i <= OFFSET * 2; i++) {
            if(line[i] == 1) white++;
            else if(line[i] == 2) black++;
        }
        System.out.printf("%d %d", white, black);
    }
}