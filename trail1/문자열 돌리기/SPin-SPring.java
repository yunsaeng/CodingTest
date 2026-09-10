import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int len = str.length();
        for(int i = 0; i <= len; i++) System.out.println(str.substring(len - i, len) + str.substring(0, len - i));
    }
}