import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        StringBuilder result = new StringBuilder();

        while(true) {
            if(n < 2) {
                result.append(n);
                break;
            }

            result.append(n % 2);
            n /= 2;
        }

        System.out.println(result.reverse());
    }
}