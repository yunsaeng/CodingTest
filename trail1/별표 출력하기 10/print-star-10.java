import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int min = 0, max = N + 1;
        
        for(int i = 1; i <= N * 2; i++) {
            int stars = (i % 2 == 1) ? ++min : --max;
            for(int j = 0; j < stars; j++) System.out.print("* ");
            System.out.println();
        }
    }
}