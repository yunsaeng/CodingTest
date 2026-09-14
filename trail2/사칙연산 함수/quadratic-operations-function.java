import java.util.Scanner;
public class Main {
    public static boolean isOper(char o) {
        return o == '+' || o == '-' || o == '/' || o == '*';
    }

    public static int calculate(int a, char o, int c) {
        if(o == '+') return a + c;
        else if(o == '-') return a - c;
        else if(o == '/') return a / c;
        else return a * c;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        char o = sc.next().charAt(0);
        int c = sc.nextInt();
        
        if(isOper(o)) System.out.printf("%d %c %d = %d", a, o, c, calculate(a, o, c));
        else System.out.println("False");
    }
}