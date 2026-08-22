import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();

        if(a.length() > b.length()) System.out.println(a + " " + a.length());
        else if(a.length() == b.length()) System.out.println("same");
        else System.out.println(b + " " + b.length());
    }
}