import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean satisfied = false;
        for(int i = 0; i < 5; i++) {
            int n = sc.nextInt();
            if(n % 3 != 0) {
                satisfied = true;
                break;
            }
        }
        System.out.println(satisfied ? 0 : 1);
    }
}