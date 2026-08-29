import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int prod = 1;
        for(int i = 1; i <= 100; i++) {
            prod *= i;
            if(prod >= N) {
                System.out.println(i);
                break;
            }
        }
    }
}