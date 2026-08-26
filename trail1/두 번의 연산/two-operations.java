import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        
        if(A % 2 == 1) A += 3;
        
        if(A % 3 == 0) A /= 3;

        System.out.println(A);
    }
}