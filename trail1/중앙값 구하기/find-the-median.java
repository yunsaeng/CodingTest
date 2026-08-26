import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt(), C = sc.nextInt();
        System.out.println((A >= B) ? (B >= C ? B : (A >= C ? C : A)) : (A >= C ? A : (B >= C ? C : B)));
    }
}