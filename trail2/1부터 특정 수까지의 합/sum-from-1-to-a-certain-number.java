import java.util.Scanner;

public class Main {
    public static int result(int N) {
        int sum = 0;
        for(int i = 1; i <= N; i++) sum += i;
        return sum / 10;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(result(sc.nextInt()));
    }
}