import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String input = sc.next();
        int[] seat = new int[n];
        for(int i = 0; i < n; i++) seat[i] = input.charAt(i) - '0';

        int ans = 0;
        for(int len = n - 1; len >= 0; len--) {
            boolean isPossible = false;

            for(int i = 0; i < n; i++) {
                if(seat[i] == 1) continue;

                seat[i] = 1;

                for(int j = i + 1; j < n; j++) {
                    if(seat[j] == 1) continue;
                    
                    seat[j] = 1;

                    int lastIdx = -1;
                    boolean can = true;
                    for(int k = 0; k < n; k++) {
                        if(seat[k] == 0) continue;

                        if(lastIdx != -1 && k - lastIdx < len) {
                            can = false;
                            break;
                        } 

                        lastIdx = k;
                    }

                    seat[j] = 0;

                    if(can) {
                        isPossible = true;
                        break;
                    }
                }

                seat[i] = 0;

                if(isPossible) break;
            }

            if(isPossible) {
                System.out.println(len);
                return;
            }
        }
    }
}