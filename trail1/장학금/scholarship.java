import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int M = sc.nextInt(), F = sc.nextInt();
        
        int money = 0;
        if(M >= 90) {
            if(F >= 95) money = 100000;
            else if(F >= 90) money = 50000;
        }
        System.out.println(money);
    }
}