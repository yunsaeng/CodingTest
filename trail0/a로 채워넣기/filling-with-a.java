import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();

        char[] chars = str.toCharArray();
        chars[1] = 'a';
        chars[str.length() - 2] = 'a';

        System.out.println(new String(chars));
    }
}