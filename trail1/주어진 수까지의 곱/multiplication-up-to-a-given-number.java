import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        int prod =1;
        for(int i = A; i <= B; i++) {
            prod *= i;
        }
        System.out.println(prod);
    }
}