import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int cnt = 0;
        while(true) {
            if(N == 1) break;
            N /= 2;
            cnt++;
        }
        System.out.println(cnt);
    }
}