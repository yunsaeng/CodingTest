import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int cnt = 0;
        while(true) {
            if(N >= 1000) break;
            
            if(N % 2 == 1) N = N * 2 + 2;
            else N = N * 3 + 1;
            cnt++;
        }
        System.out.println(cnt);
    }
}