import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        
        for(int i = 1; i <= N; i++) {
            int A = sc.nextInt(), B = sc.nextInt();
            int sum = 0;
            for(int j = A; j <= B; j++) {
                if(j % 2 == 0) sum += j;
            }
            System.out.println(sum);
        }
    }
}