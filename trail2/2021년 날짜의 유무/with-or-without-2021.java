import java.util.Scanner;
public class Main {
    public static boolean isDate(int m, int d) {
        if(m <= 7) {
            if(m == 2) return d <= 28;
            else {
                if(m % 2 == 1) return d <= 31;
                else return d <= 30;
            }
        } else if(m <= 12) {
            if(m % 2 == 0) return d <= 31;
            else return d <= 30;
        } else return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int d = sc.nextInt();
        System.out.println(isDate(m, d) ? "Yes" : "No");
    }
}