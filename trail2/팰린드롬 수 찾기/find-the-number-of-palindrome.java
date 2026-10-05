import java.util.Scanner;

public class Main {
    public static boolean isPalindrome(int n) {
        char[] s = String.valueOf(n).toCharArray();
        int len = s.length;

        for(int i = 0; i < len / 2; i++) {
            if(s[i] != s[len - i - 1]) return false;
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        int ans = 0;
        for(int n = x; n <= y; n++) {
            if(isPalindrome(n)) ans++;
        }

        System.out.println(ans);
    }
}