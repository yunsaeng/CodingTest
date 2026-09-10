import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String A = sc.next(), B = sc.next();
        while(A.indexOf(B) != -1) {
            int index = 0, prev = 0;
            String result = "";
            while((index = A.indexOf(B, index)) != -1) {
                result += A.substring(prev, index);
                prev = index + B.length();
                index = prev;
            }
            result += A.substring(prev);
            A = result;
        }
        System.out.println(A);
    }
}