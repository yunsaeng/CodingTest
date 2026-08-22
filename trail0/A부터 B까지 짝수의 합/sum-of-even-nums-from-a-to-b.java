import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();

        int result = 0;
        for(;A <= B; A++) {
            if(A % 2 != 0) continue;
            result += A;
        }
        System.out.println(result);
    }
}