import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cnt = 0;
        int sum = 0;
        while(true) {
            int n = sc.nextInt();
            if(n < 20 || n >= 30) break;
            cnt++;
            sum+=n;
        }
        System.out.printf("%.2f", (double)sum / cnt);
    }
}