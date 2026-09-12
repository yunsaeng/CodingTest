import java.util.Scanner;

public class Main {
    public static int getNum(String str) {
        String result = "";

        for(char ch : str.toCharArray()) {
            if(Character.isDigit(ch)) result += ch;
        }

        return result.length() == 0 ? 0 : Integer.parseInt(result);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String A = sc.next(), B = sc.next();
        System.out.println(getNum(A) + getNum(B));
    }
}