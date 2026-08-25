import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] strArr = sc.next().split("-");
        String s = String.join("", strArr);
        System.out.println(s);
    }
}