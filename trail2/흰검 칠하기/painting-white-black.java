import java.util.Scanner;

public class Main {
    static final int OFFSET = 100000;
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int cur = OFFSET;
        
        int[] whiteCount = new int[OFFSET * 2 + 1];
        int[] blackCount = new int[OFFSET * 2 + 1];
        boolean[] lastColor = new boolean[OFFSET * 2 + 1];
        
        for (int i = 0; i < N; i++) {
            int x = sc.nextInt();
            char dir = sc.next().charAt(0);
            
            if(dir == 'L') {
                for(int pos = cur - x + 1; pos <= cur; pos++) {
                    whiteCount[pos]++;
                    lastColor[pos] = true;
                }
                cur = cur - x + 1;
            } else {
                for(int pos = cur; pos < cur + x; pos++) {
                    blackCount[pos]++;
                    lastColor[pos] = false;
                }
                cur = cur + x - 1;
            }
        }

        int white = 0, black = 0, gray = 0;
        for(int i = 0; i <= OFFSET * 2; i++) {
            if(whiteCount[i] == 0 && blackCount[i] == 0) continue; 
            
            if(whiteCount[i] >= 2 && blackCount[i] >= 2) gray++;
            else {
                if(lastColor[i]) white++;
                else black++;
            }
        }
        System.out.printf("%d %d %d", white, black, gray);
    }
}