import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int sum = 0;
        for(int i = 0; i < N; i++) {
            int n = sc.nextInt();
            if(n % 2 == 1 && n % 3 == 0) sum += n;
        }
        System.out.println(sum);
    }
}