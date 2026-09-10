import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] strArr = {"apple", "banana", "grape", "blueberry", "orange"};

        int cnt = 0;
        char ch = sc.next().charAt(0);
        for(String str : strArr) {
            if(str.charAt(2) == ch || str.charAt(3) == ch) {
                System.out.println(str);
                cnt++;
            }
        }
        System.out.println(cnt);
    }
}