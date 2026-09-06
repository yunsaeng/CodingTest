import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        
        for(int i = 1; i <= N; i++) {
            int A = sc.nextInt(), B = sc.nextInt();
            int prod = 1;
            for(int j = A; j <= B; j++) prod *= j;
            System.out.println(prod);
        }
    }
}