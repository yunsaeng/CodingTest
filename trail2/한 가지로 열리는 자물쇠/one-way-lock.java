import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        int cnt = 0;
        for(int x = 1; x <= n; x++) {
            for(int y = 1; y <= n; y++) {
                for(int z = 1; z <= n; z++) {
                    if(Math.abs(x - a) <= 2 || Math.abs(y - b) <= 2 || Math.abs(z - c) <= 2) cnt++;
                }
            }
        }

        System.out.println(cnt);
    }
}