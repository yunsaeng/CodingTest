import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        for(int i = 0; i < N; i++) {
            int A = sc.nextInt();
            int B = sc.nextInt();

            int total = 0;
            for(int j = A; j <= B; j++) {
                if(j % 2 != 0) continue;
                total += j;
            }
            System.out.println(total);
        }
    }
}