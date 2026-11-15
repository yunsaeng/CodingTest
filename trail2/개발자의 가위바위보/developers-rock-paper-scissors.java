import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];
        for(int i = 0; i < n; i++){
            a[i] = sc.nextInt();
            b[i] = sc.nextInt();
        }
        
        int win = 0;
        int lose = 0;
        for(int i = 0; i < n; i++) {
            int diff = a[i] - b[i];
            if(diff == 1 || diff == -2) win++;
            else if(diff == -1 || diff == 2) lose++;
        }

        System.out.println(Math.max(win, lose));
    }
}