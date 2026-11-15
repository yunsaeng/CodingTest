import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt(), a = 0, b = 0, result = 0;
        char status = 'S';
        for (int i = 0; i < n; i++) {
            char c = sc.next().charAt(0);
            int s = sc.nextInt();

            if(c == 'A') a += s;
            else b += s;

            if(status != 'A' && a > b) {
                result++;
                status = 'A';
            }
            else if(status != 'B' && a < b) {
                result++;
                status = 'B';
            }
            else if(status != 'S' && a == b) {
                result++;
                status = 'S';
            }
        }

        System.out.println(result);
    }
}