import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int cnt = 0;
        for(int i = 0; i < N; i++) {
            if(sc.nextInt() == 2) cnt++;
            if(cnt == 3) {
                System.out.println(i + 1);
                break;
            }
        }
    }
}