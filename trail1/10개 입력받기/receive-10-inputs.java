import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0, cnt = 0;

        for(int i = 0; i < 10; i++) {
            int num = sc.nextInt();
            if(num == 0) break;
            sum += num;
            cnt++;
        }
        System.out.printf("%d %.1f", sum, (double)sum / cnt);
    }
}