import java.util.Scanner;
public class Main {
    public static boolean isMagicNumber(int n) {
        int sum = 0, temp = n;
        while(temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        return n % 2 == 0 && sum % 5 == 0; 
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isMagicNumber(n) ? "Yes" : "No");
    }
}