import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String A = sc.next();

        int cnt = 0;
        for(int i = 0; i < n; i++) {
            if(sc.next().equals(A)) cnt++;
        }

        System.out.println(cnt);
    }
}