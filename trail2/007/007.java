import java.util.Scanner;

class C {
    String sCode;
    char mPoint;
    int time;

    public C(String sCode, char mPoint, int time) {
        this.sCode = sCode;
        this.mPoint = mPoint;
        this.time = time;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String sCode = sc.next();
        char mPoint = sc.next().charAt(0);
        int time = sc.nextInt();
        C c = new C(sCode, mPoint, time);

        System.out.println("secret code : " + c.sCode);
        System.out.println("meeting point : " + c.mPoint);
        System.out.println("time : " + c.time);
    }
}