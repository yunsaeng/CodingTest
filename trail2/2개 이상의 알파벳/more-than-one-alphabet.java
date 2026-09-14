import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static boolean isVarious(String str) {
        Set<Character> s = new HashSet<>();
        for(char ch : str.toCharArray()) {
            s.add(ch);
        }
        return s.size() >= 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String A = sc.next();
        System.out.println(isVarious(A) ? "Yes" : "No");
    }
}