import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int three = 0;
        int five = 0;
        
        for(int i = 0; i < 10; i++) {
            int num = sc.nextInt();
            if(num % 3 == 0) three++;
            if(num % 5 == 0) five++;
        }
        
        System.out.printf("%d %d", three, five);
    }
}