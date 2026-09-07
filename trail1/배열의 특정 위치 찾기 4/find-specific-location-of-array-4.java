import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0, cnt = 0;

        for(int i = 0; i < 10; i++) {
            int num = sc.nextInt();
            if(num == 0) break;
            if(num % 2 == 0) {
                sum += num;
                cnt++;
            }
        }
        System.out.printf("%d %d", cnt, sum);
    }
}