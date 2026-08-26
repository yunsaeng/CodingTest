import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String C = sc.next();
        int N = sc.nextInt();
        if(C.equals("A")) {
            for(int i = 1; i <= N; i++) {
                System.out.print(i + " ");
            }
        }
        if(C.equals("D")) {
            for(int i = N; i >= 1; i--) {
                System.out.print(i + " ");
            }
        }
    }
}