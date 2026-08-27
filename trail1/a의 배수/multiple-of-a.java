import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), a = sc.nextInt();
        int i = 0;
        while(i++ < N) {
            System.out.println(i % a == 0 ? 1 : 0);
        }
    }
}