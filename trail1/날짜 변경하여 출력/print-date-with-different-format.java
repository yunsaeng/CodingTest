import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String[] strArr = s.split("\\.");
        int y = Integer.parseInt(strArr[0]), m = Integer.parseInt(strArr[1]), d = Integer.parseInt(strArr[2]);
        System.out.printf("%d-%d-%d", m, d, y);
    }
}