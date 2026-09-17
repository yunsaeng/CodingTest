import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int b = sc.nextInt();
        StringBuilder result = new StringBuilder();

        while(true) {
            if(n < b) {
                result.append(n);
                break;
            }

            result.append(n % b);
            n /= b;
        }

        System.out.println(result.reverse());
    }
}