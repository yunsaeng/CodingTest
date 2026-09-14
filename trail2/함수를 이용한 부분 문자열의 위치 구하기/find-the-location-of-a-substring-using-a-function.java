import java.util.Scanner;

public class Main {
    public static int idx = 0;

    public static int indexOf(String text, String pattern) {
        for(; idx <= text.length() - pattern.length(); idx++) {
            boolean match = true;
            for(int i = 0; i < pattern.length(); i++) {
                if(text.charAt(idx + i) != pattern.charAt(i)) {
                    match = false;
                    break;
                }
            }
            if(match) return idx;
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.next();
        String pattern = sc.next();
        System.out.println(indexOf(text, pattern));
    }
}