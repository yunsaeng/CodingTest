import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), M = sc.nextInt();
        int cnt = 0;
        for(int i = 0; i < N; i++) if(M == sc.nextInt()) cnt++;
        System.out.println(cnt);
    }
}