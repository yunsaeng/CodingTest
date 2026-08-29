import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        boolean isCN = false;
        for(int i = 2; i < N; i++) {
            if(N % i == 0) {
                isCN = true;
                break;
            }
        }
        System.out.println(isCN ? "C" : "N");
    }
}