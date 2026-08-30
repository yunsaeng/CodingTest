import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int min = 0, max = N + 1;
        for(int i = 1; i <= N * 2; i++) {
            if(i <= N) {
                if(i % 2 == 1) {
                    min++;
                    for(int j = 1; j <= min; j++) System.out.print("* ");
                } else {
                    max--;
                    for(int j = 1; j <= max; j++) System.out.print("* ");                    
                }
            } else {
                if((2 * N - i + 1) % 2 == 1) {
                    max--;
                    for(int j = 1; j <= max; j++) System.out.print("* ");
                } else {
                    min++;
                    for(int j = 1; j <= min; j++) System.out.print("* ");
                }
            }
            System.out.println();
        }
    }
}