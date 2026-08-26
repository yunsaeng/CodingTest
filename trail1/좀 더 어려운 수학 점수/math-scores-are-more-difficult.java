import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A_math = sc.nextInt(), A_eng = sc.nextInt(), B_math = sc.nextInt(), B_eng = sc.nextInt();
        
        if(A_math > B_math) System.out.println("A");
        else if(A_math < B_math) System.out.println("B");
        else System.out.println(A_eng > B_eng ? "A" : "B");
    }
}