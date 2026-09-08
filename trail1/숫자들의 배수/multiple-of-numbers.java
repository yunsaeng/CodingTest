import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int temp = N;
        int cnt = 0;

        while(cnt < 2) {
            System.out.print(N + " ");
            if(N % 5 == 0) cnt++;
            N += temp;
        }
    }
}