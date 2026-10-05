import java.util.Scanner;

public class Main {
    public static boolean isInterestingNum(int n) {
        String s = String.valueOf(n);
        int[] count = new int[10];

        for(char c : s.toCharArray()) count[c - '0']++;

        int diffCount = 0;
        boolean hasOne = false;

        for(int c : count) {
            if(c > 0) diffCount++;
            if(c == 1) hasOne = true;
        }

        return diffCount == 2 && hasOne;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        int cnt = 0;
        for(int n = x; n <= y; n++) {
            if(isInterestingNum(n)) cnt++;
        }

        System.out.println(cnt);
    }
}