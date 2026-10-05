import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();
        
        int mult = Math.max(C / A, C / B);
        int ans = Integer.MIN_VALUE;
        for(int i = 0; i <= mult; i++) {
            int base = A * i;
            for(int j = 0; j <= mult; j++) {
                int temp = base + B * j;
                if(temp <= C) ans = Math.max(ans, temp);
            }
        }

        System.out.println(ans);
    }
}