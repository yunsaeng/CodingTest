import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char alpha = sc.next().charAt(0);
        for(int i = 0; i < 8; i++) System.out.print(alpha);
    }
}