import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x1 = sc.nextInt();
        int y1 = sc.nextInt();
        int x2 = sc.nextInt();
        int y2 = sc.nextInt();
        int a1 = sc.nextInt();
        int b1 = sc.nextInt();
        int a2 = sc.nextInt();
        int b2 = sc.nextInt();
        
        int sx = Math.min(x1, a1), ex = Math.max(x2, a2), sy = Math.min(y1, b1), ey = Math.max(y2, b2);
        System.out.println((ex - sx) * (ey - sy));
    }
}