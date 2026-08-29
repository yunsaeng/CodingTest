import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        boolean isCD = false;
        for(int i = A; i <= B; i++) {
            if(1920 % i == 0 && 2880 % i == 0) {
                isCD = true;
                break;
            }
        }
        System.out.println(isCD ? 1 : 0);
    }
}