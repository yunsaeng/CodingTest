import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        
        for(int i = 1; i <= N; i++) {
            int start = 9 + i * 2;
            for(int j = 0; j < N; j++) {
                System.out.print((start + j * 2) + " ");
            }
            System.out.println();
        }
    }
}