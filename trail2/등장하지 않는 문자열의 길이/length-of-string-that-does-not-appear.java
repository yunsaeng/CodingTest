import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String str = sc.next();
        
        int l = 1;
        for(; l < n; l++) {
            boolean check = false;

            for(int i = 0; i <= n - l; i++) {
                String temp = str.substring(i, i + l);
                int total = 0;

                for(int j = 0; j <= n - l; j++) {
                    int cnt = 0;

                    for(int k = 0; k < l; k++) {
                        if(str.charAt(j + k) != temp.charAt(k)) break;
                        cnt++;
                    }

                    if(cnt == l) total++;
                }

                if(total > 1) {
                    check = true;
                    break;
                }
            }

            if(!check) {
                System.out.println(l);
                return;
            }
        }

        System.out.println(l);
    }
}