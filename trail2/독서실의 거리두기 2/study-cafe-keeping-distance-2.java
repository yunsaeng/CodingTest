import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        char[] seats = sc.next().toCharArray();
        
        int result = 0;
        for(int i = 0; i < N; i++) {
            if(seats[i] == '1') continue;
            seats[i] = '1';

            int minDist = N;
            int prev = -1;
            for(int j = 0; j < N; j++) {
                if(seats[j] == '1') {
                    if(prev == -1) prev = j;
                    else {
                        minDist = Math.min(minDist, j - prev);
                        prev = j;
                    }
                }
            }

            seats[i] = '0';
            result = Math.max(result, minDist);
        }

        System.out.println(result);
    }
}