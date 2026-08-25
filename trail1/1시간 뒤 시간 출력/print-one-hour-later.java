import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String[] strArr = s.split(":");
        int h = Integer.parseInt(strArr[0]), m = Integer.parseInt(strArr[1]);
        System.out.printf("%d:%d", (h + 1) % 24, m);
    }
}