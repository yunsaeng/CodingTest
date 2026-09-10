import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        int totalLength = 0, cnt = 0;
        for(int i = 0; i < N; i++) {
            String s = sc.next();
            totalLength += s.length();
            if(s.charAt(0) == 'a') cnt++;
        }

        System.out.println(totalLength + " " + cnt);
    }
}