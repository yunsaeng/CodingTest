import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        if(A > 0) {
            for(int i = 0; i < B; i++) {
                System.out.print(A);
            }
        } else System.out.print(0);
    }
}