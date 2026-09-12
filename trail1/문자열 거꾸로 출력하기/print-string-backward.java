import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str;
        while(!(str = sc.next()).equals("END")) System.out.println(new StringBuilder(str).reverse());
    }
}