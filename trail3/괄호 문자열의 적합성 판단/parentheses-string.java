import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        Stack<Character> s = new Stack<>();

        for(int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if(ch == '(') {
                s.push(ch);
            } else {
                if(s.empty()) {
                    System.out.println("No");
                    return;
                } else {
                    s.pop();
                }
            }
        }

        System.out.println(s.empty() ? "Yes" : "No");
    }
}