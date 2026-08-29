import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        boolean satisfied = false;
        for(int i = a; i <= b; i++) {
            if(i % c == 0) {
                satisfied = true;
                break;
            }
        }
        System.out.println(satisfied ? "NO" : "YES");
    }
}