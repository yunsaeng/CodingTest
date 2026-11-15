import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        int result = Math.min(Math.min(Math.abs(A - x) + Math.abs(B - y), Math.abs(A - y) + Math.abs(B - x)), Math.abs(A - B));
        System.out.println(result);
    }
}