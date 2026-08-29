import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        int sum = 0;
        int cnt = 0;
        for(int i = Math.min(A, B); i <= Math.max(A, B); i++) {
            if(i % 5 == 0) {
                sum += i;
            }
        }
        System.out.println(sum);
    }
}