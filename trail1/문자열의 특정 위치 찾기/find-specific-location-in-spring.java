import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        String c = sc.next();

        int idx = str.indexOf(c);
        System.out.println(idx == -1 ? "No" : idx);
    }
}