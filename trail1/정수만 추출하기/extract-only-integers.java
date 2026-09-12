import java.util.Scanner;

public class Main {
    public static int getNum(String str) {
        int i = 0;

        while(i < str.length() && Character.isDigit(str.charAt(i))) i++;

        return i == 0 ? 0 : Integer.parseInt(str.substring(0, i));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String A = sc.next(), B = sc.next();
        System.out.println(getNum(A) + getNum(B));
    }
}