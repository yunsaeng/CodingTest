import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A_math = sc.nextInt(), A_eng = sc.nextInt(), B_math = sc.nextInt(), B_eng = sc.nextInt();
        
        System.out.println(A_math > B_math && A_eng > B_eng ? 1 : 0);
    }
}