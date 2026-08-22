import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while(true) {
            int N = sc.nextInt();
            
            if(N == 25) {
                System.out.println("Good");
                break;
            }
            System.out.println(N > 25 ? "Lower" : "Higher");
        }
    }
}