import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        char[] chArr = sc.next().toCharArray();
        
        int cnt = 0;
        for(int i = 0; i < n; i++) {
            if(chArr[i] != 'C') continue;

            for(int j = i + 1; j < n; j++) {
                if(chArr[j] != 'O') continue;

                for(int k = j + 1; k < n; k++) {
                    if(chArr[k] == 'W') cnt++;
                }
            }
        }

        System.out.println(cnt);
    }
}