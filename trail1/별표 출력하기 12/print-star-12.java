import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        
        for(int i = 1; i <= N; i++) {
            if(i == 1) {
                for(int j = 1; j <= N; j++) System.out.print("* ");
            } else {
                for(int j = 1; j < i; j++) System.out.print("  ");
                for(int j = i; j <= N; j++) {
                    if(j % 2 == 0) System.out.print("* ");
                    else System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}