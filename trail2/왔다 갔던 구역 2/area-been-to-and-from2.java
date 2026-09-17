import java.util.Scanner;

public class Main {
    static final int OFFSET = 1000;
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int cur = OFFSET;
        int[] line = new int[2001];
        
        for (int i = 0; i < N; i++) {
            int x = sc.nextInt();
            char dir = sc.next().charAt(0);
            
            if(dir == 'L') {
                for(int pos = cur - x; pos < cur; pos++) line[pos]++;
                cur -= x;
            } else {
                for(int pos = cur; pos < cur + x; pos++) line[pos]++;
                cur += x;
            }
        }

        int cnt = 0;
        for(int i = 0; i < 2001; i++) if(line[i] >= 2) cnt++;
        System.out.println(cnt);
    }
}