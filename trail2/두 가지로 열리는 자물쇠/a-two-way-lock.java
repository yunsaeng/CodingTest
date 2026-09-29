import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int a1 = sc.nextInt();
        int b1 = sc.nextInt();
        int c1 = sc.nextInt();

        int a2 = sc.nextInt();
        int b2 = sc.nextInt();
        int c2 = sc.nextInt();
        
        int cnt = 0;
        for(int x = 1; x <= n; x++) {
            for(int y = 1; y <= n; y++) {
                for(int z = 1; z <= n; z++) {
                    // 원형 거리: min(직선거리, 원형거리)
                    int diffx1 = Math.min(Math.abs(x - a1), n - Math.abs(x - a1));
                    int diffy1 = Math.min(Math.abs(y - b1), n - Math.abs(y - b1));
                    int diffz1 = Math.min(Math.abs(z - c1), n - Math.abs(z - c1));
                    boolean isOpen1 = diffx1 <= 2 && diffy1 <= 2 && diffz1 <= 2;

                    int diffx2 = Math.min(Math.abs(x - a2), n - Math.abs(x - a2));
                    int diffy2 = Math.min(Math.abs(y - b2), n - Math.abs(y - b2));
                    int diffz2 = Math.min(Math.abs(z - c2), n - Math.abs(z - c2));
                    boolean isOpen2 = diffx2 <= 2 && diffy2 <= 2 && diffz2 <= 2;

                    if(isOpen1 || isOpen2) cnt++;
                }
            }
        }

        System.out.println(cnt);
    }
}