import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt(), C = sc.nextInt(), D = sc.nextInt(), E = sc.nextInt();
        
        System.out.println(A > B ? 1 : 0);
        System.out.println(A > C ? 1 : 0);
        System.out.println(A > D ? 1 : 0);
        System.out.println(A > E ? 1 : 0);
    }
}