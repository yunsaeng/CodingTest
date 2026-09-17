import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        String N = sc.next();
        
        int num = Integer.parseInt(N, A);
        StringBuilder result = new StringBuilder();
        while(true) {
            if(num < B) {
                result.append(num);
                break;
            }

            result.append(num % B);
            num /= B;
        }

        System.out.println(result.reverse());
    }
}