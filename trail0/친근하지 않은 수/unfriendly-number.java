import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        int result = 0;
        for(int i = 1; i <= N; i++) {
            if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0) continue;

            result++;
        }

        System.out.println(result);
    }
}