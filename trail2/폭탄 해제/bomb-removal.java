import java.util.Scanner;

class C {
    String uCode;
    char lColor;
    int time;

    public C(String uCode, char lColor, int time) {
        this.uCode = uCode;
        this.lColor = lColor;
        this.time = time;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String uCode = sc.next();
        char lColor = sc.next().charAt(0);
        int time = sc.nextInt();
        
        C c = new C(uCode, lColor, time);

        System.out.println("code : " + c.uCode);
        System.out.println("color : " + c.lColor);
        System.out.println("second : " + c.time);
    }
}