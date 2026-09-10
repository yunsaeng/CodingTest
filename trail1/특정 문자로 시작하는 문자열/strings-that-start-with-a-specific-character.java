import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        String[] strArr = new String[N];
        for(int i = 0; i < N; i++) strArr[i] = sc.next();

        char ch = sc.next().charAt(0);
        int totalLength = 0, cnt = 0;
        for(String str : strArr) {
            if(str.charAt(0) == ch) {
                totalLength += str.length();
                cnt++;
            }
        }
        System.out.printf("%d %.2f", cnt, (double)totalLength / cnt);
    }
}