import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        while(A <= B) {
            System.out.print(A + " ");
            A = A % 2 == 0 ? A + 3 : A * 2;
        }
    }
}