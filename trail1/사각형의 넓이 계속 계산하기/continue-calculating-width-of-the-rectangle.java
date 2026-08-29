import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true) {
            int width = sc.nextInt();
            int height = sc.nextInt();
            String s = sc.next();

            System.out.println(width * height);
            if(s.equals("C")) break;
        }
    }
}