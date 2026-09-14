import java.util.Scanner;
public class Main {
    public static String reverse(String s) {
        StringBuilder sb = new StringBuilder(s);
        return sb.reverse().toString();
    }

    public static boolean isPalindrome(String s) {
        String rs = reverse(s);
        return s.equals(rs);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.next();
        System.out.println(isPalindrome(input) ? "Yes" : "No");
    }
}