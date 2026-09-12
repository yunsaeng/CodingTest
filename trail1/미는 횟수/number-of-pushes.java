import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String A = sc.next(), B = sc.next();
        int rotateIdx = 0, len = A.length();

        while(rotateIdx < len && !A.equals(B)) {
            A = A.substring(len - 1) + A.substring(0, len - 1);
            rotateIdx++;
        }

        System.out.println(rotateIdx >= len ? -1 : rotateIdx);
    }
}