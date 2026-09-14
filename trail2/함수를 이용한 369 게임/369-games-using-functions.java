import java.util.Scanner;
public class Main {
    public static boolean isMagicNumber(int n) {
        String str = String.valueOf(n);
        return str.contains("3") || str.contains("6") || str.contains("9") || n % 3 == 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        int cnt = 0;
        for(int n = A; n <= B; n++) if(isMagicNumber(n)) cnt++;
        System.out.println(cnt);
    }
}