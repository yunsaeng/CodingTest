import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        int sum = 0;
        int cnt = 0;
        for(int i = A; i <= B; i++) {
            if(i % 5 == 0 || i % 7 == 0) {
                cnt++;
                sum += i;
            }
        }
        System.out.printf("%d %.1f", sum, (double)sum / cnt);
    }
}